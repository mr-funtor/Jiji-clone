var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const signupRouter= require('./routes/signup');
const cartRouter= require('./routes/cart');
const checkoutRouter= require('./routes/checkout');
const messagesRouter= require('./routes/messages');
const notificationsRouter= require('./routes/notifications');
const productRouter= require('./routes/products');
const profileRouter= require('./routes/profile');
const searchRouter= require('./routes/search');
const advertsRouter= require('./routes/adverts');
const clientsRouter= require('./routes/clients');
const feedbacksRouter= require('./routes/feedbacks');
const followersRouter= require('./routes/followers');
const sellRouter= require('./routes/sell');
const savedRouter= require('./routes/saved');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signup', signupRouter);
app.use('/cart', cartRouter);
app.use('/checkout', checkoutRouter);
app.use('/messages', messagesRouter);
app.use('/notifications', notificationsRouter);
app.use('/products', productRouter);
app.use('/profile', profileRouter);
app.use('/search', searchRouter);
app.use('/adverts', advertsRouter);
app.use('/clients', clientsRouter);
app.use('/feedbacks', feedbacksRouter);
app.use('/followers', followersRouter);
app.use('/sell', sellRouter);
app.use('/saved', savedRouter);

app.get('*',(req,res)=>{
    res.send('oops that page doesn\'t exist')
})



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
