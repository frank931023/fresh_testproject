const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

exports.checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Checks if the provided username is already in use by querying the database.
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    // If the username is found,
    // sends a 400 Bad Request response with a message indicating the username is in use.
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!",
      });
      return;
    }

    // Email
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      // If the email is found,
      // sends a 400 Bad Request response with a message indicating the email is in use.
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!",
        });
        return;
      }

      next();
    });
  });
};

exports.checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i],
        });
        return;
      }
    }
  }

  next();
};

// const verifySignUp = {
//   checkDuplicateUsernameOrEmail,
//   checkRolesExisted,
// };

// module.exports = verifySignUp;
