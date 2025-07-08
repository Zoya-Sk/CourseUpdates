const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

// Before saving a user -> Hash the password.
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();  // Only hash if password is changed.
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

// Add method to validate password.
userSchema.methods.checkPassword = function(inputPassword){
    return bcrypt.compare(inputPassword, this.password);
};

module.exports = mongoose.model("user", userSchema);