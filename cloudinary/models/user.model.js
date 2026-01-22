import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.pre("save", async function () {
    let salt = await bcryptjs.genSalt(10);
    let hashedPassword = await bcryptjs.hash(this.password, salt);
    this.password = hashedPassword;
});


userSchema.methods.comparePassword = async function (enteredPassword) {
  return bcryptjs.compare(enteredPassword, this.password);
};

const UserModel = mongoose.model("Users", userSchema);

export default UserModel;