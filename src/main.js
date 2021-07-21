import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'material-design-icons-iconfont';
import VueSocialSharing from 'vue-social-sharing'

createApp(App).use(store).use(router).use(VueSocialSharing).mount('#app');
