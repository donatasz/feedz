import Vue from 'vue';
import template from './FeedInput.html';

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
        saveURL() {
            this.$localStorage.set('feedsList', [...this.$localStorage.get('feedsList'), { id: Date.now(), url: this.feedURL }]);
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

