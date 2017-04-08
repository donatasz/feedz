import Vue from 'vue';
import template from './FeedHistory.html';

export default Vue.extend({
    template,
    data() {
        return {
            feedsList: [],
        };
    },
    localStorage: {
        feedsList: {
            type: Array,
            default: []
        },
    },
    methods: {
        showFeedHistory() {
            let feedsList = [...this.$localStorage.get('feedsList')];

            if (feedsList.length) {
                this.feedsList = feedsList;
            }
        },
    },
    created() {
        this.showFeedHistory();
    },
});
