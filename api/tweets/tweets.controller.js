
const TWEETS = require('./tweets.model');


module.exports = {
    getAll:getAll,
    get:get,
    post:post,
    patch:patch,
    deleteTweet:deleteTweet
};


function getAll(req, res){

    const {page,limit} = req.query;

    const skip = limit * (page-1);

    TWEETS.find().populate({ path: 'owner', select: 'username' }).limit(+limit).skip(skip).exec((err, tweet) => {
        if (err) return res.status(400).send("Error: "+err);

        return res.json(tweet);
    });
};

function get(req, res){

    TWEETS.findById(req.params.id).exec((err, tweet) => {
        if (err) return res.status(400).send("Error: "+err);

        return res.json(tweet);
    });
};

function post(req, res){
    const {text,owner} = req.body;

    const tweet = new TWEETS({text,owner});

    tweet.save((err, tweet) => {
        
        if (err) return res.status(400).send("Error: "+err);

        return res.status(201).json(tweet);
    });

};

function patch(req,res){
    const datos = req.body;
    
    TWEETS.findByIdAndUpdate(req.params.id,{$set:datos},{new: true}).exec((err, tweet) => {
        if(err) return res.status(400).send("error: "+err);
        return res.json(tweet);
    });
}

function deleteTweet(req,res){
    
    TWEETS.findByIdAndDelete(req.params.id).exec((err, tweet) => {
        if(err) return res.status(400).send("error: "+err);
        return res.json(tweet);
    });
}

