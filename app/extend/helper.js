module.exports = {
  base64Encode(str = "") {
    return Buffer.from(str).toString("base64");
  },
};
