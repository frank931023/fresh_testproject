<template>
  <section>
    <base-card>
      <h1>KIDS CLOTHING</h1>
      <ul>
        <display-item
          v-for="product in filterProducts"
          :key="product.id"
          :name="product.name"
          :price="product.price"
          :rating="product.rating"
        ></display-item>
      </ul>
    </base-card>
  </section>
</template>
  
  <script>
import DisplayItem from "../../components/display/DisplayItem.vue";
import BaseCard from "../../components/ui/BaseCard.vue";

export default {
  components: {
    DisplayItem,
    BaseCard,
  },
  computed: {
    filterProducts() {
      const products = this.$store.getters["products/products"];
      return products.filter((product) => product.categories.includes("kids"));
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 2rem;
  margin: 16px 0;
}
</style>