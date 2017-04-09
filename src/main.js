import Vue from 'vue';

import Home from './components/Home/Home';
import PageHeader from './components/PageHeader/PageHeader';
import FeedModal from './components/FeedModal/FeedModal';
import eventBus from './utils/eventBus';
import Loader from './components/Loader/Loader';

import 'src/styles/main.scss';

new Vue({
    components: {
        PageHeader,
        Home,
        FeedModal,
        Loader,
        eventBus,
    },
    data(){
        return {
            isLoading: false
        };
    },
    created(){
        eventBus.$on('loading', (isLoading) => {
            this.isLoading = isLoading;
        });
    },
}).$mount('#app');
