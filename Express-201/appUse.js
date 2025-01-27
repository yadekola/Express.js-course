const express = require('express');
const app = express();

// Express = 2 things
// 1. Router
// 2. Middleware that comprises a web framework

// Req ---MIDDLEWARE---> Res 
// Middleware function is any function that has access to the req, res, next object.
// 1. Request comes in.
// 2. We need to validate the user, sometimes.
// 3. We need to store something in the database.
// 4. If there is data from the user, we need to parse it and store it.
// 5. Response

function validateUser(req, res, next) {
    // get info out of the request object
    // do some stuff with the database
    res.locals.validated = true;
    console.log('VALIDATED RAN');
    next();
}

// This will run validateUser on all paths, all methods
app.use(validateUser)
// This will run validateUser on /admin, all methods!
app.use('/admin',validateUser)
// This will run validateUser on /, only on get methods! And, by the way, it looks like this is the default...
app.use('/',validateUser)


app.get('/', (req, res, next)=> {
    res.send("<h1>Main Page</h1>")
    console.log(res.locals.validated);
})

app.get('/admin', (req, res, next)=> {
    res.send("<h1>Admin Page</h1>")
    console.log(res.locals.validated);
})


app.listen(3000)
// console.log('Server is running on port 3000');