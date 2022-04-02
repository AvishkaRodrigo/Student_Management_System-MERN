import React,{useState} from "react";
import axios from "axios";

function AddStudent() {


    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    
    function submitData(e) {
        e.preventDefault();
        
        const newStudent = {
            name,
            age,
            gender
        }
        
        console.log(newStudent);
        
        axios.post("http://localhost:5000/student/add", newStudent).then(()=> {
            alert("Added Student Data!");
        }).catch((err)=> {
            alert(err);
            alert("Cannot Add Student Data!");
        })

    }

    return(
        <div className="container-sm">
            <form onSubmit={submitData}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Student Name</label>
                    <input type="text" className="form-control" id="name" 
                        onChange = { (e) => { setName(e.target.value); } }
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="number" className="form-control" id="age"
                        onChange = { (e) => { setAge(e.target.value); } }
                    />
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male"
                        onChange = { (e) => { setGender(e.target.value); } }
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female"
                        onChange = { (e) => { setGender(e.target.value); } }
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                </div>

                <br/>
                <br/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}


export default AddStudent;