const mongoose=require('mongoose')
const Schema =mongoose.Schema;

const educationGamessSchema= new Schema({
url:{type: String},
theme:{type:String},
titre:{type:String},
agemin:{type:String},
agemax:{type:String},
favorite:{type:Boolean},
lang:{type:String}
});

module.exports = games = mongoose.model("educationGames", educationGamessSchema);
