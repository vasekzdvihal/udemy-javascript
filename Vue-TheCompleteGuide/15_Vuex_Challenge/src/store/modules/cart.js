export default {
    namespaced: true,
    state() {
      return {
          cart: { items: [], total: 0, qty: 0 },
      };
    },
    mutations: {
        addProductToCart(state, payload) {
            const productData = payload;
            console.log(productData);
            console.log(state.cart);
            const productInCartIndex = state.cart.items.findIndex(
                (ci) => ci.id === productData.id
            );
            console.log(productInCartIndex);
            if (productInCartIndex >= 0) {
                state.items[productInCartIndex].qty++;
            } else {
                const newItem = {
                    productId: productData.id,
                    title: productData.title,
                    image: productData.image,
                    price: productData.price,
                    qty: 1,
                };
                state.cart.items.push(newItem);
            }
            state.cart.qty++;
            state.cart.total += productData.price;
            console.log(state.cart);
        },
        removeProductFromCart(state, payload) {
            const prodId = payload.productId;
            const productInCartIndex = state.cart.items.findIndex(
                (cartItem) => cartItem.productId === prodId
            );
            const prodData = state.cart.items[productInCartIndex];
            state.cart.items.splice(productInCartIndex, 1);
            state.cart.qty -= prodData.qty;
            state.cart.total -= prodData.price * prodData.qty;
        },
    },
    actions: {
        addToCart(context, payload) {
            const prodId = payload.id;
            const products = context.rootGetters['products/products'];
            const product = products.find(prod => prod.id === prodId);
            context.commit('addProductToCart', product);
        },
        removeFromCard(context, payload) {
            context.commit('removeProductFromCart', payload);
        }
    },
    getters: {
        products(state) {
            return state.cart.items;
        },
        totalSum(state) {
            return state.cart.total;
        },
        quantity(state) {
            return state.cart.qty;
        }
    }
};