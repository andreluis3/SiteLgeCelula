// Imagem com fallback: se o recurso não carregar, mostra placeholder identificado.
export function placeholder(label) {
  const d = document.createElement('div');
  d.className = 'ph';
  d.setAttribute('role', 'img');
  d.setAttribute('aria-label', 'Espaço reservado: ' + label);
  d.textContent = 'Imagem a substituir: ' + label;
  return d;
}
export function media(src, alt, label = alt) {
  if (!src) return placeholder(label);
  const img = document.createElement('img');
  img.src = src; img.alt = alt || ''; img.loading = 'lazy';
  img.addEventListener('error', () => img.replaceWith(placeholder(label)), { once: true });
  return img;
}
export const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
