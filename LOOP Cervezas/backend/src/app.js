const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const cors = require('cors');

const indexRouter = require('./routes/index');

const apiCategoriesRouter = require('./routes/api/categories')
const apiUsersRouter = require('./routes/api/users')
const apiProductsRouter = require('./routes/api/products')

app.use(cors());

app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.use('/', indexRouter);

app.use('/api/categories',apiCategoriesRouter);
app.use('/api/products',apiProductsRouter);
app.use('/api/users',apiUsersRouter);

app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));