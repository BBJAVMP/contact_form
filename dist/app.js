"use strict";
const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, '..')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
