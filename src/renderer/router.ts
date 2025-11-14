import { createRouter, createMemoryHistory } from "vue-router";

import Home from "./pages/Home.vue";

const routes = [
    { path: '/', component: Home}
]

export const router = createRouter({routes, history: createMemoryHistory()});