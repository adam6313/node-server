## node server

- Use koa framework to build a web server service
- Koa requires node v7.6.0 or higher for ES2015 and async function   support.


#### Installation
```
npm install  or yarn
```

#### Using
Run main.js file.
Set your port, the service will run above this.
```
node main.js
```
```js
const app = new Koa();
middleware(app, router);
// lister http port
app.listen(PORT, () => {
  console.log(`Server will run at http://localhost:${PORT}`);
});
```

