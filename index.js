<<<<<<< HEAD
const express = require("express");
const http = require("http");

const hostname = "localhost";
=======
<<<<<<< HEAD
const express = require("express");
const http = require("http");
const { hostname } = require("os");

const locahost = "localhost";
>>>>>>> 8a291a1a493c8f375a3517bc8ca5182a51381003
const port = 3000;

const app = express();

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
<<<<<<< HEAD
  res.setHeader("Content-type", "text-html");
  res.end("<html><body><h1>This is an express server </h1></body></html>");
});

const server = http.createServer(app);
=======
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1> This is an Express Server </h1></body></html>");
});

const server = http.createServer(app);
=======
const http = require("http");
const fs = require("fs");
const path = require("path");
const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log("Request for " + req.url + " by method " + req.method);

  if (req.method == "GET") {
    var fileUrl;
    if (req.url == "/") fileUrl = "/index.html";
    else fileUrl = req.url;

    var filePath = path.resolve("./public" + fileUrl);
    const fileExt = path.extname(filePath);
    if (fileExt == ".html") {
      fs.exists(filePath, exists => {
        if (!exists) {
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html");
          res.end(
            "<html><body><h1>Error 404: " +
              fileUrl +
              " not found</h1></body></html>"
          );
          return;
        }
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.createReadStream(filePath).pipe(res);
      });
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end(
        "<html><body><h1>Error 404: " +
          fileUrl +
          " not a HTML file</h1></body></html>"
      );
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end(
      "<html><body><h1>Error 404: " +
        req.method +
        " not supported</h1></body></html>"
    );
  }
});
>>>>>>> af2e9e8f1fec9a07559952172003db93b864258b
>>>>>>> 8a291a1a493c8f375a3517bc8ca5182a51381003

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
