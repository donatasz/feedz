import Vue from 'vue';
import _ from 'lodash';
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
            selectedOrdering: 'date',
            options: [
                { text: 'Publication date', value: 'date' },
                { text: 'Alphabetically', value: 'alphabetical' },
            ]
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

        changeOrder(order) {
            let newList = [...this.feedsList];

            console.log(order === 'alphabetical');

            if (order === 'alphabetical') {
                this.feedsList = _.orderBy(newList, ['title'], ['asc']);
            }

            if (order === 'date') {
                this.feedsList = _.orderBy(newList, ['pubDate'], ['desc']);
            }
        },
    },
    created() {
        eventBus.$on('loadNews', (feedURL) => {
            this.loadData(feedURL);
        });
    },
});
