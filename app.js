const express = require('express');
const cors = require('cors');
const path = require("path");

const gamesRouter = require('./routes/games'); 
const mainRouter = require('./routes/main');

const app = express();
app.use(express.static(path.join(__dirname, 'public')), express.json(), cors()); 

const PORT = 3000;

app.use(mainRouter, gamesRouter);

app.listen(PORT, () => {
  console.log(`Приложение запущено тут: http://localhost:${PORT}`);
});