const express = require('express');
const router = express.Router();

//aget6 shortcut for app.get

// Register
// cause whe're in the users file is users/register
router.get('/register', (req, res,next) => {
  res.send('Register');
})

// Authenticate Route
router.get('/authenticate', (req, res,next) => {
  res.send('Authenticate');

});

// protect route with our Authentication, Our Token
// Profile Route
router.get('/profile', (req, res,next) => {
  res.send('Profile');
});

// Validate Route see if our token matches

// Validate Route
router.get('/validate', (req, res,next) => {
  res.send('Validate');

});



module.exports = router;
