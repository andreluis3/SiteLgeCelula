import { site, page, areasIntro, areas, labContact, projects, strategicThemes } from '../data/content.js';
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderAccordion, contactCard } from './components/area-accordion.js';
import { media, esc } from './components/media.js';

renderHeader(document.getElementById('site-header'));
renderFooter(document.getElementById('site-footer'));

const main = document.getElementById('main');
main.innerHTML = `<div class="container">
  <div class="page-head"><p class="eyebrow">${esc(page.section)}</p><h1>${esc(page.title)}</h1><p class="meta">${esc(page.published)}</p></div>
  <div class="cover" id="cover"></div>
  <h2>${esc(page.subtitle)}</h2>
  <div class="prose">${page.intro.map((p) => `<p>${p}</p>`).join('')}</div>
  <section class="quality-highlight" aria-labelledby="quality-title">
    <div class="quality-copy"><p class="eyebrow">Qualidade</p><h2 id="quality-title">Indicadores em destaque</h2><p>Indicadores apresentados conforme informação fornecida. Período, método e fonte permanecem pendentes de validação institucional.</p></div>
    <div class="quality-metrics"><div class="quality-metric"><strong>99%</strong><span>avaliação positiva dos clientes</span></div><div class="quality-metric"><strong>Zero</strong><span>retrabalhos</span></div></div>
  </section>
  <section class="editorial-section" id="projetos">
    <h2>Projetos e aplicações</h2>
    <p>Exemplos de projetos e aplicações relacionados à atuação técnica do LGE.</p>
    <div class="project-grid">${projects.map((p) => `<article class="project-item"><h3>${esc(p.title)}</h3><p>${p.text}</p></article>`).join('')}</div>
  </section>
  <section class="editorial-section" id="frentes">
    <h2>Frentes estratégicas e aplicações</h2>
    <div class="theme-grid">${strategicThemes.map((t, i) => `<article class="theme-card"><span class="theme-number">${String(i + 1).padStart(2, '0')}</span><h3>${esc(t.title)}</h3><p>${t.text}</p></article>`).join('')}</div>
  </section>
  <h2>Contato</h2><div id="lab-contact"></div>
  <h2 id="areas">${esc(areasIntro.title)}</h2>
  <p>${esc(areasIntro.text)}</p>
  <ul class="area-list">${areasIntro.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
  <div id="accordions"></div>
  <div class="share"><span>Compartilhe</span>
    <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(site.officialUrl)}">LinkedIn</a>
    <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(site.officialUrl)}">Facebook</a></div>
</div>`;
document.getElementById('cover').append(media(page.cover.src, page.cover.alt, page.cover.label));
document.getElementById('lab-contact').append(contactCard(labContact));
const acc = document.getElementById('accordions');
areas.forEach((a) => acc.append(renderAccordion(a)));

// Abre o acordeão indicado na âncora (#emc, #seguranca, #optica)
function openFromHash() {
  const id = location.hash.slice(1);
  const btn = id && document.getElementById('acc-btn-' + id);
  if (btn) { if (btn.getAttribute('aria-expanded') !== 'true') btn.click(); btn.scrollIntoView(); }
}
addEventListener('hashchange', openFromHash);
openFromHash();
