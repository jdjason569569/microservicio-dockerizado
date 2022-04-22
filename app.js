const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const { json, urlencoded } = express;
const port = process.env.PORT || 8080;

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use('/', (req, res) => {
    res.send('this is the micrsoservice 1');
});

app.listen(port, () => {
    console.log('server listen on port -> ', port);
})