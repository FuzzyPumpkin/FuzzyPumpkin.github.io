var mongoose = require("mongoose");
var Campground = require("./models/campgrounds.js");
var Comment   = require("./models/comments.js");
 
var data = [
    {
        name: "Morro Bay", 
        image: "https://farm4.staticflickr.com/3211/3062207412_03acc28b80.jpg",
        description: "Morro Bay State Park campground is located close to Morro Bay, next to the marina and the Morro Bay Golf Course. The campground has a wide variety of sites for tents and RVs up to 25 feet or 35 feet. There are also several accessible campsites and Hike & Bike campsites. Picnickers may use the picnic areas of the campground."
    },
    {
        name: "Namakanipaio", 
        image: "https://farm4.staticflickr.com/3319/3493312828_365d80acb7.jpg",
        description: "Nestled amidst a fragrant eucalyptus grove, 4,000 feet above sea level, the historic Namakanipaio Campground offers a rustic, one-of-a-kind camping experience within Hawaii Volcanoes National Park."
    },
    {
        name: "Lost Creek", 
        image: "https://farm2.staticflickr.com/1833/29139749948_a3cd13f49c.jpg",
        description: "Lost Creek Campground is a fully accessible campground allowing anyone access to campsites, fishing and a paved nature trail that meanders through the area."
    }
]
 
function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        Comment.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
             //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        });
    }); 
}
 
module.exports = seedDB;