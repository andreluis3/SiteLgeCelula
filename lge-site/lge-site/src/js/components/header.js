import { site, nav } from '../../data/content.js';
import { media, esc } from './media.js';

const link = (l, extra = '') => `<a href="${esc(l.href || l[1])}" ${extra}>${esc(l.label || l[0])}</a>`;

function item(n) {
  if (n.mega) {
    return `<li class="has-sub"><button class="nav-link" aria-expanded="false" aria-haspopup="true">${esc(n.label)}</button>
      <div class="submenu mega">${n.groups.map((g) => `<div><h3>${esc(g.title)}</h3><ul>${g.links.map((l) => `<li>${link(l)}</li>`).join('')}</ul></div>`).join('')}</div></li>`;
  }
  if (n.children) {
    return `<li class="has-sub"><button class="nav-link" aria-expanded="false" aria-haspopup="true">${esc(n.label)}</button>
      <ul class="submenu">${n.children.map((c) => `<li>${link(c)}</li>`).join('')}</ul></li>`;
  }
  return `<li>${link(n)}</li>`;
}

export function renderHeader(root) {
  root.innerHTML = `<div class="container header-bar">
    <a class="logo" href="${esc(site.officialUrl)}" aria-label="Instituto de Pesquisas Tecnológicas"></a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="main-nav">Menu</button>
    <nav class="main-nav" id="main-nav" aria-label="Principal"><ul>${nav.map(item).join('')}</ul>
      <div class="lang" title="Seletor de idioma não implementado (na página oficial os links são '#')"><span>PT</span><span>EN</span></div></nav></div>`;
  const logo = root.querySelector('.logo');
  const img = media(site.logo, 'Instituto de Pesquisas Tecnológicas');
  if (img.tagName === 'IMG') { img.addEventListener('error', () => { logo.textContent = 'IPT'; }, { once: true }); }
  logo.append(img);

  const navEl = root.querySelector('.main-nav'), toggle = root.querySelector('.nav-toggle');
  const subs = [...root.querySelectorAll('.has-sub')];
  const close = (except) => subs.forEach((li) => { if (li !== except) { li.classList.remove('open'); li.querySelector('button').setAttribute('aria-expanded', 'false'); } });
  toggle.addEventListener('click', () => { const o = navEl.classList.toggle('open'); toggle.setAttribute('aria-expanded', o); });
  subs.forEach((li) => {
    const btn = li.querySelector('button');
    btn.addEventListener('click', () => { const o = li.classList.toggle('open'); btn.setAttribute('aria-expanded', o); close(li); });
  });
  root.addEventListener('keydown', (e) => { if (e.key === 'Escape') { const open = subs.find((l) => l.classList.contains('open')); close(); open?.querySelector('button').focus(); } });
  document.addEventListener('click', (e) => { if (!root.contains(e.target)) close(); });
  root.addEventListener('focusout', (e) => { if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)) close(); });
}
