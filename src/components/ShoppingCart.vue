<template>
    <div>
        <h2>Shopping Cart</h2>
        <ul>
            <li v-for="product of products" :key="product.id">
                 {{product.name}} - {{product.cost}} - {{product.quantity}}
            </li>
        </ul>
        <h3>Total = {{total}}</h3>
    </div>
</template>

<script>
import store from '../store/index';

export default {
    computed: {
        products() {
            return store.getters.cartProducts
        },
        total() {
            return store.getters.cartTotal
        }
    },
    data() {
        return {
        }
    }
}
</script>