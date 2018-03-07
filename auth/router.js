'use strict';
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
// const multer  = require('multer');
// const upload = multer();
const config = require('../config');
const router = express.Router();
const { User } = require('../users/models');

const createAuthToken = function(user) {
  return jwt.sign({user}, config.JWT_SECRET, {
    subject: user.username,
    expiresIn: config.JWT_EXPIRY,
    algorithm: 'HS256'
  });
};

const jwtAuth = passport.authenticate('jwt', {session: false});
// const localAuth = passport.authenticate('local', {session: false});

router.use(bodyParser.json());
// router.use(upload.none());
// The user provides a username and password to login
router.post('/login', (req, res) => {
  // validate user and pass
  // const user = { username: req.body.username, password: req.body.password }
  const username = req.body.username;
  const password = req.body.password;
  let user;
  User.findOne({ username: username })
  .then(_user => {
    user = _user;
    if (!user) {
      // Return a rejected promise so we break out of the chain of .thens.
      // Any errors like this will be handled in the catch block.
      return Promise.reject({
        reason: 'LoginError',
        message: 'Incorrect username or password'
      });
    }
    return user.validatePassword(password);
  })
  .then(isValid => {
    if (!isValid) {
      return Promise.reject({
        reason: 'LoginError',
        message: 'Incorrect username or password'
      });
    }
    return user;
  })
  .then(user => {
    const authToken = createAuthToken(user.serialize());
    res.json({authToken});
  
  })
  .catch(error => {
    console.error('Error:', error);    
    res.status(422).json(error);
  })  
});

// The user exchanges a valid JWT for a new one with a later expiration
router.post('/refresh', jwtAuth, (req, res) => {
  const authToken = createAuthToken(req.user);
  res.json({authToken});
});

module.exports = {router};
