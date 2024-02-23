import { createRouter, createWebHistory } from "vue-router";

import OthersDisplay from "./pages/display/OthersDisplay.vue";
import KidsDisplay from "./pages/display/KidsDisplay.vue";
import MenDisplay from "./pages/display/MenDisplay.vue";
import WomenDisplay from "./pages/display/WomenDisplay.vue";
import NotFound from "./pages/NotFound.vue";
import HomePage from "./pages/home/HomePage.vue";
import UserAuth from "./pages/auth/UserAuth.vue";
import UserCart from "./pages/auth/UserCart.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/others", component: OthersDisplay },
    { path: "/kids", component: KidsDisplay },
    { path: "/women", component: WomenDisplay },
    { path: "/men", component: MenDisplay },
    { path: "/auth", component: UserAuth },
    { path: "/cart", component: UserCart },
    { path: "/:notFound(.*)", component: NotFound },

    // !!! http://localhost:8081/user 有問題 會跑出notfound的畫面 !!!
  ],
});

export default router;
