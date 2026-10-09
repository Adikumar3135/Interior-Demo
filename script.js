const loader = document.getElementById('loader');
window.addEventListener('load', () => setTimeout(() => loader?.classList.add('done'), 1050));
const overlay = document.getElementById('menuOverlay');
document.getElementById('menuToggle')?.addEventListener('click', () => { overlay.classList.add('open'); document.body.style.overflow='hidden'; });
document.getElementById('menuClose')?.addEventListener('click', closeMenu);
function closeMenu(){ overlay?.classList.remove('open'); document.body.style.overflow=''; }
document.addEventListener('keydown', e => { if(e.key==='Escape') closeMenu(); });
document.querySelectorAll('a[href$=".html"]').forEach(link => {
  const target = link.getAttribute('href');
  if(target && !target.startsWith('#')) link.addEventListener('click', e => {
    if(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault(); closeMenu();
    loader?.classList.remove('done');
    setTimeout(() => window.location.href = target, 450);
  });
});
document.querySelectorAll('form[data-demo-form]').forEach(form => form.addEventListener('submit', e => {
  e.preventDefault(); form.querySelector('.form-success')?.classList.add('show'); form.reset();
}));