const express = require("express");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const blogModel = require("../model/model");

router.get('/', async(req,res) => {
    try{
        const blog = await blogModel.find();
        res.status(200).send(blog);

    }catch(err){
        console.log(err);
        res.status(400).send("There is an error" + err);
    }
});

router.post('/add', async(req,res) => {
    try{
        const blog = new blogModel({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            author: req.body.author,
            content: req.body.content
        });
        const data = await blog.save();
        res.status(200).send("Blog added successfully");
     }
     catch(err){
        console.log(err);
        res.status(400).send("Something went wrong");
    }
});

router.put('/updateblog/:id', async(req,res) => {
    try{
        const id = req.params.id;
        const data = await blogModel.findByIdAndUpdate(id, req.body);
        res.status(200).send("Blog updated successfully");
    }catch(err){
        console.log(err);
        res.status(400).send("Something went wrong");
    }
});

router.delete('/deleteblog/:id', async(req,res) => {
    try{
        const id = req.params.id;
        const data = await blogModel.findByIdAndDelete(id);
        res.status(200).send("Blog deleted successfully");
    }catch(err){
        console.log(err);
        res.status(400).send("Something went wrong");
    }
});

module.exports = router;