const express = require('express');
const app = express();
const helmet = require('helmet');

app.use(helmet());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// 1. static
// 2. json
// 3. urlencoded


app.post('/ajax', (req, res)=>{
    console.log(req.body);
    res.send('Test')
});

app.listen(3000);