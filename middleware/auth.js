const User = require("../models/User");

// Simple mock auth (no login required)
const auth = async (req, res, next) => {
  const userId = req.headers.userid;

  if (!userId) return res.status(401).json({ msg: "No user id" });

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ msg: "User not found" });

  req.user = user;
  next();
};

module.exports = auth;