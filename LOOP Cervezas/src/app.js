const express = require('express')
const app = express()
const path = require("path")
const mainRouter = require("./routes/mainRouter")
const methodOverride = require('method-override');
const session = require('express-session')
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')


app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: "mensaje secreto",
    resave:false,
    saveUninitialized:false
}))

app.use(userLoggedMiddleware)

app.listen(3000, () => console.log(`Servidor corriendo en el puerto 3000`))

app.use(methodOverride('_method'));

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(path.join(__dirname, "../public")))
app.use(mainRouter)