import Vue from 'vue';
import template from './FeedModal.html';
import eventBus from '../eventBus';

export default Vue.extend({
    template,
    data() {
        return {
            feed: {},
        };
    },
    methods: {
        openModal(feedData) {
            let overlay = document.getElementById('overlay');
            let modal = document.getElementById('modal');

            this.feed = feedData;

            overlay.classList.remove('is-hidden');
            modal.classList.remove('is-hidden');
        },
        closeModal(){
            let overlay = document.getElementById('overlay');
            let modal = document.getElementById('modal');
            overlay.classList.add('is-hidden');
            modal.classList.add('is-hidden');
        },
    },
    created() {
        eventBus.$on('showModal', (feedData) => {
            this.openModal(feedData);
        });
        eventBus.$on('closeModal', () => {
            this.closeModal();
        });
    }
});

