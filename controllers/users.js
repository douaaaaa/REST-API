import { v4 as uuidv4 } from "uuid";

let users = [
  {
    id: uuidv4(),
    name: "Jane Doe",
    age: 21,
  },
];

// @desc: get all users or limited number of users
// @route: GET /users?key=value
export function getUsers(req, res) {
  // @desc: get limited number of users
  // @route : /users?limit=2
  const limit = parseInt(req.query.limit);
  if (limit && limit !== 0) {
    return res.send(users.slice(0, limit));
  }
  // @desc: get all users
  // @route: /users
  res.send(users);
}

// @desc: get a user by id
// @route: GET /users/:id
export function getUser(req, res) {
  res.send(users.find((user) => user.id === req.params.id));
}

// @desc: create a new user
// @route: POST /users
export function createUser(req, res) {
  users.push({ id: uuidv4(), ...req.body });
  res.send(users);
}

// @desc: delete user
// @route: DELETE /users/:id
export function deleteUser(req, res) {
  users = users.filter((user) => user.id !== req.params.id);
  res.send(users);
}

// @desc: update user's data (partial update)
// @route: PATCH /users/:id
export function updateUser(req, res) {
  const { name, age } = req.body;
  const user = users.find((user) => user.id === req.params.id);
  if (name) {
    user.name = name;
  }
  if (age) {
    user.age = age;
  }
  users = users.map((e) => (e.id === req.params.id ? user : e));
  res.send(users);
}
