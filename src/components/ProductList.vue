<template>
    <div>
        Products List
        <ul>
           <li v-for="product of products" :key="product.id">
               {{product.name}} - {{product.cost}} - {{product.inventory}}
               <button :disabled="!productIsInStock(product)" @click="addProductToCart(product)">Add To Cart</button>
            </li> 
        </ul>
    </div>
</template>

<script>

// import shop from '../assets/store';

import store from '../store/index';



export default {
    computed: {
        products() {
            return store.state.products
        },
        productIsInStock() {
            return store.getters.productIsInStock
        }
    },
    methods: {
        addProductToCart(product) {
            store.dispatch('addProductToCart', product);
        }
    },
    created() {
        // store.dispatch('fetchProducts');
    }
}
</script>
