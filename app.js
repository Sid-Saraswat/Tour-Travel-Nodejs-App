
require('dotenv').config();
const express = require("express");
const path = require('path');
const fs = require('fs');
const app = express();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const mail = require('@sendgrid/mail');
const port = process.env.PORT || 9000;

// FOR DATABASE
require("./src/db/connection");
const SpecialBooking = require("./src/models/specialbooking");
const Register = require("./src/models/register");
const Subscribe = require("./src/models/subscribers");
const Contact = require("./src/models/contact");
const Promo = require("./src/models/promocode");
const OfferBooking = require("./src/models/offerbooking");
const TourBooking = require("./src/models/tourbooking");
const HotelBooking = require("./src/models/hotelbooking");
const PaymentBooking = require("./src/models/payment");

// MIDDLEWARE
const auth = require("./src/middleware/auth");

//FOR EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));//for serving static files
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//FOR PUG SPECIFIC STUFF
app.set('view engine', 'html');//set the template engine
app.set('views', path.join(__dirname, 'views'));//set the views directory

// COOKIE PARSER STUFf
app.use(cookieParser());


//ENDPOINTS

// Home Page
app.get('/', (req, res) => {
    const param = { "title": "VAGARY", "h1": "Let's Start A Tour" }
    res.status(200).render('home.pug', param);
})

app.get('/SpecialOfferBooking', (req, res) => {
    const param = { "title": "VAGARY", "h1": "Special Offer Booking" }
    res.status(200).render('offerbooking.pug', param);
})


// About Us Page
app.get('/AboutUs', (req, res) => {
    // console.log(`the login cookie was =>  ${req.cookies.jwt}`);
    const param = { "title": "About Us", "h1": "About Us" }
    res.status(200).render('about.pug', param);
})


// Services Page
app.get('/Services', (req, res) => {
    const param = { "title": "Our Services", "h1": "Services We Offer" }
    res.status(200).render('services.pug', param);
})


// Tours Page End-Points

// Tours Home Page
app.get('/Tours', (req, res) => {
    const param = { "title": "Tours", "h1": "Tours" }
    res.status(200).render('tours.pug', param);
})

// Family Tours Page
app.get('/Tours/FamilyTours', (req, res) => {
    const param = { "title": "Family Tours", "h1": "Family Tours" }
    res.status(200).render('familytours.pug', param);
})

// Tours Details Page
app.get('/PlaceDetail/:name', (req, res) => {
    const name = req.params.name
    const param = { "title": "Family Tours", "h1": name, "placeName": name }
    res.status(200).render('placedetail.pug', param);
})

// Cheap Tours Page
app.get('/Tours/CheapTours', (req, res) => {
    const param = { "title": "Cheap Tours", "h1": "Cheap Tours" }
    res.status(200).render('cheaptours.pug', param);
})

// Beach Tours Page
app.get('/Tours/BeachTours', (req, res) => {
    const param = { "title": "Beach Tours", "h1": "Beach Tours" }
    res.status(200).render('beachtours.pug', param);
})

// Season Tours page
app.get('/Tours/SeasonTours', (req, res) => {
    const param = { "title": "Season Tours", "h1": "Season Tours" }
    res.status(200).render('seasonstours.pug', param);
})

// Romantic Tours Page
app.get('/Tours/RomanticTours', (req, res) => {
    const param = { "title": "Romantic Tours", "h1": "Romantic Tours" }
    res.status(200).render('honeymoontours.pug', param);
})

// More Toures Page
app.get('/Tours/MoreTours', (req, res) => {
    const param = { "title": "More Tours", "h1": "More Tours" }
    res.status(200).render('moretours.pug', param);
})

// All Tour Places Page
app.get('/Tours/AllPlaces', (req, res) => {
    const param = { "title": "All Places", "h1": "All Places" }
    res.status(200).render('allplaces.pug', param);
})

// Booking Page for Special Tours on Home Page only
app.get('/Booknow', auth, (req, res) => {
    const param = { "title": "Special Packages Booking", "h1": "Special Packages Booking" }
    res.status(200).render('specialbooking.pug', param);
})

// To add Promo Codes To DataBase
app.get("/PromoCode", async (req, res) => {
    const param = { "title": "Blogs", "h1": "Our Blogs" }
    res.status(200).render('promoinput.pug', param);
})

