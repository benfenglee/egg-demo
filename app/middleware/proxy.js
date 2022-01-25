"use strict";

module.exports = (options) => {
  return async function propx(ctx, next) {
    console.log(ctx.method);
    await next();
  };
};
