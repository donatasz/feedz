import Vue from 'vue';
import template from './FeedHistory.html';
import eventBus from '../../utils/eventBus';
import { pad } from '../../utils/helpers';

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
    filters: {
        /**
         * Feed ID is used as timestamp, format it for full date
         * @param timestamp
         * @returns {string}
         */
        formatDate(timestamp) {
            let a = new Date(timestamp);
            let months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
            let year = a.getFullYear();
            let month = months[a.getMonth()];
            let day = a.getDate();
            let hour = a.getHours();
            let min = a.getMinutes();
            let sec = a.getSeconds();
            return `${year}-${pad(month)}-${pad(day)} ${hour}:${min}:${sec}`;
        },
    },
    created() {
        this.showFeedHistory();

        eventBus.$on('loadNews', () => {
            this.showFeedHistory();
        });
    },
});
