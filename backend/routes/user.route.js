let express = require('express');
let fileUpload = require("express-fileupload")
let bodyParser = require('body-parser');
let router = express.Router();
let app = express()

app.use(fileUpload())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//=======User Model=======
let User = require('../models/User');

//======Routes=======

// Create User
router.route('/create-user').post((req, res) => {
    let data = req.body;
  //   let file = req.files;
  //   file.mv("public/images" + file, function(error){
  //     if(error){
  //       console.log(error)
  //     }else{
  //       console.log("File Saved!!")
  //     }
  //   })
  //   const userdata = {
  //     name: req.body.name,
  //     gender: req.body.gender,
  //     email: req.body.email,
  //     mobile: req.body.mobile,
  //     technology:req.body.technology,
  //     category: req.body.category,
  //     filename: req.files.file
  // };
    User.create(data, (error, newUser) => {
      if (error) {
        console.log("User Not Created")
        console.log(error)
      } else {
        console.log(newUser)
        res.json(newUser)
      }
    })
  });

// Get All Users
router.route('/').get((req, res) => {
    User.find({},function(err,allUsers){
        if(err){
            console.log(err);
        }else{
          res.json(allUsers);
        }
    });
  });

// Get A Single User
router.route('/edit-user/:id').get((req, res) => {
  User.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update A User
router.route('/update-user/:id').put((req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Student updated successfully !')
    }
  })
})

// Delete A User
  router.route('/delete-user/:id').delete((req, res) => {
    User.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return error;
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  });

  module.exports = router;