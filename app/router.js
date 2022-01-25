"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/home", controller.home.home);
  router.get("/", controller.home.index);
  router.all("/api/*", controller.home.index);
};
