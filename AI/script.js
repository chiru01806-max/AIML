(() => {
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.menu-toggle');
  if (nav && toggle) toggle.addEventListener('click', () => { const isOpen = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', isOpen); });
  document.querySelectorAll('.site-nav a').forEach(link => link.addEventListener('click', () => nav?.classList.remove('open')));
  document.querySelectorAll('[data-year]').forEach(node => node.textContent = new Date().getFullYear());
  const cards = [...document.querySelectorAll('.document-card')];
  const search = document.querySelector('.search input');
  const empty = document.querySelector('.empty-state');
  if (search) search.addEventListener('input', event => { const term = event.target.value.trim().toLowerCase(); let matches = 0; cards.forEach(card => { const match = card.textContent.toLowerCase().includes(term); card.hidden = !match; if (match) matches++; }); if (empty) empty.hidden = matches > 0; });
  const reveal = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) { const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 }); reveal.forEach(element => observer.observe(element)); } else reveal.forEach(element => element.classList.add('visible'));
})();
