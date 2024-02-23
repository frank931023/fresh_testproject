import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: "p1",
          name: "product 1",
          rating: "4.5",
          price: "100",
          categories: "women",
          description: "this is the description of product 1",
        },
        {
          id: "p2",
          name: "product 2",
          rating: "4.3",
          price: "200",
          categories: "women",
          description: "this is the description of product 2",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
