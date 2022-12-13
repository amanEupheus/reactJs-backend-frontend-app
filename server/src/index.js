const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const app = express();
var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const {createUser} = require('../controllers/userController')


app.post('/createUser', createUser)




// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../../jtp-reactapp/build')));



// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../jtp-reactapp/build', 'index.html'));
  });












app.listen(process.env.PORT || 5020, ()=>{
    console.log("express is connected for this", 5020)
})