// http is native to Node.JS. We just have to ask for it
const http = require('http');

// fs = file system module! fs is built into Node. see above
// fs gives node access to THIS computers file system.
const fs = require('fs');

// The http modue has a createServer method 
// Takes 1 arg:
// 1. Callback, callback, has 2 args: req, res

const server = http.createServer((req, res)=>{
   
    console.log(`A request was made to: ${req.url}`)
    if(req.url === '/'){
        // The user want the home page! we know, because the req object has / in the url property
        // console.log
        // res = our way of responding to the requester
        // http message
        // 1. start-line - CHECK
        // 2. header
        // 3. body
        // writeHead takes 2 args
        // 1. status code
        // 2. object for the min-type
        res.writeHead(200,{'content-type':'text/html'});
        // res.write('<h1>Hello, World!</h1?');
        const homePageHTML = fs.readFileSync('node.html')
        res.write(homePageHTML)
        res.end();
    }else if(req.url === "/node.png"){
        res.writeHead(200,{'content-type':'image/png'});
        const image = fs.readFileSync('node.png')
        res.write(image)
        res.end();
    }else if(req.url === "/styles.css"){
        res.writeHead(200,{'content-type':'text/css'});
        const css = fs.readFileSync('styles.css')
        res.write(css)
        res.end();
    }else{
        res.writeHead(400,{'content-type':'text/html'});
        res.write(`<h4>Sorry, this isn't the page you're looking for!</h4>`);
        res.end();
    }
});

// CreateServer returns an object with a list method
// Listen takes 1 arg:
// 1. Port to listen for http traffic on
server.listen(3000);