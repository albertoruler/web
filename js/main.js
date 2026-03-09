// Slider Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: { el: '.swiper-pagination', clickable:true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    autoplay: { delay:5000 },
});

// Menú móvil
const toggle = document.getElementById('menu-toggle');
const menu = document.querySelector('header nav ul');
toggle.addEventListener('click', ()=>{ menu.classList.toggle('show'); });

// Scroll animaciones (opcional)
const animatedItems = document.querySelectorAll('.animate__animated');
window.addEventListener('scroll', () => {
    animatedItems.forEach(item => {
        const top = item.getBoundingClientRect().top;
        if(top < window.innerHeight - 100) item.classList.add('animate__fadeInUp');
    });
});