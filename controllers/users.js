const { v4: uuidv4 } = require("uuid");
let users = [];

const getUsers = (req, res) => {
  res.send(users);
};

const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`user ${req.body.name} data has been added!`);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id !== id);
  res.send(`user  has been deleted`);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const user = users.find(user => user.id === id);
  user.name = req.body.name;
  user.age = req.body.age;
  res.send(`user data has been updated`);
};

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  updateUser
};
