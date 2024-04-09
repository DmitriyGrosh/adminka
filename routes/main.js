const mainRouter = require("express").Router();

const init = (req, res) => {
  fs.readFile("./public/index.html", "utf-8").then((data) => {
    res.header("Content-Type", "text/html")
    res.send(data);
  });
}

mainRouter.get("/", init);

module.exports = mainRouter;