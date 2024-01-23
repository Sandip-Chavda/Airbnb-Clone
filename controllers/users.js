const User = require("../models/user.js");

//render signup page
module.exports.renderSignupForm = async (req, res) => {
  res.render("users/signup.ejs");
};

//signup
module.exports.signup = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    // console.log(registeredUser);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", `Welcome ${username} 🫡`);
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

//render login page
module.exports.renderLoginForm = async (req, res) => {
  res.render("users/login.ejs");
};

//login
module.exports.login = async (req, res) => {
  let { username } = req.body;
  req.flash("success", `Welcome back ${username} 🫡.`);
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

//logout
module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You are Logged Out 😡");
    res.redirect("/listings");
  });
};
