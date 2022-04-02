import React,{useState} from "react";

function DeleteStudent() {

    return(
        <div className="container-sm bg-color-danger">
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Delete Student Name</label>
                    <input type="text" className="form-control" id="name"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="text" className="form-control" id="age"/>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male"/>
                    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female"/>
                    <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                </div>

                <br/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}


export default DeleteStudent;