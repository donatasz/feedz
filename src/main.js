import Vue from 'vue';

import Home from 'components/Home/Home';
import PageHeader from 'components/PageHeader/PageHeader';

import 'src/styles/main.scss';

new Vue({
    components: {
        PageHeader,
        Home,
    },
}).$mount('#app');
