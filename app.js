const express = require('express')
const app = express()
const cors = require('cors')
const bodyparser = require('body-parser')
const port = 4000
const morgan = require('morgan')
const AriticleFromTERouter = require('./controller/ArticlesFromTextEditor')
const UserRouter = require('./controller/User')
const CategoriesRouter = require('./controller/Categories')
const CommentsRouter = require('./controller/Comment')
const Avertisment = require('./controller/Avertisment')


// app.use(morgan('combined'))
app.use(cors())
app.use (express.urlencoded())
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type','application/json')

  // Pass to next layer of middleware
  next();
});
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.use('/aritclesfromTE',AriticleFromTERouter)
app.use('/user',UserRouter)
app.use('/category',CategoriesRouter)
app.use('/comments',CommentsRouter)
app.use('/avertisment',Avertisment)
// app.use('/comments',CommentsRouter)


app.listen(process.env.PORT || 4000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});