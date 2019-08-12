const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: [true,'El nombre de usuario es obligatorio']
    },
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        validate: {
            validator: function(v) {
              return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(v);
            },
            message: props => `"${props.value}" tiene que ser un correo válido`
        },
        required: [true,'El correo electrónico es obligatorio']
    },
    tweets: {
        type: String,
        trim: true,
        default: []
    }
});

const USERS = mongoose.model('users', userSchema);

module.exports = USERS;
