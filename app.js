console.log("Express Tutorial");

const http = require("http");

const { readFileSync } = require("fs");

const homePage = readFileSync("./index.html");

const registerPage = readFileSync("./register-page.html");

// const { homePage, registerPage, errorPage } = readFileSync(
//   "./index.html"
//   // "./register-page.html",
//   // "./error-page.html"
// );
const errorPage = readFileSync("./error-page.html");

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/register") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(registerPage);
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(errorPage);
    res.end();
  }

  console.log("user hit the server");
  //   res.end("Home page");
});

server.listen(5000);
