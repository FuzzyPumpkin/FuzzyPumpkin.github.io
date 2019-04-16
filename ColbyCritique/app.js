var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    methodOverride = require("method-override"),
    flash          = require("connect-flash"),
    passport       = require("passport"),
    localStrategy  = require("passport-local"),
    Campground     = require("./models/campgrounds.js"),
    Comment        = require("./models/comments.js"),
    User           = require("./models/users.js"),
    campRoutes     = require("./routes/campgrounds"),
    authRoutes     = require("./routes/index"),
    commentRoutes  = require("./routes/comments");
    
    
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

//Passport config for authentication
app.use(require("express-session")({
    secret: "Colby loves Mikko.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//set current user for gatekeeping on edit/deletes
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});


//routes
app.use(authRoutes);
app.use(campRoutes);
app.use(commentRoutes);

//landing page
app.get("/", function(req, res){
   res.render("landing");
});


//server start
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("server started"); 
});