<template>
    <div>
        Products List
        <div v-for="product of products" :key="product.id">
           <ul>{{product.name}}</ul> 
        </div>
    </div>
</template>

<script>

import shop from '../assets/store';

import store from '../store/index';



export default {
    computed: {
        products() {
            return store.state.products
        }
    },
    data(){
        return {
            // products: []
        }
    },
    created() {
        this.products = shop.itemsList;
        store.commit('setProducts', this.products);
    }
}
</script>
