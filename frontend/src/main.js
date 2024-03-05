import { createApp } from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { all } from "@awesome.me/kit-KIT_CODE";

import router from "./router.js";
import store from "./store/index.js";
import App from "./App.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseDialog from "./components/ui/BaseDialog.vue";
import BaseSpinner from "./components/ui/BaseSpinner.vue";

const app = createApp(App);

app.use(router);
app.use(store);

library.add(...all);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
