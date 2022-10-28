const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());


app.get('/', (req, res) => {
  res.json({"slackUsername": "oreosinnit", "backend": true, "age": 18, "bio": "I am a backend developer" })
});

app.listen(3000, () => {
  console.log('server started');
});