// Booking Page for Tour Places
app.get('/Placebook/:placeName', (req, res) => {
    const name = req.params.placeName
    const param = { "title": "Placebook", "h1": name, "placename": name }
    res.status(200).render('placebook.pug', param);
})


// Hotel Page End-Points
app.get('/Hotel', (req, res) => {
    const param = { "title": "Hotels", "h1": "World Class Hotels" }
    res.status(200).render('hotel.pug', param);
})

app.get('/HotelBooking', (req, res) => {
    const param = { "title": "Hotel Booking", "h1": "Hotel Booking" }
    res.status(200).render('hotelbooking.pug', param);
})


// Blogs Page End-Points
app.get('/Blogs', (req, res) => {
    const param = { "title": "Blogs", "h1": "Our Blogs" }
    res.status(200).render('blog.pug', param);
})


// Contact Page End-Points
app.get('/Contact', (req, res) => {
    const param = { "title": "Contact Us", "h1": "Contact Us" }
    res.status(200).render('contact.pug', param);
})

// User Page End-Points
app.get('/User', auth, (req, res) => {
    const param = { "title": "User", "h1": "Welcome Back", "UserName": req.name }
    res.status(200).render('user.pug', param);
})

// User Bookings Page End-Points
app.get('/Bookings', auth, async (req, res) => {
    const data = req.user.bookings
    const arr = []
    await data.forEach((e) => {
        arr.push(e.booking)
    })
    const param = { "title": "Bookings", "h1": "Your Bookings", "Data": arr }
    res.status(200).render('bookings.pug', param);
})

// LogInSignUp Page End-Points
app.get('/LogInSignUp', (req, res) => {
    const param = { "title": "Sign in/Sign up", "h1": "Sign In Or Sign Up" }
    res.status(200).render('signinlogin.pug', param);
})


// Forgot Password Page End-Points
app.get('/ForgotPassword', (req, res) => {
    const param = { "title": "Forgot Password", "h1": "Forgot Password" }
    res.status(200).render('forgotpassword.pug', param);
})

// Reset Password Page End-Points
app.get('/ResetPassword/:id/:token', async (req, res) => {
    try {
        const { id, token } = req.params;
        const User = await Register.findOne({ _id: id });
        const secret = process.env.SECRET_KET + User.password;
        const payload = jwt.verify(token, secret);
        res.status(200).render('resetpassword.pug');
    } catch (error) {
        res.send(error)
    }
})

// Log Out
app.get('/Logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((currentElement) => {
            return currentElement.token != req.token
        })
        res.clearCookie("jwt");
        await req.user.save();
        res.redirect("/");
    } catch (error) {
        res.status(500).send(error)
    }
})



// POST REQUESTS

app.post('/OfferBooking', auth, async (req, res) => {
    try {
        const RegisterCoustomer = new OfferBooking({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            datetime: req.body.datetime,
            place: req.body.place,
            bringingPet: req.body.bringingPet,
            needToPickUp: req.body.needToPickUp,
            suggestion: req.body.suggestion
        })
        const SaveOfferData = await RegisterCoustomer.save();

        var desc = "5 Days 6 Nights , 5 Star Accomodation , Transportation , Food Facilities , Only For 2 Person";
        var promoName = "";
        var promoPrice = 0;

        if (req.body.place == "Thailand") {
            var price = 999;
        }

        if (req.body.promo == "") {
            console.log("No Promo Code Applied")
        } else {
            const promo = req.body.promo;
            const UserPromo = await Promo.findOne({ promocode: promo });
            if (UserPromo.promocode === promo) {
                promoName = UserPromo.promocode;
                promoPrice = UserPromo.codevalue;
            } else {
                res.send("PromoCode Not matched");
            }
        }

        var totalPrice = price - promoPrice;
        const Details = {
            "ProductName": req.body.place, "UserName": req.body.name, "TotalPrice": `$${totalPrice}`, "UserEmail": req.body.email, "TripDate": req.body.datetime
        }
        const token = jwt.sign({ Details }, process.env.SECRET_KEY);
        res.cookie("booking", token, {
            expires: new Date(Date.now() + 900000),
        });
        const param = { "title": "Special Packages Booking", "h1": "Special Packages Booking", "ProductName": req.body.place, "BriefDescription": desc, "ProductPrice": `$${price}`, "PromoName": promoName, "PromoPrice": `-$${promoPrice}`, "TotalPrice": `$${totalPrice}` }
        res.status(201).render('payment.pug', param);

    } catch (error) {
        res.status(400).send(error)
    }
})

