const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;

exports.verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  // If no token is provided,
  // returns a 403 Forbidden response with a message indicating the absence of a token.
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    // If verification fails, returns a 401 Unauthorized response.
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id;
    next();
  });
};

exports.isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }
      // If the user does not have the required role, 
      // it returns a 403 Forbidden response with a message indicating the role requirement.
      res.status(403).send({
        message: "Require Admin Role!",
      });
      return;
    });
  });
};

exports.isModerator = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
          next();
          return;
        }
      }
      // If the user does not have the required role, 
      // it returns a 403 Forbidden response with a message indicating the role requirement.
      res.status(403).send({
        message: "Require Moderator Role!",
      });
    });
  });
};

exports.isModeratorOrAdmin = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
          next();
          return;
        }

        if (roles[i].name === "admin") {
          next();
          return;
        }
      }
      // If the user does not have the required role, 
      // it returns a 403 Forbidden response with a message indicating the role requirement.
      res.status(403).send({
        message: "Require Moderator or Admin Role!",
      });
    });
  });
};

// const authJwt = {
//   verifyToken,
//   isAdmin,
//   isModerator,
//   isModeratorOrAdmin
// };
// module.exports = authJwt;
