
const USERS = require('./users.model');


module.exports = {
    getAll,
    get,
    post,
    patch,
    deleteUser
};


function getAll(req, res){

    const {page,limit} = req.query;

    const skip = limit * (page-1);

    USERS.find().limit(+page).skip(skip).exec((err, user) => {
        if (err) return res.status(400).send("Error: "+err);

        return res.json(user);
    });
};

function get(req, res){

    USERS.findById(req.params.id).exec((err, user) => {
        if (err) return res.status(400).send("Error: "+err);

        return res.json(user);
    });
};

function post(req, res){
    
    const {username,name,email} = req.body;

    const usuario = new USERS({username,name,email});

    usuario.save((err, user) => {
        
        if (err) return res.status(400).send("Error: "+err);

        return res.status(201).json(user);
    });

};

function patch(req,res){
    const datos = req.body;
    
    USERS.findByIdAndUpdate(req.params.id,{$set:datos},{new: true}).exec((err, user) => {
        if(err) return res.status(400).send("error: "+err);
        return res.json(user);
    });
}

function deleteUser(req,res){
    
    USERS.findByIdAndDelete(req.params.id).exec((err, user) => {
        if(err) return res.status(400).send("error: "+err);
        return res.json(user);
    });
}

