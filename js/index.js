const header = document.querySelector('header');
const phoneInput = document.querySelector('#phone');

// Маска инпута
function applyPhoneMask(inputElement) {
    inputElement.addEventListener('input', function (e) {
        let value = inputElement.value.replace(/\D/g, ""); // Убираем все символы, кроме цифр

        // Добавляем префикс +7
        if (value.startsWith("7")) {
            value = value.substring(1);
        }

        // Форматируем номер телефона
        let formattedValue = "+7";
        if (value.length > 0) {
            formattedValue += " (" + value.substring(0, 3);
        }
        if (value.length >= 4) {
            formattedValue += ") " + value.substring(3, 6);
        }
        if (value.length >= 7) {
            formattedValue += " " + value.substring(6, 8);
        }
        if (value.length >= 9) {
            formattedValue += " " + value.substring(8, 10);
        }

        inputElement.value = formattedValue;

        // Проверяем корректность номера
        if (value.length === 10) {
            inputElement.classList.remove('invalid');
        } else {
            inputElement.classList.add('invalid');
        }
    });

    inputElement.addEventListener('blur', function () {
        if (inputElement.value === "+7 (") {
            inputElement.value = ""; // Если пользователь не ввел номер, очищаем поле
            inputElement.classList.add('invalid'); // Добавляем класс invalid, если поле пустое
        }
    });
}

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
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

// Якоря
document.querySelectorAll('.haeder__navLink').forEach((link) => {
    link.addEventListener('click', (evt) => {
        evt.preventDefault();
        const targetID = evt.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetID);
        header.classList.remove('active');
        document.body.classList.remove('lock');

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });

    });
});

// Моб меню
document.querySelector('.header__btn').addEventListener("click", (evt) => {
    evt.stopPropagation();
    document.body.classList.toggle('lock')
    header.classList.toggle("active")
});

applyPhoneMask(phoneInput);