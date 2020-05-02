import Vue from 'vue';
import Router from 'vue-router';
import Launcher from './views/Launcher.vue';
// import Login from './views/Login.vue';
// import Signup from './views/Signup.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'launcher',
      component: Launcher
    },
  ],
  mode: 'history'
});