// Home Page Subscribe (To add Sibscribers to Database)
app.post('/Subscribe', async (req, res) => {
    try {
        const RegisterSubscriber = new Subscribe({
            email: req.body.email
        })
        const SaveSubscriber = await RegisterSubscriber.save();
        const param = { "title": "VAGARY", "h1": "Let's Start A Tour" }
        res.status(201).render('home.pug', param);
    } catch (error) {
        res.status(400).send(error)
    }
})

// Book Special Packages  (To add Special Booking Details of Customer to Database)
app.post('/Booknow', auth, async (req, res) => {
    try {
        const RegisterCoustomer = new SpecialBooking({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            datetime: req.body.datetime,
            place: req.body.place,
            bringingPet: req.body.bringingPet,
            needToPickUp: req.body.needToPickUp,
            suggestion: req.body.suggestion
        })

        const SaveData = await RegisterCoustomer.save();

        var desc = "5 Days 6 Nights , 5 Star Accomodation , Transportation , Food Facilities , Only For One Person";
        var promoName = "";
        var promoPrice = 0;

        if (req.body.place == "Italy") {
            var price = 499;
        }
        if (req.body.place == "England") {
            var price = 1499;
        }
        if (req.body.place == "France") {
            var price = 1199;
        }
        if (req.body.place == "India") {
            var price = 799;
        }
        if (req.body.place == "Spain") {
            var price = 999;
        }
        if (req.body.place == "Thailand") {
            var price = 799;
        }

        if (req.body.promo == "") {
            console.log("No Promo Code Applied")
        } else {
            const promo = req.body.promo;
            const UserPromo = await Promo.findOne({ promocode: promo });
            if (UserPromo.promocode === promo) {
                promoName = UserPromo.promocode;
                promoPrice = UserPromo.codevalue;
            } else {
                res.send("PromoCode Not matched");
            }
        }
        var totalPrice = price - promoPrice;
        const Details = { "ProductName": req.body.place, "UserName": req.body.name, "TotalPrice": `$${totalPrice}`, "UserEmail": req.body.email, "TripDate": req.body.datetime }
        const token = jwt.sign({ Details }, process.env.SECRET_KEY);
        res.cookie("booking", token, {
            expires: new Date(Date.now() + 900000),
        });
        const param = { "title": "Special Packages Booking", "h1": "Special Packages Booking", "ProductName": req.body.place, "BriefDescription": desc, "ProductPrice": `$${price}`, "PromoName": promoName, "PromoPrice": `-$${promoPrice}`, "TotalPrice": `$${totalPrice}` }
        res.status(201).render('payment.pug', param);

    } catch (error) {
        res.status(400).send(error)
    }
})

// Book Tour
app.post('/PlaceBooking', auth, async (req, res) => {
    try {
        const RegisterCoustomer = new TourBooking({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            datetime: req.body.datetime,
            place: req.body.place,
            bringingPet: req.body.bringingPet,
            needToPickUp: req.body.needToPickUp,
            suggestion: req.body.suggestion
        })

        const TourData = await RegisterCoustomer.save();

        var desc = "5 Days 6 Nights , 5 Star Accomodation , Transportation , Food Facilities , Only For One Person";
        var promoName = "";
        var promoPrice = 0;

        if (req.body.promo == "") {
            console.log("No Promo Code Applied")
        } else {
            const promo = req.body.promo;
            const UserPromo = await Promo.findOne({ promocode: promo });
            if (UserPromo.promocode === promo) {
                promoName = UserPromo.promocode;
                promoPrice = UserPromo.codevalue;
            } else {
                res.send("PromoCode Not matched");
            }
        }
        var price = Math.floor((Math.random() * 1100) + 800);;
        var totalPrice = price - promoPrice;
        const Details = { "ProductName": req.body.place, "UserName": req.body.name, "TotalPrice": `$${totalPrice}`, "UserEmail": req.body.email, "TripDate": req.body.datetime }
        const token = jwt.sign({ Details }, process.env.SECRET_KEY);
        res.cookie("booking", token, {
            expires: new Date(Date.now() + 900000),
        });
        const param = { "title": "Tour Booking", "h1": "Tour Booking", "ProductName": req.body.place, "BriefDescription": desc, "ProductPrice": `$${price}`, "PromoName": promoName, "PromoPrice": `-$${promoPrice}`, "TotalPrice": `$${totalPrice}` }
        res.status(201).render('payment.pug', param);


    } catch (error) {
        res.status(400).send(error)
    }
})

