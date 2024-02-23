import { createStore } from 'vuex';

import productsModule from './modules/products/index.js';
// import requestsModule from './modules/requests/index.js';

const store = createStore({
  modules: {
    products: productsModule,
    // requests: requestsModule,
  },
  links: {
    // firebaseEndpoint: 'https://vue-http-demo-3-7c1ed-default-rtdb.firebaseio.com/',
    // API_KEY: 'AIzaSyBznqUQp76PIuFd2yOx_EuwyQtx7zoOqAg',
  }
});

export default store;