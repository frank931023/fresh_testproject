<template>
  women display
  <section>
    <ul>
      <display-item
        v-for="product in receivedProducts"
        :key="product.id"
        :name="product.name"
        :price="product.price"
        :rating="product.rating"
      ></display-item>
    </ul>
  </section>
</template>

<script>
import DisplayItem from "../../components/display/DisplayItem.vue";

export default {
  components: {
    DisplayItem,
  },
  computed: {
    receivedProducts() {
      return this.$store.getters["products/products"];
    },
  },
};
</script>