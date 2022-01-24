"use strict";
// exports.httpProxy = {
//   enable:true,
//   package:'egg-http-proxy'
// }

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  cors: {
    anable: true,
    package: "egg-cors",
  },
};
