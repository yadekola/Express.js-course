const express = require('express');
const app = express();

// app object has a few methods:
// HTTP verbs: REST verbs
// CRUD app cooresponence
// 1. Get - READ
// - DEFAULT for all browsers is get 
// 2. Post - CREATE
// 3. Put - UPDATE
// 4. Delete - DELETE
// 5. All - Catches all requests. I will accept any method

// Take 2 args 
// 1. Path
// 2. callback to run if an HTTP request that matchs THIS verbs
// is made to the path in #1
// app.all('/',(req,res)=>{
//     res.send(`<h1>Welcome to the homepage</h1>`)
// });
app.get('/', (req, res) => {
    console.log(req)
    res.send(`<h1>Welcome to the  Home Get pages</h1>`)
});

app.post('/', (req, res) => {
    res.send(`<h1>Welcome to the home POST page</h1>`)
});

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
});

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
});

app.listen(3000)
console.log("The server is listening on port 3000")