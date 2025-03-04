const express = require('express');
const cors = require('cors'); 
const routes = require('./routes/move');

const app = express();

app.use(cors());

app.use(express.json());
app.use('/api', routes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Chess bot API running on http://localhost:${port}`);
});

module.exports = app;