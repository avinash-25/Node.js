import { arr } from "../config/db.js";


//* get single user
export const getSignleUser = (req, res) => {
    const id = Number(req.params.id);

    const user = arr.find((user) => id === user.id);
    console.log(id);

    res.status(200).json({
        success: true,
        message: "user fetched successfully",
        data: user
    })
}

//* Get all user
export const getAllUser = (req, res) => {
    res.send(arr);
}

//* Register User

export const registerUser = (req, res) => {
    const user = req.body;

    arr.push(user);
    res.status(201).json({
        success: true,
        message: "Registered successfully"
    })
}

//* delete single user
export const deleteUser = (req, res) => {
  let userId = parseInt(req.params.id);

  let idx = arr.findIndex((user) => user.id === userId);

  if (idx !== -1) {
    arr.splice(idx, 1);

    return res.status(200).json({
      success: true,
      message: "user deleted",
      data: arr,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "No user found",
    });
  }
}

//* Update user details
export const updateUser =  (req, res) => {
  const id = parseInt(req.params.id);

  const user = arr.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  const { name, age } = req.body;

  if (name !== undefined) {
    user.name = name;
  }

  if (age !== undefined) {
    user.age = age;
  }

  res.json({
    success: true,
    message: "User updated successfully",
    data: user
  });
}


//? using puth if we apdete one thing only then rest of the details willl washed out it means previous details will be deleted and new details will be added
//? So we use patch for partial update