const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetsSchema = new Schema({
    text:  {
        type: String,
        trim: true,
        required: [true,'El tweet debe contener algo.']
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: [true,'El tweet debe tener propietario.']
    },
    dateAt: {
        type: Date,
        default: Date.now() 
    }
});

const TWEETS = mongoose.model('tweets', tweetsSchema);

module.exports = TWEETS;
