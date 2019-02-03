import Vue from "vue";
import Router from "vue-router";

import Components from "@/library.js";

Vue.use(Router, Components);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "HomePage" */ "@/views/Home")
    },
    {
      path: "/docs",
      name: "Documentation",
      component: () => import(/* webpackChunkName: "DocumentationPage" */ "@/views/Docs"),
      children: [
        {
          path: "colors",
          name: "Colors",
          component: () =>
            import(/* webpackChunkName: "Docs-Colors" */ "@/views/Colors")
        },
        {
          path: "buttons",
          name: "Buttons",
          component: () =>
            import(/* webpackChunkName: "Docs-Buttons" */ "@/views/Buttons")
        },
        {
          path: "typography",
          name: "Typography",
          component: () =>
            import(/* webpackChunkName: "Docs-Typography" */ "@/views/Typography")
        },
        {
          path: "grid",
          name: "Grids",
          component: () =>
            import(/* webpackChunkName: "Docs-Grid" */ "@/views/Grid")
        },
        {
          path: "containers",
          name: "Containers",
          component: () =>
            import(/* webpackChunkName: "Docs-Containers" */ "@/views/Containers")
        },
        {
          path: "cards",
          name: "Cards",
          component: () =>
            import(/* webpackChunkName: "grid" */ "./views/Cards")
        }]
    },

  ]
});
