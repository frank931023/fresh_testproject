<template>
  <div class="cart-item">
    <div class="item-name">{{ name }}</div>
    <div class="item-price">{{ price }}</div>
    <div class="item-quantity">
      <button @click="decreaseQuantity">-</button>
      {{ quantity }}
      <button @click="increaseQuantity">+</button>
    </div>
    <div class="item-total">{{ totalPrice }}</div>
    <button @click="confirm">Confirm</button>
    <button @click="removeItem">Remove</button>
    <router-link :to="`/product/${productId}`">Go to Product Page</router-link>
  </div>
</template>
  
  <script>
export default {
  name: "CartItem",
  props: {
    name: String,
    price: Number,
    quantity: Number,
    productId: String,
  },
  computed: {
    totalPrice() {
      return this.price * this.quantity;
    },
  },
  methods: {
    confirm() {
      // Handle confirmation here
    },
    removeItem() {
      // Handle item removal here
    },
    increaseQuantity() {
      // Handle quantity increase here
    },
    decreaseQuantity() {
      // Handle quantity decrease here
    },
  },
};
</script>
  
  <style scoped>
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px;
}

.cart-item .item-name,
.cart-item .item-price,
.cart-item .item-quantity,
.cart-item .item-total {
  flex: 1;
  text-align: center;
}

button {
  padding: 10px 20px;
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

button:hover {
  background-color: white;
  color: black;
  border: 2px solid #4caf50;
}
</style>