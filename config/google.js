var passport = require('passport');

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

 var AdminModel = require('../views/Model/adminModel');

module.exports = function() {

    passport.use(new GoogleStrategy({


            clientID: '738561098335-1b45labdu6puk09i2o7td4p93utbb3fb.apps.googleusercontent.com',
            clientSecret: '2jqUw8YLuy-eLcp71GLwSArF',
            callbackURL: 'http://localhost:5000/auth/google/callback'
        },
        function (req, accesssToken, refreshToken, profile, done) {
                var admin={};
            var query={
                   'google.id':profile.id

            };
    AdminModel.findOne(query,function (error,admin) {
            if(admin) {
                console.log('foung');
                done(null,admin)

            }
            else {
                  console.log('not Found');
                   var admin = new AdminModel;


                admin.email = profile.emails[0].value;
                admin.image= profile._json.image.url;
                admin.displayName=profile.displayName;
                admin.google ={};
                admin.google.id=profile.id;
                admin.google.token=accesssToken;

                       admin.save();

                done(null, admin);

            }

            });





        }
    ));

};