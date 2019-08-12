const   mongoose = require('mongoose'),
        express = require('express'),
        app = express();
        
app.use(express.json());

const config = {
    autoIndex:false,
    useNewUrlParser: true
};

mongoose.connect('mongodb://localhost/dbpruebas',config);

const users = require('./api/users');
const tweets = require('./api/tweets');

app.use('/users',users);
app.use('/tweets',tweets);

app.listen(8080, err => {
    if(err) return console.log(err);
    console.log('Server OK');
});
