import Vue from 'vue';
import VueRouter from 'vue-router';


import HomeComponent from "./components/dps/HomeComponent"
import Color from "./components/dps/common/colorPickerComponent";
import HomeOverlay from "./components/dps/common/homeOverlayButtonsComponet";
Vue.use(VueRouter)

export default new VueRouter ({
    routes: [
        {
            path: '/',
            component: HomeComponent,
        },
        {
            path: '/color',
            component: HomeOverlay,
        }
    ],
    mode: 'history',
})