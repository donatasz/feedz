import Vue from 'vue';
import template from './Home.html';
import VueLocalStorage from 'vue-localstorage';

Vue.use(VueLocalStorage);

export default Vue.extend({
    template,
    data() {
        return {
            feedURL: '',
            counter: 0,
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
            if (this.feedURL) {
                this.$localStorage.set('feedsList', [...this.$localStorage.get('feedsList'), { id: Date.now(), url: this.feedURL }]);
                console.log(this.$localStorage.get('feedsList'));
                return;
            }
            /* eslint-disable no-alert, no-undef */
            alert('Please insert feed URL.');
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
