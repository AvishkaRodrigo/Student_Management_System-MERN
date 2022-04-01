let Student = require("../models/Student");
const router = require('express').Router();

router.route("/add").post((req,res)=>{
    
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender,
    })

    newStudent.save().then(()=>{
        res.json("Student Added!");
    }).catch ((err)=> {
        console.log(err);
    })
})
router.route("/retrive").get((req, res)=>{
    Student.find().then((students)=>{
        res.json(students);
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req, res)=>{
    let userID = req.params.id;
    const {name,age,gender} = req.body;

    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userID,updateStudent).then(()=>{
        res.status(200).send({status : "user updated!" }) // success
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "error while updating data!!", error : err.message}); // server err
    })

})

router.route("/delete/:id").delete(async (req, res) => {
    let userID = req.params.id;
    await Student.findByIdAndDelete(userID).then(()=>{
        res.status(200).send({status : "user deleted!"});
    }).catch((err)=>{
        res.status(500).send({status : "error while deleting user", error : err.message});
    })
})

router.route("/retrive/:id").get(async (req, res) => {
    let userID = req.params.id;
    const user = await Student.findById(userID).then((student)=> {
        res.status(200).send({status : "user fetched", user : student});
    }).catch((err)=>{
        res.status(500).send({status : "error while fetching", error : err.message});
    })

})


module.exports = router;