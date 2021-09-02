const express = require("express")
const methodOverride = require("method-override")
const flash = require('connect-flash');
const passport = require('passport');
const DreamNumberRoute = require("./Route/DreamNumber")
const session = require('express-session');
const CommonNumberRound1Route = require("./Route/CommonNumberRound1")
const CommonNumberRound2Route = require("./Route/CommonNumberRound2")
const CommonNumberNightRound1Route = require("./Route/CommonNumberNight/CommonNumberNightRound1")
const CommonNumberNightRound2Route = require("./Route/CommonNumberNight/CommonNumberNightRound2")
const CommonNumberMorningRound1Route = require("./Route/CommonNumberMorning/CommonNumberMorningRound1")
const CommonNumberMorningRound2Route = require("./Route/CommonNumberMorning/CommonNumberMorningRound2")
const TeerChampionRoute=require("./Route/TeerChampion")
const TeerCalenderRoute = require("./Route/TeerCalender")
const FAQRoute=require("./Route/FAQ")
const HomeRoute =require("./Route/Home")
const ReputedCounterRoute = require("./Route/ReputedCounter")
const PreviousMorningTeerResultRoute = require("./Route/PreviousResult/MorningTeerResult")
const PreviousNoonTeerResultRoute = require("./Route/PreviousResult/NoonTeerResult")
const PreviousEveningTeerResultRoute = require("./Route/PreviousResult/EveningTeerResult")
const AnnoucementRoute = require("./Route/Announcement")
const ResultRound1Route=require("./Route/Result/Round1")
const ResultRound2Route = require("./Route/Result/Round2")
const MorningResultRoute=require("./Route/Result/MorningResult")
const NoonResultRoute=require("./Route/Result/NoonResult")
const EveningResultRoute=require("./Route/Result/EveningResult")
const AnalyticsRoute = require("./Route/Analytics")
const AuthRoute = require("./route/User")

const mongoose =require("mongoose")


const app = express()

require('./Config/passport')(passport);
mongoose.connect("mongodb+srv://hashcoder:Coder@101@cluster0.y7qqh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true })
require("ejs")
//env




//init midiileware



//serving static file
app.use(express.static(__dirname + "/public"))

app.use('/static', express.static('public'));
// Express body parser
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json({
    extended: false
}))



app.use(methodOverride("_method"))


app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());


// Global variables
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;

    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');

    next();
});
//settting view engine ejs
app.set("view engine", "ejs")


app.use("/",HomeRoute)
app.use("/dreamnumber",DreamNumberRoute)
app.use("/commonnumberround1", CommonNumberRound1Route)
app.use("/commonnumberround2", CommonNumberRound2Route)
app.use("/commonnumbernightround1", CommonNumberNightRound1Route)
app.use("/commonnumbernightround2", CommonNumberNightRound2Route)
app.use("/commonnumbermorninground1", CommonNumberMorningRound1Route)
app.use("/commonnumbermorninground2", CommonNumberMorningRound2Route)
app.use("/teerchampion",TeerChampionRoute)
app.use("/teercalender", TeerCalenderRoute)
app.use("/reputedcounter", ReputedCounterRoute)
app.use("/previousmorningteerresult", PreviousMorningTeerResultRoute)
app.use("/previousnoonteerresult", PreviousNoonTeerResultRoute)
app.use("/previouseveningteerresult", PreviousEveningTeerResultRoute)
app.use("/annoucement", AnnoucementRoute)
app.use("/resultround1", ResultRound1Route)
app.use("/analytics", AnalyticsRoute)
app.use("/resultround2", ResultRound2Route)
app.use('/users', AuthRoute)
app.use("/faq",FAQRoute)
app.use("/morningresult",MorningResultRoute)
app.use("/noonresult",NoonResultRoute)
app.use("/eveningresult",EveningResultRoute)

app.get('*', function (req, res) {
    
    res.render('404');
});


app.listen(5000, (err, data) => {
    console.log("working")
})