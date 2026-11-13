import { media, esc } from './media.js';

export function contactCard(c, headingTag = 'h4') {
  const el = document.createElement('div');
  el.className = 'contact';
  const photo = document.createElement('div');
  photo.className = 'photo';
  photo.append(media(c.photo, c.name || 'Responsável', 'Foto do responsável'));
  const info = document.createElement('div');
  const label = c.label || 'Telefone:'; // rótulo literal do site oficial (valores são e-mails)
  info.innerHTML = `${c.title ? `<${headingTag}>${esc(c.title)}</${headingTag}>` : ''}
    <p>${c.name ? esc(c.name) : '<span class="pending">Responsável: pendente de confirmação</span>'}</p>
    ${c.emails?.length ? `<p>${esc(label)} ${c.emails.map((m) => `<a href="mailto:${esc(m)}">${esc(m)}</a>`).join(' | ')}</p>` : ''}`;
  el.append(photo, info);
  return el;
}

function renderGallery(area) {
  if (!area.gallery?.length) return null;
  const gallery = document.createElement('div');
  gallery.className = `gallery${area.id === 'seguranca' ? ' gallery-featured' : ''}`;
  area.gallery.forEach((im) => {
    const figure = document.createElement('figure');
    figure.append(media(im.src, im.alt, im.label));
    const caption = document.createElement('figcaption');
    caption.textContent = im.label;
    figure.append(caption);
    gallery.append(figure);
  });
  return gallery;
}

// Catálogo reutilizável: mantém cada item técnico sem alteração e reduz listas longas.
function renderTestCatalog(heading, items) {
  const section = document.createElement('section');
  section.className = 'technical-catalog';
  section.innerHTML = `<h3>${esc(heading)}</h3><div class="test-grid">${items.map((item) =>
    `<article class="test-card"><h4>${esc(heading)}</h4><p>${esc(item)}</p></article>`).join('')}</div>`;
  return section;
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
  let galleryInserted = false;
  area.blocks.forEach((b) => {
    if (b.type === 'p') {
      panel.insertAdjacentHTML('beforeend', `<p>${b.html}</p>`);
      if (area.galleryPosition === 'afterIntro' && !galleryInserted) {
        panel.append(renderGallery(area)); galleryInserted = true;
      }
    } else panel.append(renderTestCatalog(b.heading, b.items));
  });
  if (!galleryInserted) panel.append(renderGallery(area));
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
