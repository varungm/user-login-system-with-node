const {signUp,signIn,generateOtp} = require('../controller/appController');

const routes = (app) =>{
     app.route('/signUp')
      .post(signUp)
     app.route('/logIn')
      .post(signIn)
     app.route('/generateotp')
      .post(generateOtp)

};


module.exports = routes;