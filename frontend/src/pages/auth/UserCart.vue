<template>
    <div class="user-cart">
      <CartItem
        v-for="item in cartItems"
        :key="item.id"
        :name="item.name"
        :price="item.price"
        :quantity="item.quantity"
        :productId="item.productId"
      />
    </div>
  </template>
  
  <script>
  import CartItem from './CartItem.vue';
  
  export default {
    name: 'UserCart',
    components: {
      CartItem
    },
    data() {
      return {
        cartItems: []
      };
    },
    async created() {
      const userId = this.$route.params.userId;
      // Fetch the user's cart items from your API
      const response = await fetch(`/api/cart/${userId}`);
      this.cartItems = await response.json();
    }
  }
  </script>
  
  <style scoped>
  .user-cart {
    width: 80%;
    margin: 0 auto;
    background-color: #f8f8f8;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }
  
  .user-cart > *:not(:last-child) {
    margin-bottom: 20px;
  }
  </style>