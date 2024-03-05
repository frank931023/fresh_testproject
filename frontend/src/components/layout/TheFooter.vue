<template>
  <footer>
    <p>&copy; Uniploo Taiwan All Rights Reserved</p>

    <div class="social-icons">
      <a href="https://www.facebook.com/your-page">
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </a>
      <a href="https://www.instagram.com/your-page">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
      <a href="https://line.me/your-page">
        <font-awesome-icon :icon="['fab', 'line']" />
      </a>
      <a href="https://www.youtube.com/your-channel">
        <font-awesome-icon :icon="['fab', 'youtube']" />
      </a>
      <a href="">
        <font-awesome-icon :icon="['fab', 'tiktok']" />
      </a>
    </div>
  </footer>
</template>
  
  
  <script>
export default {
  // Add component logic here if needed
  created() {
    // Add icons to library (can be placed here or in mounted lifecycle hook)
    // fab.library.add(...[faFacebookF, faInstagram, faLine, faYoutube]);
  },
};
</script>
  
<style scoped>
footer {
  width: 100%;
  height: 5rem;
  bottom: 0;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.social-icons {
  display: flex;
  gap: 10px; /* Adjust spacing between icons as needed */
  justify-content: flex-end;
}

.social-icons i {
  font-size: 1.5rem; /* Adjust the size as needed */
  color: white;
}

/* Add more component-specific styles here */
</style>
  