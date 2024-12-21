const jwt = require("jsonwebtoken");

const generateToken = async (user, secret, expiresIn) => {
  const token = await jwt.sign({ id: user._id, role: user.role }, secret, {
    expiresIn,
  });
  return token;
};

module.exports = generateToken;
