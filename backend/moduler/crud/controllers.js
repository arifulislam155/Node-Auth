const User = require("./models");


// Create a new user
const createUser = async (req, res) => {
   try {
      const user = new User(req.body);
      console.log(user)
      await user.save();
      res.status(201).json(user);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
};

// Retrieve all users
const getUsers = async (req, res) => {
   try {
      const users = await User.find();
      res.status(200).json(users);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

// Retrieve a single user by ID
const getUserById = async (req, res) => {
   try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.status(200).json(user);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

// Update a user by ID
const updateUser = async (req, res) => {
   try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.status(200).json(user);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
   try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.status(200).json({ message: 'User deleted successfully' });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};


const userController = {createUser, getUsers, getUserById, updateUser, deleteUser};

module.exports = userController;