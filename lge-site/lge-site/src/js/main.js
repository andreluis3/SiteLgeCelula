import { site, page, areasIntro, areas, areaHighlights, labContact, projects, qualityIndicators } from '../data/content.js';
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderAccordion, contactCard } from './components/area-accordion.js';
import { media, esc } from './components/media.js';

renderHeader(document.getElementById('site-header'));
renderFooter(document.getElementById('site-footer'));

const main = document.getElementById('main');
main.innerHTML = `<div class="container">
  <header class="page-head"><p class="eyebrow">${esc(page.section)}</p><h1>${esc(page.title)}</h1><p class="meta">${esc(page.published)}</p></header>
  <div class="cover" id="cover"></div>
  <section class="intro-section" aria-labelledby="intro-title"><h2 id="intro-title">${esc(page.subtitle)}</h2><div class="prose">${page.intro.map((p) => `<p>${p}</p>`).join('')}</div></section>
  <section class="area-overview" aria-labelledby="areas"><p class="eyebrow">Competências técnicas</p><h2 id="areas">Principais áreas de atuação</h2><p class="section-lead">${esc(areasIntro.text)}</p><div class="area-highlight-grid" id="area-highlights"></div></section>
  <section class="area-details" aria-labelledby="details-title"><p class="eyebrow">Detalhamento técnico</p><h2 id="details-title">Áreas de atuação</h2><div id="accordions"></div></section>
  <section class="contact-section" aria-labelledby="contact-title"><h2 id="contact-title">Contatos</h2><div id="lab-contact"></div></section>
  <section class="quality" aria-labelledby="quality-title"><div><p class="eyebrow">Qualidade</p><h2 id="quality-title">Indicadores em destaque</h2><p>Dados apresentados conforme informação fornecida. Período, método e fonte estão pendentes de validação institucional.</p></div><div class="quality-grid">${qualityIndicators.map((i) => `<article><strong>${esc(i.value)}</strong><span>${esc(i.label)}</span></article>`).join('')}</div></section>
  <section aria-labelledby="projects-title"><p class="eyebrow">Experiência aplicada</p><h2 id="projects-title">Projetos e iniciativas de transformação tecnológica</h2><p class="section-lead">Experiências e aplicações citadas na apresentação institucional do LGE. Os cards não atribuem contratos, resultados ou especificações não documentadas.</p><div class="project-grid" id="projects"></div></section>
  <div class="share"><span>Compartilhe</span>
    <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(site.officialUrl)}">LinkedIn</a>
    <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(site.officialUrl)}">Facebook</a></div>
</div>`;
document.getElementById('cover').append(media(page.cover.src, page.cover.alt, page.cover.label));
document.getElementById('lab-contact').append(contactCard(labContact));
const acc = document.getElementById('accordions');
areas.forEach((a) => acc.append(renderAccordion(a)));
const highlights = document.getElementById('area-highlights');
areaHighlights.forEach((area) => {
  const card = document.createElement(area.target ? 'a' : 'article');
  card.className = 'area-highlight-card';
  if (area.target) card.href = `#${area.target}`;
  const visual = document.createElement('div');
  visual.className = 'area-highlight-media';
  visual.append(media(area.image, area.title, area.imageLabel));
  card.append(visual);
  card.insertAdjacentHTML('beforeend', `<div><h3>${esc(area.title)}</h3><p>${esc(area.description)}</p></div>`);
  highlights.append(card);
});
const projectRoot = document.getElementById('projects');
projects.forEach((project) => {
  const card = document.createElement('article');
  card.className = 'project-card';
  const visual = document.createElement('div'); visual.className = 'project-image';
  visual.append(media(project.image, project.title, project.imageLabel));
  card.append(visual);
  card.insertAdjacentHTML('beforeend', `<div class="project-content"><h3>${esc(project.title)}</h3><p>${esc(project.description)}</p><p><strong>Como o laboratório contribuiu:</strong> ${esc(project.contribution)}</p><ul class="tag-list">${project.tags.map((tag) => `<li>${esc(tag)}</li>`).join('')}</ul></div>`);
  projectRoot.append(card);
});

// Abre o setor de + indicado na âncora (#emc, #seguranca, #optica)
function openFromHash() {
  const id = location.hash.slice(1);
  const btn = id && document.getElementById('acc-btn-' + id);
  if (btn) { if (btn.getAttribute('aria-expanded') !== 'true') btn.click(); btn.scrollIntoView(); }
}
addEventListener('hashchange', openFromHash);
openFromHash();
