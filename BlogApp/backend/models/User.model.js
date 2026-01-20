//! schema (structure) ==> mongoose (ODM = Object Data Modelling)
//? it helps to add structure and validation to the MongoDB collections. (middleware, plugin, validations, etc..)

//? ODM: Object Data Modelling --> it maps js objects to the MongoDB documents

//! steps to create collection using mongoose:

//~ 1) import mongoose
//~ 2) create structure using the instance of Schema class
//~ 3) create a model/collection using model() method
//~ 4) export the model/collection

import bcryptjs from "bcryptjs";
import mongoose from "mongoose";

let userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    isMarried: {
      type: Boolean,
    },
    totalBlogs: {
      type: Number,
      default: 0,
    },
    blogs: [
      {
        blogId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Blog",
        },
        _id: false,
      },
    ],
  },
  {
    versionKey: false, //! to remove __v field
    timestamps: true, // it adds createdAt and updatedAt fields
  },
);

//! password hashing --> pre hook (default) before creating any new resource, run this pre hook middleware which is provided by mongoose
userSchema.pre("save", async function () {
  let salt = await bcryptjs.genSalt(10);
  let hashedPassword = await bcryptjs.hash(this.password, salt);
  this.password = hashedPassword;
}); //! save() will internally call this pre-hook

// userSchema.methods.methodName = function(){}

userSchema.methods.comparePassword = async function (enteredPassword) {
  return bcryptjs.compare(enteredPassword, this.password);
};

let UserModel = mongoose.model("User", userSchema);
//? model("collectionName", "schema") takes two argument, collection-name and schema, it will convert the schema into mongodb collection
//~ the collection name will be (lowercase + plural) -> users

export default UserModel;

//! all the validations are happening at database level

let user = {
  name: "",
  email: "",
  password: "",
  age: 0,
  isMarried: false,
  totalBlogs: 2,
  blogs: [{ blogId: "ref" }, { blogId: "ref2" }],
};
