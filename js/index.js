const header = document.querySelector('header');
const phoneInput = document.querySelector('#phone');

// Маска инпута
function applyPhoneMask(inputElement) {
    inputElement.addEventListener('input', function () {
        // Убираем все символы, кроме цифр
        let value = inputElement.value.replace(/\D/g, "");

        // Если пользователь вводит номер с нуля, подставляем "+7" только один раз
        if (value === "") {
            value = "";
        } else if (!value.startsWith("7")) {
            value = "7" + value;
        }

        // Удаляем лишние начальные 7, если они дублируются
        value = value.replace(/^77+/, "7");

        // Форматируем номер телефона
        let formattedValue = "+7";
        if (value.length > 1) {
            formattedValue += " (" + value.substring(1, 4);
        }
        if (value.length >= 5) {
            formattedValue += ") " + value.substring(4, 7);
        }
        if (value.length >= 8) {
            formattedValue += " " + value.substring(7, 9);
        }
        if (value.length >= 10) {
            formattedValue += " " + value.substring(9, 11);
        }

        // Обновляем значение в поле
        inputElement.value = formattedValue;

        // Проверяем корректность номера
        if (value.length === 11) {
            inputElement.classList.remove('invalid');
        } else {
            inputElement.classList.add('invalid');
        }
    });

    inputElement.addEventListener('blur', function () {
        if (inputElement.value === "+7 (" || inputElement.value === "+7") {
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

document.querySelectorAll('.custom-select-wrapper').forEach(wrapper => {
    const select = wrapper.querySelector('.custom-select');
    select.addEventListener('focus', () => wrapper.classList.add('open'));
    select.addEventListener('blur', () => wrapper.classList.remove('open'));
});

applyPhoneMask(phoneInput);