const routes = [
  // {
  //   path: "/",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
  {
    path: "/",
    component: () => import("pages/login.vue"),
  },
  {
    path: "/home",
    component: () => import("pages/home.vue"),
  },
  {
    path: "/category",
    component: () => import("pages/category.vue"),
  },
  //// Layout /////
  // {
  //   path: "/main",
  //   component: () => import("layouts/leftMenu.vue"),
  //   children: [{ path: "/home", component: () => import("pages/home.vue") }],
  // },
];

export default routes;
