const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  userType: { type: String },
  insuranceName: { type: String },
  insuranceId: { type: String },
  gender: { type: String },
  race: { type: String },
  occupation: { type: String },
  dob: { type: Date },
  phone: { type: String },
  mobile: { type: String },
  address1: { type: String },
  address2: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: Number },
  alcohol: { type: String },
  cigarettes: { type: String },
  marijuana: { type: String },
  exercise: { type: String },
  sex: { type: String },
  pregnant: { type: String },
  password: String,
  createdAt: { type: Date, default: Date.now },
});

// Password hash middleware.

UserSchema.pre("save", function save(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

// Helper method for validating user's password.

UserSchema.methods.comparePassword = function comparePassword(
  candidatePassword,
  cb
) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

module.exports = mongoose.model("User", UserSchema);
