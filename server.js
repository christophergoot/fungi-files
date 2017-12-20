const express = require('express');
const app = express();
const router = express.Router();
const morgan = require('morgan');
app.use(morgan('common'));
app.use(express.static('public'));


const observationsRouter = require('./observationsRouter');
app.use('/observations', observationsRouter)



app.listen(process.env.PORT || 8080);
module.exports = { app };