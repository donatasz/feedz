import Vue from 'vue';
import template from './Home.html';
import VueLocalStorage from 'vue-localstorage';
import FeedInput from '../FeedInput/FeedInput';
import FeedList from '../FeedList/FeedList';

Vue.use(VueLocalStorage);

export default Vue.extend({
    template,
    components: {
        FeedList,
        FeedInput,
    },
    data() {
        return {
            feedURL: '',
        };
    },
});
