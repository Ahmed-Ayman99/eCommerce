import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: "pass1234",
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@email.com",
    password: "pass1234",
  },
  {
    name: "Jane Doe",
    email: "jane@email.com",
    password: "pass1234",
  },
];

export default users;
