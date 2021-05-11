const express = require('express');
const app = express();
require('dotenv').config();
port= process.env.PORT

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});