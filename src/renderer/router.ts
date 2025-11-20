import { createRouter, createMemoryHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Albums from "./pages/Albums.vue";
import AlbumDetail from "./pages/AlbumDetail.vue";
import Categories from "./pages/Categories.vue";
import Utilisateurs from "./pages/Utilisateurs.vue";
import Exemplaires from "./pages/Exemplaires.vue";
import Locations from "./pages/Locations.vue";
import Reservations from "./pages/Reservations.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/albums', component: Albums },
    { path: '/albums/:id_album', component: AlbumDetail },
    { path: '/categories', component: Categories },
    { path: '/utilisateurs', component: Utilisateurs },
    { path: '/exemplaires', component: Exemplaires },
    { path: '/locations', component: Locations },
    { path: '/reservations', component: Reservations }
]

export const router = createRouter({routes, history: createMemoryHistory()});