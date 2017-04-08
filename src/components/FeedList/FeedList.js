import Vue from 'vue';
import axios from 'axios';
import template from './FeedList.html';
import { API_BASE } from 'src/config/constants';
import eventBus from '../../utils/eventBus';

export default Vue.extend({
    template,
    data() {
        return {
            feedURL: '',
            feedsList: [],
        };
    },
    methods: {
        loadData(feedURL) {
            this.feedURL = feedURL;

            axios.get(`${API_BASE}?rss_url=${feedURL}`)
                .then(response => {
                    if (response.data.status === 'ok') {
                        this.feedsList = response.data.items;
                    }
                }).catch(errorResponse => {
                    console.log('API responded with:', errorResponse);
                });
        },

        showFeed(feed, event) {
            event.preventDefault();
            eventBus.$emit('showModal', feed);
        },
    },
    created() {
        eventBus.$on('loadNews', (feedURL) => {
            console.log(feedURL);
            this.loadData(feedURL);
        });
    },
});
