require('dotenv').config();
const connection = require('./database/db');
const session = require('express-session');
const express = require('express');
const errorMiddleware=require("./middleware/error");
const cors=require('cors');
const cloudinary=require("cloudinary");
const corsOptions ={
  origin:['http://localhost:5173', 'http://localhost:5173/loginservice'],
  credentials:true             //access-control-allow-credentials:true
}




const cookieParser = require('cookie-parser');
const bodyParser=require('body-parser');
const fileUpload=require("express-fileupload")
const app = express();
app.use(cors(corsOptions));
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
  })
);
cloudinary.config({ 
  cloud_name: "dazmdsylh", 
  api_key: "977257839637222", 
  api_secret:"EP-ivwvMLGrFeHFjulIl-OHOf9g"
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorMiddleware);

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());



const port = process.env.PORT;
(async () => await connection())();

//current user
const currentUserRoute=require('./routes/currentUser');
app.use('/currentUser',currentUserRoute);

//user routes
const user = require('./routes/user');
app.use('/user',user)



//password reset
const forgotPasswordRoute=require('./routes/forgotPassword')
app.use('/forgot',forgotPasswordRoute)



//admin route
const adminRoute = require('./routes/admin');
app.use('/admin',adminRoute)

const product = require("./routes/productRoute");
const order = require("./routes/orderRoute");
// const payment = require("./routes/paymentRoute");

app.use("/", product);
app.use("/", order);
// app.use("/", payment);



app.listen(port, () => console.log(`Listening on port ${port}...`));
