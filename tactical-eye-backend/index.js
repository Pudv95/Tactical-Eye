const express = require('express');
const routes = require('./routes/move');
const cors = require('cors');


const app = express();

app.use(cors());

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 200
};

// Apply the cors middleware with the options
app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json({ message: "CORS enabled!" });
});


app.use(express.json());
app.use('/api', routes);



app.post('/hello', (req, res) => {
    console.log('Hello');
    res.status(200).send('Hello');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Chess bot API running on http://localhost:${port}`);
});

module.exports = app;
