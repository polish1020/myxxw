const Koa = require('koa');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const session = require('koa-session');
const views = require('koa-views');
const path = require('path');

const router = require('./router');


const app = new Koa();

app.keys = ['my love xxw'];

app.use(logger());
app.use(serve(path.resolve(__dirname, '../')));
app.use(views(path.resolve(__dirname, '../dist'), {}));

app.use(session(app));
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

console.log(process.env.PORT)

app.listen(process.env.PORT || 3000);
console.log(`listening on port ${process.env.PORT || 3000}`);