import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      users: [
        {
          id: "u1",
          name: "user 1",
          phone: "1234567890",
          birthday: "1990/01/01",
          email: "user1@gmail.com",
          wantedItems: ["p1", "p2", "p4"],
        },
        {
          id: "u2",
          name: "user 2",
          phone: "234567890",
          birthday: "1990/01/02",
          email: "user2@gmail.com",
          wantedItems: ["p2", "p5", "p6"],
        },
        {
          id: "u3",
          name: "user 3",
          phone: "34567890",
          birthday: "1990/01/03",
          email: "user3@gmail.com",
          wantedItems: ["p1", "p3", "p5"],
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
