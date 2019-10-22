var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const flash = require('connect-flash')
const session = require('express-session')
const mongoose = require('mongoose')
const multer = require('multer');
require('dotenv').config()

var adminRouter = require('./routes/admin');
var routesUser = require('./routes/users');

var app = express();
var port= 4000;

//Connect DB 
  //Update ez
  mongoose.connect(
      'mongodb+srv://admin:admin@cluster0-pces2.mongodb.net/test?retryWrites=true&w=majority',
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
    
  )


  // chinh image dc luu trong server va ten cua no
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  }
});

// dieu chinh format upload hop le
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Router
app.use(adminRouter);
app.use(routesUser);


//- Dùng session để duy trì đăng nhập và để sử dụng flash
app.use(session({
  secret: 'tingodlike',
  resave: false, // session sẽ ko lưu với mỗi lệnh request => tốc đô
  saveUninitialized: false, // chắn chăn ko có session đc save mỗi request
  }))
  

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});




app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);
//- Dùng để đưa thông tin message 
app.use(flash())

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(port,()=>{
  console.log("Connect: ",port)
})

module.exports = app;
