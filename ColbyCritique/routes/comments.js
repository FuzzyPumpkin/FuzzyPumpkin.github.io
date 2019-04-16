var express = require("express");
var router = express.Router();
var Campground = require("../models/campgrounds");
var Comment = require("../models/comments");
var middle = require("../middleware");

//Comments new/create (nested in campgrounds)
router.get("/campgrounds/:id/comments/new", middle.isLoggedIn, function(req, res){
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else {
             res.render("comments/new", {campground: campground});
        }
    });
});

router.post("/campgrounds/:id/comments", function(req, res){
   Campground.findById(req.params.id, function(err, campground){
       if(err){
           console.log(err);
           res.redirect("/campgrounds");
       } else {
        Comment.create(req.body.comment, function(err, comment){
           if(err){
               console.log(err);
           } else {
               //setup comment
               comment.author.id = req.user._id;
               comment.author.username = req.user.username;
               comment.save();
               //add to comments
               campground.comments.push(comment);
               campground.save();
               res.redirect('/campgrounds/' + campground._id);
           }
        });
       }
   });
});

//edit
router.get("/campgrounds/:id/comments/:comment_id/edit", middle.checkCommentOwnership, function(req, res){
    Comment.findById(req.params.comment_id, function(err, foundComment){
        if(err){res.redirect("back");}
        else{
            res.render("comments/edit", {campground_id: req.params.id, comment: foundComment});
        }
    });
});

//update
router.put("/campgrounds/:id/comments/:comment_id", middle.checkCommentOwnership, function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
        if(err){res.redirect("back")}
        else{
            res.redirect("/campgrounds/ + req.params.id");
        }
    });
});

//delete
router.delete("/campgrounds/:id/comments/:comment_id", middle.checkCommentOwnership, function(req, res){
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
        if(err){res.redirect("back");}
        else{
            req.flash("success", "Comment deleted.");
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});


module.exports = router;