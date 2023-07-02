require('dotenv').config();
const connection = require('./database/db');
const passport = require('passport');
const session = require('express-session');
const express = require('express');
const cors=require('cors')
const cookieParser = require('cookie-parser');
const app = express();
app.use(cors({
  origin: "http://127.0.0.1:5173",
  credentials: true,
  exposedHeaders: ["set-cookie"],
}))
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT;
(async () => await connection())();

//user routes
const userRoute = require('./routes/user');
app.use('/user',userRoute)



//password reset
const forgotPasswordRoute=require('./routes/forgotPassword')
app.use('/forgot',forgotPasswordRoute)

//service Provider routes
const serviceRoute = require('./routes/service');
app.use('/service',serviceRoute)

//admin route
const adminRoute = require('./routes/admin');
app.use('/admin',adminRoute)


app.listen(port, () => console.log(`Listening on port ${port}...`));
