import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './components/App';
import AppForm from './components/AppForm';
import AppCounter from './components/AppCounter';
import AppClock from './components/AppClock';
import AppChart from './components/AppChart';

const el = '#root';
const template = '<App />';
const components = { App };

const router = new VueRouter({
  // Use the HTML5 History API (fallback to URL hash if unsupported)
  mode: 'history',
  routes: [
    { path: '/', component: { name: 'Home', template: '<section></section>' } },
    { path: '/form', component: AppForm },
    { path: '/counter', component: AppCounter },
    { path: '/clock', component: AppClock },
    { path: '/chart', component: AppChart },
    { path: '/*', component: { name: 'Error', template: '<h3 class="text-danger mt-3">Not Found</h3>' } }
  ]
});

Vue.use(VueRouter);

// Bootstrap the application by returning a new Vue instance
(() => new Vue({ el, template, components, router }))();
