<template>
  <section>
    <base-card>
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
    </base-card>
  </section>
</template>
  
  <script>
import CartItem from "../../components/display/CartItem.vue";

export default {
  name: "UserCart",
  components: {
    CartItem,
  },
  props: ["id"],
  data() {
    return {
      cartItems: [],
    };
  },
  computed: {
    // cartItems() {
    //   const products = this.$store.getters["products/products"];
    //   return products.filter((product) => product.categories.includes("men"));
    // },
    
    // getUserWantedItems() {
    //   this.$store
    //     .dispatch("users/getUserWantedItems", this.id)
    //     .then((res) => {
    //       this.cartItems = res.data;
    //       console.log(this.cartItems);
    //     });
    // },
    // getUserWantedItemsQuantity() {
    //   this.$store
    //     .dispatch("users/getUserWantedItemsQuantity", this.id)
    //     .then((res) => {
    //       this.cartItemsQuantity = res.data;
    //       console.log(this.cartItemsQuantity);
    //     });
    // },
  },
};
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