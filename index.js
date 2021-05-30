<<<<<<< HEAD
const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.headers);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text-html");
  res.end("<html><body><h1>Hello,World!</h1></body></html>");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
=======
var rect = require("./rectangle");

function solveRect(l, b) {
  console.log("Solving for rectangle with l = " + l + " and b = " + b);
  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("ERROR: ", err.message);
    } else {
      console.log(
        "The area of the rectangle of dimensions l = " +
          l +
          " and b = " +
          b +
          " is " +
          rectangle.area()
      );
      console.log(
        "The perimeter of the rectangle of dimensions l = " +
          l +
          " and b = " +
          b +
          " is " +
          rectangle.perimeter()
      );
    }
  });
  console.log("This statement after the call to rect()");
}

solveRect(2, 5);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
>>>>>>> d5d3b70afdbfcd204feb9a9abac05af554feb15e
