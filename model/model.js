const mongoose=require("mongoose");
const schema = mongoose.Schema({
//Write missing code here
});
const blogSchema = mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    author: String,
    content: String
}, {
    versionKey: false
});


//Write missing code here
const blogModel = mongoose.model("blog", blogSchema);
module.exports = blogModel;