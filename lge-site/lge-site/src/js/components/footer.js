import { site, footer } from '../../data/content.js';
import { media, esc } from './media.js';

const links = (arr) => arr.map(([t, h]) => `<li><a href="${esc(h)}">${esc(t)}</a></li>`).join('');

export function renderFooter(root) {
  root.innerHTML = `<div class="container">
    <div class="foot-logos" id="foot-logos"></div>
    <div class="foot-cols">
      <div><h3>Aqui tem IPT</h3><ul>${links(footer.social)}</ul></div>
      ${footer.cols.map((c) => `<div><h3>${esc(c.title)}</h3><ul>${links(c.links)}</ul></div>`).join('')}
    </div>
    <div class="newsletter"><label for="nl">Inscreva-se na nossa newsletter</label>
      <input id="nl" type="email" disabled placeholder="Provisório: sem envio"><button type="button" disabled>Me inscrever</button></div>
    <div class="foot-logos" id="partners"></div>
    <div class="legal"><ul>${links(footer.legal)}</ul><span>${esc(footer.copyright)}</span></div></div>`;
  const logos = root.querySelector('#foot-logos');
  logos.append(media(site.logo, 'Instituto de Pesquisas Tecnológicas', 'Logo IPT'));
  const gov = document.createElement('a'); gov.href = site.govLink; gov.append(media(site.govLogo, 'Governo do Estado de São Paulo', 'Logo Governo SP'));
  logos.append(gov);
  const partners = root.querySelector('#partners');
  footer.partners.forEach((p) => { const a = document.createElement('a'); a.href = p.href; a.append(media(p.src, p.alt)); partners.append(a); });
}
