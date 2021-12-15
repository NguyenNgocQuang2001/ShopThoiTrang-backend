const express = require('express');
const morgan = require('morgan');
const bodyParser =  require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const router = require('./routers/router');
const app = express();
const PORT = process.env.PORT || 9090;



app.use(cors({

    //credentials: true,
    origin : 'http://localhost:9000'
}));

app.use(bodyParser.urlencoded( { extended : false }));
app.use(bodyParser.json()); 
dotenv.config();
app.use(morgan('combined'));
app.use(router);

app.listen(PORT, (err) => {

    if (err) {
        console.log("May chu bi loi :((");
        throw err;
    } else {
        console.log(`Server is running on PORT ${PORT}`);
    }
})