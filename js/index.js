const header = document.querySelector('header');

document.querySelectorAll('.anchor-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetID = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetID);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });

        header.classList.remove('active')
        document.body.classList.remove('lock')
    });
});
document.querySelector('.header__btn').addEventListener("click", () => {
    document.body.classList.toggle('lock')
    header.classList.toggle("active")
});

const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    spaceBetween: 15,
    breakpoints: {
        320: {
            slidesPerView: "auto",
            spaceBetween: 15,
        },
        1120: {
            slidesPerView: 3,
            spaceBetween: 40
        },

    },
    navigation: {
        nextEl: '.swiper-button-next', // Селектор для кнопки "вперед"
        prevEl: '.swiper-button-prev'  // Селектор для кнопки "назад"
    }
});