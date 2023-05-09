const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "usersBaseDatos.json");

module.exports = {

  findAll() {
    const usersFileContent = fs.readFileSync(usersFilePath, "utf-8");
    const users = JSON.parse(usersFileContent);
    return users;
  },

  readFile() {
    let fileContents = fs.readFileSync(usersFilePath, "utf8");

    if (fileContents) {
        return JSON.parse(fileContents);
    }

    return [];
  },

  writeFile(contents) {
    let fileContents = JSON.stringify(contents, null, " ");
    fs.writeFileSync(usersFilePath, fileContents);
  },

  saveUser(user) {
    const users = this.findAll();
    users.push(user);
    const usersFileContent = JSON.stringify(users, null, 4);
    fs.writeFileSync(usersFilePath, usersFileContent, "utf-8");
  },

  findById(id) {
    let users = this.findAll()
    let userFound = users.find((user) => user.id === id);
    return userFound
  },

  findByField(field, text) {
    let users = this.findAll()
    let userFound = users.find((user) => user[field] === text);
    return userFound;
  },
  
  /* create(userData){
    let allUsers = module.exports.findAll()
    allUsers.push[userData]
    fs.writeFileSync(usersFilePath, JSON.stringify(allUsers, null, ' '))
    return true;
  }, */

  updateUser(user) {
    const users = this.getUsers();
    for (let x = 1; x < users.length; x++) {
      if (users[x].id == user.id) {
        users[x].firstName = user.firstName;
        users[x].lastName = user.lastName;
        users[x].email = user.email;
        users[x].password = user.password;
        users[x].image = user.image;
      }
    }
    const usersFileContent = JSON.stringify(users, null, 4);
    fs.writeFileSync(usersFilePath, usersFileContent, "utf-8");

    /* let users = this.readFile();
    let updatedUsers = users.map((oneUser) => {
        if (oneUser.id == user.id) {
            return user;
        }

        return oneUser;
    });

    this.writeFile(updatedUsers);

    return user.id; */
},
  deleteUser(id) {
      let users = this.findAll();
      let updatedUsers = users.filter((oneUser) => oneUser.id != id);
      fs.writeFileSync(usersFilePath, JSON.stringify(updatedUsers, null, ' '))
  },
};

// console.log(module.exports.create({firstName:'jorge'}))