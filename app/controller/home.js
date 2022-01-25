"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async home() {
    const { ctx, service } = this;
    const data = await service.curd.girl();
    // console.log(data);
    ctx.body = data;
  }
  async index() {
    const { ctx } = this;
    const params = {
      method: ctx.method,
      streaming: false,
      retry: 3,
      timeout: [3000, 30000],
    };
    if (ctx.method === "GET") {
    }
    if (ctx.method === "POST") {
      params.data = ctx.request.body;
    }
    const { data } = await ctx.curl("http://192.168.199.163:5001" + ctx.url, {
      headers: ctx.headers,
      ...params,
    });
    const final = data.toString();
    try {
      ctx.type = "json";
      ctx.body = JSON.parse(final);
    } catch (ex) {
      ctx.type = "html";
      ctx.bod = final;
    }
  }
}

module.exports = HomeController;
