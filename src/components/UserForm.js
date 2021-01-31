import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [conpassword, setConPassword] = useState(""); 
    const [firstNameError, setFNameError] = useState(""); 
    const [lastNameError, setLNameError] = useState(""); 
    const [emailError, setemailError] = useState(""); 
    const [passwordError, setpasswordError] = useState(""); 
    const [conpasswordError, setconpasswordError] = useState(""); 


    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, conpassword};
        console.log("Welcome", newUser);
    };

const handleFirstName = (e) => {
    setFirstname(e.target.value);
    if(e.target.value.length < 2) {
        setFNameError("first Name must be 2 characters or longer!");
    }
    else{
        setFNameError("")
    }
}
const handleLastName = (e) => {
    setLastname(e.target.value);
    if(e.target.value.length < 2) {
        setLNameError("Last Name must be 2 characters or longer!");
    }else{
        setLNameError("")
    }}

    const handemail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setemailError("Email must be 5 characters or longer!");
        }else{
            setemailError("")
        }
}
const handpassword = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 8) {
        setpasswordError("Password must be 8 characters or longer!");
    }else{
        setpasswordError("")
    }
}
const handconpassword = (e) => {
    setConPassword(e.target.value);
    if(e.target.value.length != password.length) {
        setconpasswordError("The passwords must match!");
    }else{
        setconpasswordError("")
    }
}

    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={  handleFirstName } />
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={  handleLastName } />
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label> 
                <input type="text" onChange={  handemail } />
                {
                    setemailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div className= "form-group">
                <label>Password: </label>
                <input type="text" onChange={ handpassword } />
                {
                    setpasswordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ handconpassword } />
                {
                    setconpasswordError ?
                    <p style={{color:'red'}}>{ conpasswordError }</p> :
                    ''
                }
            </div>

            <input type="submit" value="Create User" />

                <p>First Name:{firstname} </p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email} </p>
                <p>Password:{password} </p>
                <p>Confirm Password:{conpassword} </p>

        </form>
    );
};
    
export default UserForm;