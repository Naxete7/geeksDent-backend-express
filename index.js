const express = require('express');
const morgan = require('morgan');
const logger = require('./config/winston');
const db = require('./db.js');
//const router = require('./router.js');

const app = express();
const PORT = process.env.PORT || 3002; 

//Middleware
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());

//Rutas
//app.get('/', (req, res) => {res.send('Bienvenidos a Express');});
//app.use(router);

//Connecting to the database
db.then(()=>{
    //Starting server
        app.listen(PORT, ()=> console.log(`Server on port ${PORT}`));
    })
    .catch((err)=> console.log(err.message));   