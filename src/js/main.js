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
            currentPreview: null
        }
    },
    methods: {
        test: function (t) {
            this.currentPreview = t.currentTarget.href;
        }
    }
});


// reviewsVue.mount('#reviews-vue');