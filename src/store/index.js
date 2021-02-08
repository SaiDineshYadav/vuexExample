import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        productsList: []
    },
    getters: {

    },
    actions: {
        fetchProducts() {

        }
    },
    mutations: {
        setProducts() {

        }
    }
});