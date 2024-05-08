const Item = require('../item');
const express = require('express');
const router = express.Router()


// GET routes

router.get('', (req, res, next)=> {
    try{
        return res.json({ items: Item.getAllItems() });
    }
    catch(err){
        return next(err)
    }
});

router.get('/:name', (req, res, next)=>{
    try{

        let foundItem = Item.find(req.params.name);
        return res.json({item: foundItem})
    }
    catch(err){
        return next(err)
    }
});

// PATCH routes
router.patch('/:name', (req,res,next)=>{
    try{
        let foundItem = Item.edit(req.params.name, req.body);
        return res.json({item: foundItem});
    }
    catch(err){
        return next(err)
    }
})


// POST routes

router.post('', (req, res, next)=>{
    try{
        let newItem = new Item(req.body.name, req.body.price);
    }
    catch(err){
        return next(err)
    }
});

// DELETE routes

router.delete('/:name', (req,res,next)=> {
    try{
        Item.remove(req.params.name);
        return res.json({message: "Item has been deleted"});
    }
    catch(err){
        return next(err)
    }
});

module.exports= router;
