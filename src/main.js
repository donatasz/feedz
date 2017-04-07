import Vue from 'vue';

import Home from 'components/Home/home';

import 'src/config/http';
import 'src/styles/main.scss';

new Vue({
    components: {
        Home,
    },
}).$mount('#app');
