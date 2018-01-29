const Router = require('koa-router');
const Services = require('../service');
const fs = require('fs');

const router = new Router();

router.get('/', async (ctx, next) => {
  await ctx.render('index', {title: '亲爱的徐小薇'});
});

router.get('/api/:service', async (ctx, next) => {
  ctx.body = await Services[ctx.params.service](ctx, next);
});

module.exports = router;