// To save payment details
app.post("/Payment", auth, async (req, res) => {
    try {
        mail.setApiKey(process.env.API_Key);
        const RegisterPayment = new PaymentBooking({
            name: req.body.name,
            cardNumber: req.body.number,
            expire: req.body.expiry,
            cvv: req.body.cvv
        })
        const SavePayment = await RegisterPayment.save();
        const token = req.cookies.booking
        const Data = jwt.verify(token, process.env.SECRET_KEY);
        const Details = Data.Details
        const message = {
            to: Details.UserEmail,
            from: {
                name: 'VAGARY',
                email: 'vagarytourtravels@gmail.com',
            },
            subject: 'Trip Booking Succesful..!!',
            text: `You Have Succesful Booked A Trip to ${Details.ProductName} On ${Details.TripDate} at Vagary for ${Details.TotalPrice}`,
            // html: `<h1>You Have Succesful Booked A Trip to ${Details.ProductName} On ${Details.TripDate} at Vagary for ${Details.TotalPrice}</h1>`,
            html: `<div class="d-flex flex-column justify-content-center align-items-center" id="order-heading">
                <div class="text-uppercase">
                    <p>Booking Detail</p>
                </div>
                <div class="h4">${Details.TripDate}</div>
            </div>
            <div class="wrapper bg-white">
                <div class="table-responsive">
                    <table class="table table-borderless">
                        <thead>
                            <tr class="text-uppercase text-muted">
                                <th scope="col">TO</th>
                                <th scope="col" class="text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">${Details.ProductName}</th>
                                <td class="text-right"><b>${Details.TotalPrice}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="d-flex justify-content-start align-items-center list py-1">
                    <div><b>1 Person</b></div>
                    <div class="mx-3"></div>
                    <div class="order-item">${Details.UserName}</div>
                </div>
                <div class="pt-2 border-bottom mb-3"></div>
            </div>`
        };
        mail.send(message).then(response => console.log("Mail Sent")).catch(error => console.log(error));
        const param = { "title": "PAYMENT", "h1": "Payment Sucess" }
        req.user.bookings = req.user.bookings.concat({ booking: Details });
        await req.user.save();
        res.status(201).render('paymentsucess.pug', param)
    } catch (error) {
        res.status(400).send(error)
    }
})

// To Add New Promocodes To the database
app.post("/PromoCode", async (req, res) => {
    try {
        const RegisterPromo = new Promo({
            promocode: req.body.promo,
            codevalue: req.body.codevalue
        })
        const SavePromo = await RegisterPromo.save();
        res.status(201).render('promoinput.pug')
    } catch (error) {
        res.status(400).send(error)
    }
})

// Book Hotels  (To add Hotel Booking Details of Customer to Database)
app.post('/HotelBook', auth, async (req, res) => {
    try {
        const RegisterCoustomer = new HotelBooking({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            datetime: req.body.datetime,
            place: req.body.place,
            bringingPet: req.body.bringingPet,
            needToPickUp: req.body.needToPickUp,
            suggestion: req.body.suggestion
        })

        const SaveData = await RegisterCoustomer.save();

        var desc = "1 Night , 5 Star Accomodation, Food Facilities , Only For One Person";
        var promoName = "";
        var promoPrice = 0;

        if (req.body.place == "Deluxe Hotel") {
            var price = 199;
        }
        if (req.body.place == "Hotel Bora") {
            var price = 149;
        }
        if (req.body.place == "D’Morvie") {
            var price = 139;
        }
        if (req.body.promo == "") {
            console.log("No Promo Code Applied")
        } else {
            const promo = req.body.promo;
            const UserPromo = await Promo.findOne({ promocode: promo });
            if (UserPromo.promocode === promo) {
                promoName = UserPromo.promocode;
                promoPrice = UserPromo.codevalue;
            } else {
                res.send("PromoCode Not matched");
            }
        }

        var totalPrice = price - promoPrice;
        const Details = { "ProductName": req.body.place, "UserName": req.body.name, "TotalPrice": `$${totalPrice}`, "UserEmail": req.body.email, "TripDate": req.body.datetime }
        const token = jwt.sign({ Details }, process.env.SECRET_KEY);
        res.cookie("booking", token, {
            expires: new Date(Date.now() + 900000),
        });
        const param = { "title": "Hotel Booking", "h1": "Special Packages Booking", "ProductName": req.body.place, "BriefDescription": desc, "ProductPrice": `$${price}`, "PromoName": promoName, "PromoPrice": `-$${promoPrice}`, "TotalPrice": `$${totalPrice}` }
        res.status(201).render('payment.pug', param);

    } catch (error) {
        res.status(400).send(error)
    }
})

