// setInterval(()=>{console.log("1 second")},1000)
// NODE.JS Is the language
// Express is node, a node module

// http is a native module
// const http = require('http');
// exprees is a 3rd party modeule
const express = require('express');
// An "app" is the express function (createAppliction inside the Express module)
// invoked and is an Express appliction
const app = express();

// all is a method, and it takes 2 args:
// 1. route
// 2. callback to run if the route is requested
app.all('*',(req, res)=>{
    // Express handles the basic headers (status code, mime-type)! Awesome!
    res.send(`<h1>This is the home page</h1>`)
    // Express handles the end! Awesome!
});

app.listen(3000)
console.log("The server is listening on port 3000...")