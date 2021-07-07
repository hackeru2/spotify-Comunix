// server/server.js
const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;
const fetch = require("node-fetch");

// app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.send(`Hi! Server is listening on port ${port}`)
// });
const fields = "grant_type=refresh_token&refresh_token=AQBGqVQXfvOrheZoXqpHoh2ZOQ6yrT_VXy36hGEzrzqyLWcAdBmT21UEjB9xa1HwySyaKxns0w1qFl_qTJG5kjWuvLYRqDdxvlimRNWq-1IzDySl72q445MxYBqDSQ1uBII&client_id=78ddd16c16e43884672d93a4a299bd0a59878fc3";
const url = "https://accounts.spotify.com/api/token?"+fields
app.get("/token", async function(req, res) {
 //calling request function
 const response = await fetch(url, {
  method: 'POST',
  headers: {
    'Authorization': 'Basic NmRiNzRiNGNhZTllNDE2ZjkxYmZjMjA3Mjg1NGEzMWQ6M2MyMzVkZmNjNzQzNDRkNmE4OWZiMDcyZjNkMTUzOTQ=',
    // 'Content-Type': 'application/json'
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  // body: JSON.stringify(data) // body data type must match "Content-Type" header
});
let resp = await response.json()
res.send(resp)

 
// return response.json(); // parses JSON response into native JavaScript objects
}
 );
// listen on the port
app.listen(port);