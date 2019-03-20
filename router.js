const express = require('express');
const Animal = require('./animal');
const router = express.Router();

//GET ALL
router.get('/api/getanimallist',(req,res)=>{
    Animal.find((err,animal)=>{
        if(err){
            res.send('can not find animals');
        }
        res.send(animal);
    })
})

//POST create new 
router.post('/api/animals/new',(req,res)=>{
     new Animal(req.body).save((err,result)=>{
         if(err){
             res.send('save failed');
         }
         res.send(result);
     })
})

//GET get one animal by id 
router.get('/api/getanimallist/:id',(req,res)=>{
    console.log(req.query);
    Animal.findById(req.params.id,(err,result)=>{
        if(err){
            res.send('get someone failed');
        }
        res.send(result);
    })
})
//POST update
router.post('/api/animal/edit',(err,result)=>{
    Animal.findByIdAndUpdate(req.body.id,req.body,(err,result)=>{
        if(err){
            res.send('update failed');
        }
        res.send(result);
    })
})
//GET delete
router.get('/api/animal/delete',(req,res)=>{
    console.log(req.query.id);
    Animal.findByIdAndRemove(req.query.id,(err,result)=>{
        if(err){
            res.send('fail');
        }
        res.send(result)
    })
})
module.exports=router;