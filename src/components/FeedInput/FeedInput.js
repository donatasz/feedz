import Vue from 'vue';
import template from './FeedInput.html';
import eventBus from '../../utils/eventBus';

export default Vue.extend({
    template,
    data() {
        return {
            feedURL: '',
        };
    },
    localStorage: {
        feedURL: {
            type: String,
            default: ''
        },
        feedsList: {
            type: Array,
            default: []
        },
    },
    methods: {
        showNews() {
            this.$localStorage.set('feedsList', [...this.$localStorage.get('feedsList'), { id: Date.now(), url: this.feedURL }]);
            eventBus.$emit('loadNews', this.feedURL);
        },
    },
    created() {
        let feedsList = [...this.$localStorage.get('feedsList')];

        if (feedsList.length) {
            let latestSavedFeed = feedsList.reduce((prev, current) => {
                return (prev.id > current.id) ? prev : current;
            });

            this.feedURL = latestSavedFeed.url;
        }
    },
});

