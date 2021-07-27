import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'material-design-icons-iconfont';
import VueSmoothScroll from 'vue3-smooth-scroll';
import axios from 'axios'
import VueAxios from 'vue-axios'



createApp(App).use(store).use(router).use(VueAxios, axios).use(VueSmoothScroll, {
    duration: 1000,
    updateHistory: false
}).mount('#app');
