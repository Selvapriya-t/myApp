require('dotenv').config();
const multer = require('multer');
const path=require('path');
const express = require('express');
const cors = require('cors');
const createError = require('http-errors');
const morgan = require('morgan');
const date2 = require('date-and-time') 
//const methodOverride = require("method-override");


const app = express();

app.use(morgan('dev'));
app.use(cors());
//app.use('/uploads',express.static(path.join(__dirname,'uploads')));
//app.use(upload.single('file'));
//parse requests of content-type -- application/json
app.use(express.json());

//app.use(methodOverride("_method"));

//parse requests of content - type -- application / x - www - form - urlencoded
app.use(express.urlencoded({ extended: true }));

//init MongoDB
require('./Helpers/initDB')();

// // storage engine for multer
// const storageEngine = multer.diskStorage ({
//   destination: './public/uploads/',
//   filename: function (req, file, callback) {
//     callback (
//       null,
//       file.fieldname + '-' + Date.now () + path.extname (file.originalname)
//     );
//   },
// });

// // file filter for multer
// const fileFilter = (req, file, callback) => {
//   let pattern = /jpg|png|svg/; // reqex

//   if (pattern.test (path.extname (file.originalname))) {
//     callback (null, true);
//   } else {
//     callback ('Error: not a valid file');
//   }
// };

// initialize multer
// const upload = multer ({
//   storage: storageEngine,
//   fileFilter: fileFilter,
// });

// // routing
// app.post ('/upload', upload.single ('uploadedFile'), (req, res) => {
//   res.json (req.file).status (200);
// });
//add the routes
const AuthRoute = require('./Routes/Auth.route');
const UserRoute = require('./Routes/User.route.js');
const PatientRoute = require('./Routes/Patient.route');
const DoctorRoute = require('./Routes/Doctor.route');
const StaffRoute = require('./Routes/Staff.route');
const BillRoute = require('./Routes/Bill.route');
const fileRoutes=require('./Routes/fileupload.route');
const DiagnosisRoute = require('./Routes/Diagnosis.route');
// const ImageRoute = require('./Routes/Image.route');
const AppoinmentRoute=require('./Routes/Appointment.route');
const TestRoute=require('./Routes/Test.route');

app.use('/api',fileRoutes);
app.use('/auth', AuthRoute);
app.use('/users', UserRoute);
app.use('/patients', PatientRoute);
app.use('/doctor',DoctorRoute);
app.use('/staff', StaffRoute);
app.use('/bill',BillRoute);
app.use('/diagnosis',DiagnosisRoute);
app.use('/test',TestRoute);
// app.use('/image',ImageRoute);
app.use('/appoint',AppoinmentRoute)

//error handling of routes
app.use((req, res, next) => {
  next(createError(404, 'Not Found'));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message || 'No response',
    },
  });
});

//set port and listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
  if (app.get('env') === 'development') {
    console.log(`Dev server can be accessed @ http://localhost:${PORT}`);
  }
});
