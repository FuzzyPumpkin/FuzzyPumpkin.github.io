var express = require("express");
var router = express.Router();
var Campground = require("../models/campgrounds");
var middle = require("../middleware");


//index
router.get("/campgrounds", function(req, res){
   Campground.find({}, function(err, allCampgrounds){
      if(err){console.log("error");}
      else{res.render("campgrounds/index", {campgrounds:allCampgrounds, currentUser: req.user});}
   });
});

//new
router.get("/campgrounds/new", middle.isLoggedIn, function(req, res){
   res.render("campgrounds/new");
});

//create
router.post("/campgrounds", middle.isLoggedIn, function(req, res){
   var name = req.body.name;
   var image = req.body.image;
   var description = req.body.description;
   var author = {
      id: req.user._id,
      username: req.user.username
   };
   var newCampground = {name: name, image: image, description: description, author: author};
   Campground.create(newCampground, function(err, addedCampground){
      if(err){console.log(err);}
      else{res.redirect("/campgrounds");}
   });
});

//show
router.get("/campgrounds/:id", function(req, res){
   Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
      if(err){console.log(err);}
      else{
         res.render("campgrounds/show", {campground: foundCampground});
      }
   });
});

//edit
router.get("/campgrounds/:id/edit", middle.checkOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});


//update
router.put("/campgrounds/:id", middle.checkOwnership, function(req, res){
    // find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
       if(err){
           res.redirect("/campgrounds");
       } else {
           //redirect somewhere(show page)
           res.redirect("/campgrounds/" + req.params.id);
       }
    });
});

//delete
router.delete("/campgrounds/:id", middle.checkOwnership, function(req, res){
   Campground.findByIdAndRemove(req.params.id, function(err){
      if(err){
          res.redirect("/campgrounds");
      } else {
          res.redirect("/campgrounds");
      }
   });
});

module.exports = router;