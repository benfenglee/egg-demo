const Subscription = require("egg").Subscription;
class GetTime extends Subscription {
  static get schedule() {
    return {
      interval: 5000,
      type: "worker",
    };
  }
  async subscribe() {
    // console.log(Date.now());
  }
}
module.exports = GetTime;
