const express = require('express');
const request = require('request');

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
  
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));