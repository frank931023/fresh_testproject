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
          categories: ['women', 'others'],
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
        {
          id: "p3",
          name: "product 3",
          rating: "4.1",
          price: "300",
          categories: ['men', 'kids'],
          description: "this is the description of product 3",
        },
        {
          id: "p4",
          name: "product 4",
          rating: "4.2",
          price: "400",
          categories: "kids",
          description: "this is the description of product 4",
        },
        {
          id: "p5",
          name: "product 5",
          rating: "4.4",
          price: "500",
          categories: ['kids', 'others'],
          description: "this is the description of product 5",
        },
        {
          id: "p6",
          name: "product 6",
          rating: "4.6",
          price: "600",
          categories: "others",
          description: "this is the description of product 6",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
