const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const createOrder = require('./services');

const {reader, updater} = require('./dataHandler');


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {

    res.send('<h2>Sorry But Nothing Here</h2>');}

);   

app.get('/getorder', (req, res) => {
  reader((data) => {
    res.send(data);
  });
});


app.post('/placeorder', (req,res) =>createOrder(req,res));



app.listen(port, () => {    
  console.log(` App listening at http://localhost:${port}`);
}); 
