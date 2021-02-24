const Koa = require('koa');
const Router = require('@koa/router');
const fs = require('fs');

const app = new Koa();
const router = new Router();

let jsonData = null;

fs.readFile("./feed/data.json", (error, data) => {
    if (error) {
        console.log("Cannot read feed file: " + error.message)
    } else {
        jsonData = JSON.parse(data.toString())
    }
});

router.get('/data-feed', (ctx, next) => {
    ctx.response.status = 200;
    ctx.body = jsonData
    next();
});

app
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(3001)

console.log('Server running at localhost:3001',)