// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle') || document.getElementById('nav-toggle-2');
const siteNav = document.getElementById('site-nav') || document.querySelector('.site-nav');
if(navToggle && siteNav){
  navToggle.addEventListener('click', ()=>{
    siteNav.classList.toggle('open');
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth'});
    }
  });
});
