const express=require('express');
const router=express.Router();
const Note=require('../models/Note');



//fet all notes


router.get('/',async(req,res)=>{
    const notes=await Note.find().sort({createdAt:-1});
    res.json(notes);
})


//post new note


router.post('/',async(req,res)=>{

    const newNote=new Note({
        title:req.body.title,
        content:req.body.content
    });
    const savedNote=await newNote.save();
    res.json(savedNote);
});



//delete a note


router.delete('/:id',async(req,res)=>{
    await Note.findByIdAndDelete(req.params.id);
    res.json({message :'note deleted'});
});

module.exports=router;