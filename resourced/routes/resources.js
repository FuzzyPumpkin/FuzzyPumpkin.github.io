const express = require('express');
const Resource = require('../models/Resource');
const router = express.Router();

//Problem - returning empty array
router.get('/', async (req, res) => {
    try {
        const resources = await Resource.find({});
        res.json(resources);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});
//BIG problem here. coming back with can't access siteURL of undefined. I dunno. 
// router.post('/', async (req, res) => {
//     const { siteURL, imageURL, description, tags, name } = req.body;
//     try {
//         const newResource = new Resource({
//             siteURL: siteURL, 
//             imageURL: imageURL, 
//             description: description, 
//             tags: tags, 
//             name: name
//         });
//         const resource = await newResource.save();
//         res.json(resource);
//     } catch(err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// });

router.post("/", function(req, res){
    let siteURL = req.body.siteURL;
    let imageURL = req.body.imageURL;
    let description = req.body.description;
    let tags = req.body.tags;
    let name = req.body.name;
    const newResource = new Resource({
        siteURL: siteURL, 
        imageURL: imageURL, 
        description: description, 
        tags: tags, 
        name: name
    });
    Resource.create(newResource, function(err, addedResource){
       if(err){console.log(err);}
       else{res.json(resource);};
    });
 });

router.put('/:id', (req, res) => {
    res.send("edit data");
});

router.delete('/:id', (req, res) => {
    res.send("delete data");
});

module.exports = router;