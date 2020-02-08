const mongoose=require('mongoose')
const Schema =mongoose.Schema;

const readingBooksSchema= new Schema({
url:{type: String},
theme:{type:String},
titre:{type:String},
agemin:{type:String},
agemax:{type:String},
favorite:{type:Boolean},
lang:{type:String}
});

module.exports = readingBooks= mongoose.model("readingBooks", readingBooksSchema);
