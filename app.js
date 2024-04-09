const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  console.log(1);
  res.send({ foo: 'booo' });
});

app.listen(PORT, () => {
  console.log(`Приложение запущено тут: http://localhost:${PORT}`);
});