import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'material-design-icons-iconfont';
import VueSmoothScroll from 'vue3-smooth-scroll';
import axios from 'axios'
import VueAxios from 'vue-axios'

//Счетчик Roistat
(function(w, d, s, h, id) {
    w.roistatProjectId = id; w.roistatHost = h;
    var p = d.location.protocol == "https:" ? "https://" : "http://";
    var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
    var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
})(window, document, 'script', 'cloud.roistat.com', '6b18b66c15adc8a7b5396037666bd7a0');
//Отключение ловца лидов - програмно
window.onRoistatModuleLoaded = function () {
    window.roistat.leadHunter.isEnabled = false; //отключить ловец лидов на странице
};

createApp(App).use(store).use(router).use(VueAxios, axios).use(VueSmoothScroll, {
    duration: 1000,
    updateHistory: false
}).mount('#app');