// To send User querry To Database
app.post('/Contact', async (req, res) => {
    try {
        const RegisterContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        })
        const SaveContact = await RegisterContact.save();
        const param = { "title": "VAGARY", "h1": "Let's Start A Tour" }
        res.status(201).render('home.pug', param);
    } catch (error) {
        res.status(400).send(error)
    }
})

// Sign In Form 
app.post('/SignUp', async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const cpassword = req.body.cpassword
        const UserEmail = await Register.findOne({ email: email });
        if (UserEmail.email === email) {
            res.send("User Already Registered...!!!")
        } else {
            if (password === cpassword) {
                const NewRegister = new Register({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                })
                const token = await NewRegister.genetateAuthToken();
                // console.log(`register token is  =>    ${token}`);
                res.cookie("jwt", token, {
                    expires: new Date(Date.now() + 900000),
                    httpOnly: true
                });
                const RegisterUser = await NewRegister.save();
                res.status(201).redirect("/");
            } else {
                res.send("Passwords are Not Same")
            }
        }
    } catch (error) {
        res.status(400).send(error)
    }
})

// Login In Form
app.post('/Login', async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const UserEmail = await Register.findOne({ email: email });
        const isMatch = await bcrypt.compare(password, UserEmail.password);
        const token = await UserEmail.genetateAuthToken();
        // console.log(`login token is   =>    ${token}`);
        res.cookie("jwt", token, {
            expires: new Date(Date.now() + 900000),
            httpOnly: true
            // secure:true
        });
        if (isMatch) {
            const param = { "title": "VAGARY", "h1": "Let's Start A Tour" }
            res.status(201).render('home.pug', param);
        } else {
            res.send("Email Or Password Not matched")
        }
    } catch (error) {
        res.status(400).send("Email Or Password Not matched")
    }
})

// Forgot Password
app.post('/ForgotPassword', async (req, res) => {
    try {
        const email = req.body.email;
        mail.setApiKey(process.env.API_Key);
        const User = await Register.findOne({ email: email });
        if (email !== User.email) {
            res.send("Invalid Email");
        }
        else {
            const secret = process.env.SECRET_KET + User.password;
            const payload = {
                email: User.email,
                id: User._id
            };
            const token = jwt.sign(payload, secret, { expiresIn: '15m' });
            const link = `http://localhost:9000/ResetPassword/${User._id}/${token}`;
            const message = {
                to: email,
                from: {
                    name: 'VAGARY',
                    email: 'vagarytourtravels@gmail.com',
                },
                subject: 'Reset Password',
                text: `Click On the link to create your new password ==>>  ${link}  <<== this link is valid only for 15 minuts`,
                // html: `<h1>Click On the link to create your new password ==>>  ${link}  <<== and this link is valid only for 15 minuts</h1>`,
            };
            mail.send(message).then(response => console.log("Mail Sent")).catch(error => console.log(error));
            res.status(200).send("An Reset Password Link Has Been Sent To Your Email");
        }
    } catch (error) {
        res.status(400).send(error)
    }
})

// Reset Password 
app.post('/ResetPassword/:id/:token', async (req, res) => {
    try {
        const { id, token } = req.params;
        const { password, cpassword } = req.body;
        const User = await Register.findOne({ _id: id });
        const secret = process.env.SECRET_KET + User.password;
        const payload = jwt.verify(token, secret);
        if (password === cpassword) {
            User.password = password;
            User.save();
            res.status(200).send("Password Changed Succesfully");
        }
    } catch (error) {
        res.send(error)
    }
})

// COUNTRIES JSON API
app.get('/countries.json', (req, res) => {
    fs.readFile("countries.json", 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));

    })
})


// SEASONS JSON API
app.get('/seasons.json', (req, res) => {
    fs.readFile("seasons.json", 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
    })
})


//START THE SERVER
app.listen(port, () => {
    console.log(`Our website has successfully started on port ${port}`);
});

