<template>
  <header>
    <nav>
      <div class="header-content">
        <h1>
          <router-link to="/">Uniploo Taiwan</router-link>
        </h1>
        <ul>
          <li>
            <router-link to="/women">Women</router-link>
          </li>
          <li>
            <router-link to="/men">Men</router-link>
          </li>
          <li>
            <router-link to="/kids">Kids</router-link>
          </li>
          <li>
            <router-link to="/Others">Others</router-link>
          </li>
        </ul>
      </div>
      <div class="search-bar">
        <input type="text" placeholder="Search..." />
        <button @click="handleSearch">Search</button>
        <!-- 有機會改放圖片 -->
      </div>
      <div>
        <ul>
          <li>
            <router-link to="/user">User</router-link>
            <!-- 有機會改放圖片 -->
          </li>
          <li>
            <router-link to="/cart">Cart</router-link>
            <!-- 有機會改放圖片 -->
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
  
  <script>
export default {
  methods: {
    handleSearch() {
      // 還沒有實作
      console.log("Search clicked!");
    },
  },
};
</script>
  
  <style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

.header-content {
  display: flex;
  align-items: center;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

.search-bar {
  display: flex;
  align-items: center;
  margin-left: 300px;
}

input {
  padding: 0.7rem;
  margin-right: 10px;
  border-radius: 5px;
}

button {
  padding: 0.7rem 1rem;
  background-color: #f391e3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #d375c5;
}
</style>