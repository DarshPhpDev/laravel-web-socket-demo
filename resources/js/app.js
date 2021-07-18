require('./bootstrap');




import Vue from 'vue';


Vue.component('HomeComponent', require('./components/HomeComponent.vue').default)

const app = new Vue({
	el: '#app'
});
