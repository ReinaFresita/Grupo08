const db = require("../../database/models");
let bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')

module.exports = {
    list: async (req, res) => {
      res.render("users/list", { users: await db.User.findAll() });
    },

    showLogin: (req, res) => {
      res.render("users/login");
    },
    
    showRegister: (req, res) => {
      res.render("users/register");
    },

    profile: (req, res) => {
      res.render("users/profile",{
        user:req.session.userLogged
      });
    },

    logout: (req, res) => {
      req.session.destroy()
      return res.redirect('/')
    },
  
    /* registerUsers:(req,res) => {
      const resultValidation = validationResult(req)

      if(resultValidation.errors.length > 0){
        return res.render('users/register',{
          errors:resultValidation.mapped(),
          oldData: req.body
        })
      }

      if (!req.body) return res.status(400).json({ error: "No hay datos" })

      const user = {
        id: Date.now(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,10),
        image: req.file ? "/images/users/" + req.file.filename : "default-image.png",
      }

      let userInDB = users.findByField('email', req.body.email)

      if(userInDB){
        return res.render('users/register',{
          errors: {
            email:{
              msg:'Este email ya está registrado'
            }
          },
          oldData:req.body
        })
      }
      else{
        users.saveUser(user);
        res.redirect("/users/login");
      }
    }, */

    create: async (req, res) => {

      const resultValidation = validationResult(req)

      if(resultValidation.errors.length > 0){
        return res.render('users/register',{
          errors:resultValidation.mapped(),
          oldData: req.body
        })
      }

      if (!req.body) return res.status(400).json({ error: "No hay datos" })

      db.User.create({
          firstName:req.body.firstName,
          lastName:req.body.lastName,
          email:req.body.email,
          password:bcrypt.hashSync(req.body.password,10),
          image:req.file ? "/images/users/" + req.file.filename : "default-image.png",
      })

      let userInDB = await db.User.findOne({
        where: { email: req.body.email },
      });

      if(userInDB){
        return res.render('users/register',{
          errors: {
            email:{
              msg:'Este email ya está registrado'
            }
          },
          oldData:req.body
        })
      }
      else{
        res.redirect("/users/login");
      }
  },

  loginUsers: async (req, res) => {
    let userToLogin = await db.User.findOne({
      where: { email: req.body.email },
    });

    if(userToLogin){
      let esCorrectoPassword = bcrypt.compareSync(req.body.password, userToLogin.password)
      if(esCorrectoPassword){
        delete userToLogin.password
        req.session.userLogged = userToLogin
        return res.redirect('/')
      }
      return res.render('users/login',{
        errors:{
          email:{
            msg:'El email y/o contraseña son erróneas'
          }
        }
      })
    }

    return res.render('users/login',{
      errors:{
        email:{
          msg:'El email ingresado no está registrado'
        }
      }
    })
  },

  delete: async (req, res) => {
    await db.User.destroy({ where: { id: req.params.id } });
    
    req.session.destroy()

    res.redirect("/users/login");
  },
  
    /* loginUsers: (req, res) => {
      let userToLogin = users.findByField('email', req.body.email)

      if(userToLogin){
        let esCorrectoPassword = bcrypt.compareSync(req.body.password, userToLogin.password)
        if(esCorrectoPassword){
          delete userToLogin.password
          req.session.userLogged = userToLogin
          return res.redirect('/')
        }
        return res.render('users/login',{
          errors:{
            email:{
              msg:'El email y/o contraseña son erróneas'
            }
          }
        })
      }

      return res.render('users/login',{
        errors:{
          email:{
            msg:'El email ingresado no está registrado'
          }
        }
      })
    }, */

    carrito:(req, res) => {
      res.render("users/carrito");
    },
  };