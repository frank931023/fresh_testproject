<template>
  <div class="product-card">
    <img :src="getImagePath()" :alt="product.name" class="product-image" />
    <h3 class="product-name">{{ name }}</h3>
    <p class="product-price">${{ price }}</p>
    <div class="product-rating">
      <!-- 显示评分，可以使用星级组件或其他方式展示 -->
      Rating: {{ rating }}/5
    </div>
    <div class="product-actions">
      <button @click="viewDetails" class="action-button">See Detail</button>
      <button @click="addToCart" class="action-button">Add to Cart</button>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  methods: {
    viewDetails() {
      // 处理查看详情的逻辑，例如导航到商品详情页面
      console.log("查看详情:", this.product.name);
    },
    addToCart() {
      // 处理加入购物车的逻辑，例如将商品添加到购物车状态中
      console.log("加入购物车:", this.product.name);
    },
  },
};
</script>
  
  <style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  margin: 16px;
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.product-name {
  font-size: 1.2rem;
  margin: 8px 0;
}

.product-price {
  font-weight: bold;
}

.product-rating {
  margin: 8px 0;
}

.product-actions {
  display: flex;
  justify-content: space-around;
  margin-top: 16px;
}

.action-button {
  padding: 8px 16px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
}
</style>
  