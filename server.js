// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
// app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Spin up the server
const port = 3000

app.get('/', (req, res) => {
  response.send(projectData);

});
app.post('/api/',(req,res)=>{
  let data = request.body;
console.log(data);
 projectData["temp"] = data.temp;
 projectData["feel"] = data.feeling;
 projectData["date"] = data.date;
 response.send(projectData);


});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route
