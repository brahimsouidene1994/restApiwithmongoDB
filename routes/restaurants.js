const express = require('express');

const router = express.Router();

const Restaurant = require('../model/Restaurant');

router.get('/getAll', async (req, res)=>{
    try{
        const allRestaurants = await Restaurant.find();
        res.json(allRestaurants);
    }catch(err){
        res.json({message : err})
    }
});

router.post('/', async (req, res)=>{
    const resto = new Restaurant({
        name : req.body.name,
        adresse : req.body.adresse,
        image : req.body.image
    });
    try{

        const saveRestaurant = await resto.save();
        res.json(saveRestaurant);
    }catch(err){
        res.json({message : err});
    };
});

router.delete('/:id', async (req, res)=>{
    try{
        const deletedResto = await Restaurant.remove({_id : req.params.id});
        res.json(deletedResto);
    }catch(err){
        res.json({message : err});
    };
});

router.get('/:id', async (req, res)=>{

    try{
       const  resto = await Restaurant.findById(req.params.id);
        res.json(resto);
    }catch(err){
        res.json({message : err});
    };
});

router.patch('/:id', async (req, res)=>{
    try{
        const  resto = await Restaurant.updateOne(
            {_id : req.params.id},
            {
                $set: {
                    name : req.body.name,
                    adresse : req.body.adresse,
                    image : req.body.image
                }
            });
         res.json(resto);
     }catch(err){
         res.json({message : err});
     };
});
module.exports = router;