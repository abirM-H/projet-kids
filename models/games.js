const mongoose=require('mongoose')
const Schema =mongoose.Schema;

const gamesSchema= new Schema({
image:{type:String},
url:{type: String},
titre:{type:String},
agemin:{type:String},
agemax:{type:String},
lang:{type:String}
});

module.exports = games = mongoose.model("games", gamesSchema);
