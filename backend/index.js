require('dotenv').config();
const connection = require('./database/db');
const session = require('express-session');
const express = require('express');
const cors=require('cors')
const corsOptions ={
  origin:'http://localhost:5173', 
  credentials:true             //access-control-allow-credentials:true
}

const cookieParser = require('cookie-parser');
const app = express();
app.use(cors(corsOptions));
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
  })
);

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
