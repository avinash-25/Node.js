import userModel from "../models/user.model.js";

//^ Register user
export const register = async (req,res) => {
    const { name, age, email, isMarried, password } = req.body;
    const newUser = await userModel.create({ name, age, email, isMarried, password }); // create method returns the data whatever we inserted.

    res.status(201).json({
        success: true,
        message: "User registered Successfully",
        data: newUser
    })
};

export const getuser = async () => { };
export const getusers = async () => { };

export const updateUser = async () => { };
export const deleteUser = async () => { };