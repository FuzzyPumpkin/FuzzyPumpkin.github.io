const express    = require("express"),
      app        = express(),
      bodyParser = require("body-parser"),
      mongoose   = require("mongoose"),
      Resources  = require("./models/resources.js"),
      router     = express.Router();
    
//production db
mongoose.connect("mongodb+srv://kariminger:12mI94Zzr94P2AY@resourced-bunpd.mongodb.net/test?retryWrites=true&w=majority");

app.use(express.static("public"));
app.set("view engine", "ejs");



//routes
//TEMP index to verify database pull - not working ATM, not rendering the page at all but no error
router.get("/resources", function(req, res){
    Resources.find({}, function(err, allResources){
       if(err){console.log("error");}
       else{res.render("/temp", {resources:allResources});}
    });
 });


//server start
const PORT = process.env.PORT || 5000;	
app.listen(PORT, () => console.log(`Server started port ${PORT}`));