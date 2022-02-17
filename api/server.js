const express = require('express');
const bodyParser = require("body-parser");
const {Sequelize} = require('sequelize');
const config = require('./config/config')
      
const port = 3070;
const app = express();

app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/my-app/dist'));


// Database connection
const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)


// defining open Shifts table
var OpenShift = sequelize.define('openShifts', {
  Userid: {
  type: Sequelize.STRING,
  unique: true
  },
  dateString: Sequelize.STRING,
  time: Sequelize.INTEGER
})
// defining Closed Shifts table
var ClosedShift = sequelize.define('closedShifts', {
  Userid: {
  type: Sequelize.STRING,
  },
  dateString: Sequelize.STRING,
  dateEndingString: Sequelize.STRING,
  time: Sequelize.INTEGER
})

//sync tables
sequelize.sync({force: true})
  .then(() => {
  app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
  })
})





// post and get requests
//creating new open shift after the start click 
//(needed validathion that the user is not already in an open shift and calculation of the time) 
app.post('/createNewShift', async (req,res) => {
  const newShift = await OpenShift.create({
    Userid: req.body.Userid,
    dateString: req.body.dateString,
    time: req.body.time
  })
  .then(() => {
  res.status(200).json({ message: "Open shift added successfully." });
  })
})


//creating new closed shift after the stop click
// (needed validation that the user is indeed opened a shift and calculation of the time) 
app.post('/log', async (req,res) => {
  const newShift = await ClosedShift.create({
    Userid: req.body.Userid,
    dateString: req.body.dateString,
    dateEndingString: req.body.dateEndingString,
    time: req.body.time
  })
  .then(() => {
    res.status(200).json({ message: "Closed shift added successfully." });
  })
})


//when pressing the log button we send back an array of all the closed shifts
app.get('/log' , async (req,res) => {
  console.log('geting log')
  const allShifts = await ClosedShift.findAll()
  .then (allShifts => {
    res.send(allShifts)
  })
})


app.get('/', (req,res) => {
  console.log('inside get');
  res.json({ message: "welcome to the time clock" });
})


