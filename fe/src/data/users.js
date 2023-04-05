import bcrypt from 'bcrypt';

const users = [
   {
    name: "Admin",
    email : "admin@example.com",
    password: bcrypt.hashSync("password", 10),
    idAdmin: true
   },
   {
    name: "user",
    email : "user@example.com",
    password: bcrypt.hashSync("password", 10),
   },
  ];
  
  export default users;
  