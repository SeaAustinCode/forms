import React, { useState } from 'react';
import Display from './Display';

const UserForm = (props) => {
    const [firstname, setFirstName] = useState(""); 
    const [lastname, setLastName] = useState("");
    const [nameerror, setNameError] = useState("");
    const [lastnameerror, setLastNameError] = useState(""); 
    const [email, setEmail] = useState("");
    const [emailerror, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passworderror, setPasswordError] = useState("");
    const [confirmpassword, setConfirmPassword] = useState(""); 
    const [confirmpassworderror, setConfirmPasswordError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password };
        console.log("Welcome", newUser);
    };

    const validFirstName = (e) => {
        setFirstName(e.target.value) // this is taking in the value from the form in the first name field and actively sets it as the variable first name 
        if (e.target.value.length <= 1) {
            setNameError("Minimum of 2 characters required for name.");
        } else {
            setNameError (false); // does this do anything? ? // setEmailError ("")
        }
    }

    const validLastName = (e) => {
        setLastName(e.target.value)
        if (e.target.value.length <= 1) {
            setLastNameError("Minimum of 2 characters required for name.");
        } else {
            setLastNameError (false); // setLastNameError ("")
        }
    }

    const validEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length <= 5) {
            setEmailError("Email must be at least 5 characters."); 
        } else {
            setEmailError (false); // setEmailError ("")
        }
    }

    const validPassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length <= 8) {
            setPasswordError("Password must be at least 8 characters in length.")
        } else {
            setPasswordError (false);
        }
    }

    const validConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        if (e.target.value !== password) {
            setConfirmPasswordError("Passwords must match")
        } else { 
            setConfirmPasswordError (false); 
        }
    }



    return (
        <div>
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={validFirstName} value= {firstname} />
                { nameerror ? <p style={{color:'red'}}>{ nameerror }</p> : ""}
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={validLastName} value= {lastname} />
                { lastnameerror ? <p style={{color:'red'}}>{ lastnameerror }</p> : ""}
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={validEmail} value= {email} />
                { emailerror ? <p style={{color:'red'}}>{ emailerror }</p> : ""}
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={validPassword} value= {password} />
                { passworderror ? <p style={{color:'red'}}>{ passworderror }</p> : ""}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={validConfirmPassword} value= {confirmpassword} />
                { confirmpassworderror ? <p style={{color:'red'}}>{ confirmpassworderror }</p> : ""}
            </div>
            <input type="submit" value="Create User" />
        </form>
        <Display firstname = {firstname} lastname = {lastname} email = {email} password = {password} confirmpassword = {confirmpassword} />
        </div>
    );
};

export default UserForm;
