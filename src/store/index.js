import Vuex from 'vuex';
import Vue from 'vue';
import shop from '@/assets/store';

if (Vue) {
    Vue.use(Vuex);
}

export default new Vuex.Store({
    state: {
        products: shop.itemsList,
        cart: []
    },
    getters: {
        availableProducts(state) {
            return state.products.filter(product => product.inventory > 0);
        },
        cartProducts(state) {
            return state.cart.map(cartItem => {
                const product = state.products.find(product => product.id ==  cartItem.id);
                return {
                    name: product.name,
                    cost: product.cost,
                    quantity: cartItem.quantity
                }
            });
        },
        cartTotal(state, getters) {
            let total = 0;
            getters.cartProducts.forEach(product => {
                total += (product.cost * product.quantity);
            });
            return total;
        },
        productIsInStock() {
            return (product) => {
                return product.inventory > 0;
            }
        }
    },
    actions: {
        fetchProducts({commit}) {
            return new Promise((resolve) => {
                commit('setProducts', this.products);
                resolve();
            });
           
        },
        addProductToCart(context, product) {
            if (product.inventory > 0) {
                const cartItem = context.state.cart.find(item => item.id == product.id);
                if (!cartItem) {
                    context.commit('pushProductToCart', product.id);
                } else {
                    context.commit('incrementItemQuantity', cartItem);
                }
                context.commit('decrementProductInventory', product)
            }
        }
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        pushProductToCart(state, productId) {
            state.cart.push({id: productId, quantity: 1})
        },
        incrementItemQuantity(state, cartItem) {
            cartItem.quantity ++;
        },
        decrementProductInventory(state, product) {
            product.inventory --;
        }
    }
});