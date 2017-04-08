import Vue from 'vue';
import template from './Home.html';
import VueLocalStorage from 'vue-localstorage';
import FeedInput from '../FeedInput/FeedInput';
import FeedHistory from '../FeedHistory/FeedHistory';
import FeedList from '../FeedList/FeedList';

Vue.use(VueLocalStorage);

export default Vue.extend({
    template,
    components: {
        FeedInput,
        FeedHistory,
        FeedList,
    },
});
