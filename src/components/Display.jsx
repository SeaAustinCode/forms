import React from 'react'

const Display = (props) => {
    // console.log(props)
  return (
    <div>
        <li>{props.username}</li>
        <li>{props.email}</li>
        <li>{props.password}</li>
        <li>{props.confirmpassword}</li>
    </div>
  )
}

export default Display


// Display is passed into UserForm.jsx 
// UserForm.jsx is passed into App.js which allows us to dynamically display all of the data
// we exported Display from this page and then imported it into Userform
// const UserForm = (props) => {
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

// these were then made available to display through props here 
// <Display username = {username} email = {email} password = {password} />

// then passed through props on line 3 and then called on lines 7-9