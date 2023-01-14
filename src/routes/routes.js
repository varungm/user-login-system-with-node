const {signUp,signIn,generateOtp} = require('../controller/appController');


//Creating seperate routes for handling routes
const routes = (app) =>{
     app.route('/signUp')
      .post(signUp)
     app.route('/logIn')
      .post(signIn)
     app.route('/generateotp')
      .post(generateOtp)

};

//Exporting Routes
module.exports = routes;