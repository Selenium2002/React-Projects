import { useState } from "react";

let AddUser = () => {
    const [user, setUser] = useState({
        name: "ismail",
        email: "ismail@gmail.com"
    })
    const [errors, setErrors] = useState({
        nameError: null,
        emailError: null
    })

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const handleChange = (evt) => {
        console.log(evt.target);
        if (evt.target.name == "name") {
            setUser({ ...user, name: evt.target.value })

        } else if (evt.target.name == "email") {
            setUser({ ...user, email: evt.target.value })
        }

        if (evt.target.name == "name") {
            setErrors({ ...errors, nameError: evt.target.value.length == 0 ? "This field is required" : (evt.target.value.length > 10) ? "Characters must be less than 10" : null })

        }

        if (evt.target.email == "email") {
            setErrors({ ...errors, emailError: evt.target.value.length == 0 ? "This field is required" : !emailPattern.test(evt.target.value) ? "Invalid email address" : null })
        }

    }
    return (
        <>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">name</label>
                <input type="text" className={`form-control ${(errors.nameError) ? 'border-danger' : ""}`} id="formGroupExampleInput" placeholder="name" value={user.name} name="name" onChange={(e) => { handleChange(e) }} />
            </div>
            <small className="text-danger">{errors.nameError}</small>
            <br /><br />
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">email</label>
                <input type="text" className={`form-control ${(errors.emailError) ? 'border-danger' : ""}`} id="formGroupExampleInput2" placeholder="email address" value={user.email} name="email" onChange={(e) => { handleChange(e) }} />
            </div>
            <small className="text-danger">{errors.emailError}</small>


        </>
    )
}

export default AddUser;