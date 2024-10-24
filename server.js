const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/db');

const cors = require('cors');
const path = require('path');

const Controller = require('./controllers/Controller')(db, upload());

app.get('/family', Controller.getAllFamilyWords);
app.get('/clothes', Controller.getAllClothesWords);
app.get('/food', Controller.getAllFoodWords);

const app= express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000' 
  }));

app.use('/images-goods', express.static(path.join(__dirname, 'images-goods')));

app.get('/',(req,res)=>{
    res.send('Hi express!');
    });



app.use(express.static(path.join(__dirname, 'client', 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'));
});

app.listen(port,()=>{
    console.log(`Listening on http://localhost:${port}`);
    })