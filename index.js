const express = require('express');
const app = express();
require('dotenv').config();
require('./db/config').connect();
const PORT = process.env.PORT || 80

const TokenRoute = require('./api/routes/TokenTx');

app.use(express.json())

app.use('/api', TokenRoute);

app.get('/', (req, res) => console.log(`Server running...`))

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
})