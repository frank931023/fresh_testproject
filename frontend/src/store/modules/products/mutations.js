export default {
    setProducts(state, products) {
        state.products = products;
    },
    addProduct(state, product) {
        state.products.push(product);
    },
    updateProduct(state, product) {
        const productIndex = state.products.findIndex(
            (prod) => prod.id === product.id
        );
        state.products[productIndex] = product;
    },
    deleteProduct(state, productId) {
        state.products = state.products.filter((prod) => prod.id !== productId);
    }
  };