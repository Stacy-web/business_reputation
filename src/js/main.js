new Vue({
    el: '#reviews-vue',
    data() {
        return {
            reviews_list: [
                { logo: 'src/images/reviews/logo/1.png', preview: 'src/images/reviews/preview/1.jpg' },
                { logo: 'src/images/reviews/logo/2.png', preview: 'src/images/reviews/preview/1.jpg' },
                { logo: 'src/images/reviews/logo/3.png', preview: 'src/images/reviews/preview/1.jpg' },
                { logo: 'src/images/reviews/logo/4.png', preview: 'src/images/reviews/preview/1.jpg' },
                { logo: 'src/images/reviews/logo/5.png', preview: 'src/images/reviews/preview/1.jpg' },
                { logo: 'src/images/reviews/logo/6.png', preview: 'src/images/reviews/preview/1.jpg' },
                { logo: 'src/images/reviews/logo/6.png', preview: 'src/images/reviews/preview/1.jpg' },
                { logo: 'src/images/reviews/logo/5.png', preview: 'src/images/reviews/preview/1.jpg' },
                { logo: 'src/images/reviews/logo/4.png', preview: 'src/images/reviews/preview/1.jpg' }
            ],
            currentPreview: 'src/images/reviews/preview/1.jpg',
            isActiveIndex: 0
        }
    },
    methods: {
        test: function (index) {
            this.currentPreview = this.reviews_list[index].preview;
            this.isActiveIndex = index;
        }
    }
});


// reviewsVue.mount('#reviews-vue');

const targetOpenModal = document.querySelector('.js-open-modal');
const targetCloseModal = document.querySelector('.js-close-modal');

targetOpenModal.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.classList.add('modal_show');

    let opacity = 0;
    let interval = setInterval(function () {
        if (opacity >= 1) {
            clearInterval(interval);
        } else {
            opacity += .2;
            modal.style.opacity = opacity;
        }
    }, 30);
});

targetCloseModal.addEventListener('click', e => {
    e.preventDefault();
    const modal = e.target.closest('.modal');
    modal.classList.remove('modal_show');
});


// new Vue({
//     el: '#test',
//     data() {
//       return {
//         phone: '',
//       };
//     },
//     methods: {
//       formatPhoneNumber() {
//         let input = this.phone;

//         // Удаляем все символы, кроме цифр
//         input = input.replace(/\D/g, '');

//         // Применяем маску для номера телефона
//         let formattedInput = '';
//         let caretPosition = 0;

//         // Определяем, где находится каретка в поле ввода
//         const inputElement = event.target;
//         caretPosition = inputElement.selectionStart;

//         // Добавляем символы "+", "(", ")" и "-"
//         if (input.length > 0) {
//           formattedInput += '+7 (' + input.substring(0, 3);
//         }
//         if (input.length > 3) {
//           formattedInput += ') ' + input.substring(3, 6);
//         }
//         if (input.length > 6) {
//           formattedInput += '-' + input.substring(6, 8);
//         }
//         if (input.length > 8) {
//           formattedInput += '-' + input.substring(8, 10);
//         }

//         // Обновляем значение поля ввода
//         this.phone = formattedInput;

//         // Восстанавливаем позицию каретки после обновления значения
//         if (caretPosition > formattedInput.length) {
//           caretPosition = formattedInput.length;
//         }
//         inputElement.setSelectionRange(caretPosition, caretPosition);
//       }
//     }
//   });

window.addEventListener('scroll', () => {
    console.log(scrollY);
    document.querySelector('.content').style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -' + scrollY + ', 0, 1)';
})