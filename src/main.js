import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
//import store from './vuex/store';
//import Vuex from 'vuex';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import home from './views/home.vue';
import travelDetail from './views/travelDetail.vue';

//开启debug模式
Vue.config.debug = true;

Vue.use(Element);
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: home,
      name: '景点',
      children: [
        {
          path: '/travel/travelDetail',
          component: travelDetail,//require('./views/travelDetail.vue'),
          name: '景点详情'
        },
        {
          path: '/travel/travelRoute',
          component: require('./views/travelRoute.vue'),
          name: '旅游线路查询'
        }
      ]
    },
    {
      path: '/',
      component: home,
      name: '电影',
      children: [
        {
          path: '/movie/hotMovie',
          component: require('./views/hotMovie.vue'),
          name: '热映影片'
        },
        {
          path: '/movie/movieMsg',
          component: require('./views/movieMsg.vue'),
          name: '影片影讯'
        },
        {
          path: '/movie/cinemaMsg',
          component: require('./views/cinemaMsg.vue'),
          name: '影院影讯'
        }
      ]
    },
    {
      path: '/',
      component: home,
      name: '生活服务',
      children: [
        {
          path: '/life/weather',
          component: require('./views/weather.vue'),
          name: '天气查询'
        },
        {
          path: '/life/traffic',
          component: require('./views/traffic.vue'),
          name: '交通事件查询'
        }
      ]
    },
    {
      path: '/',
      component: home,
      name: '',
      leaf:true,
      children: [
        {
          path: '/travel/travelDetailItem',
          component: require('./views/travelDetailItem.vue'),
          name: '景点2'
        }
      ]
    }
  ]
});
//const app = new Vue({
//  router: router,
//  render: h => h(require('./App.vue'))
//}).$mount('#app')
const app = new Vue({
  el: '#app',
  template: '<App/>',
  router,
  //store,
  components: { App }
  //router: router,
  //render: h => h(App)
}).$mount('#app')

//new Vue({
//  el: '#app',
//  render: h => h(App)
//})
