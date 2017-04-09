import Vue from 'vue';
import template from './FeedModal.html';
import eventBus from '../../utils/eventBus';

export default Vue.extend({
    template,
    data() {
        return {
            feed: {},
        };
    },
    methods: {
        openFeed(feedData) {
            this.closeModal();
            window.open(feedData.link, '_blank');
        },
        openModal(feedData) {
            this.feed = feedData;
            this.$refs.overlay.classList.remove('is-hidden');
            this.$refs.modal.classList.remove('is-hidden');
        },
        closeModal(){
            this.$refs.overlay.classList.add('is-hidden');
            this.$refs.modal.classList.add('is-hidden');
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

