import { media, esc } from './media.js';

export function contactCard(c, headingTag = 'h5') {
  const el = document.createElement('div');
  el.className = 'contact wp-block-media-text is-stacked-on-mobile has-background';
  el.style.backgroundColor = '#123c59';
  el.style.gridTemplateColumns = '46% auto';
  const photo = document.createElement('figure');
  photo.className = 'wp-block-media-text__media';
  photo.append(media(c.photo, c.name || 'Responsável', 'Foto do responsável'));
  const info = document.createElement('div');
  info.className = 'wp-block-media-text__content';
  const label = c.label || 'Telefone:'; // rótulo literal do site oficial (valores são e-mails)
  info.innerHTML = `${c.title ? `<${headingTag} class="wp-block-heading has-white-color has-text-color">${esc(c.title)}</${headingTag}>` : ''}
    <p class="has-white-color has-text-color">${c.name ? esc(c.name) : '<span class="pending">Responsável: pendente de confirmação</span>'}</p>
    ${c.emails?.length ? `<p class="has-white-color has-text-color">${esc(label)} ${c.emails.map((m) => `<a href="mailto:${esc(m)}">${esc(m)}</a>`).join(' | ')}</p>` : ''}`;
  el.append(photo, info);
  return el;
}

export function renderAccordion(area) {
  const wrap = document.createElement('section');
  wrap.className = 'accordion';
  wrap.id = area.id;
  const bid = `acc-btn-${area.id}`, pid = `acc-panel-${area.id}`;
  wrap.innerHTML = `<h3 style="margin:0"><button class="acc-btn" id="${bid}" aria-expanded="false" aria-controls="${pid}">
      <span>${esc(area.title)}</span><span class="icon" aria-hidden="true">+</span></button></h3>
    <div class="acc-panel" id="${pid}" role="region" aria-labelledby="${bid}" hidden></div>`;
  const panel = wrap.querySelector('.acc-panel');
  area.blocks.forEach((b) => {
    if (b.type === 'p') panel.insertAdjacentHTML('beforeend', `<p>${b.html}</p>`);
    else panel.insertAdjacentHTML('beforeend', `<h3>${esc(b.heading)}</h3><ul>${b.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`);
  });
  if (area.gallery?.length) {
    const g = document.createElement('div'); g.className = 'gallery';
    area.gallery.forEach((im) => {
      const f = document.createElement('figure');
      f.append(media(im.src, im.alt, im.label));
      if (im.label) { const cap = document.createElement('figcaption'); cap.textContent = im.label; f.append(cap); }
      g.append(f);
    });
    panel.append(g);
  }
  if (area.contacts?.length) {
    const row = document.createElement('div'); row.className = 'contacts-row';
    area.contacts.forEach((c) => row.append(contactCard(c)));
    panel.append(row);
  }
  const btn = wrap.querySelector('.acc-btn');
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    panel.hidden = open;
  });
  return wrap;
}
