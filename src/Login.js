import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css'


function Login() {
    
    // ! our stats 
    const [email, setEmail] = useState("") ; 
    const [name, setName] = useState("") ; 
    const [password, setPassword] = useState("") ; 
    const [profilePic, setProfilePic ] = useState("") ; 

    const dispatch = useDispatch()


    // ! register function 
    const  register =  () =>  {
        if (!name) {
            return alert ("plz enter a full name ")
        }
        auth.createUserWithEmailAndPassword (email , password).then ((userAuth) => {
            userAuth.user.updateProfile({
                displayName :name ,
                photoURL :  profilePic,
            }).then(() => {
                dispatch(login ({
                    email : userAuth.user.email,
                    uid : userAuth.user.uid,
                    displayName : name,
                    photoURL : profilePic
                }))
            })
        }).catch((error) => alert(error));
    }; 

    // ! end of registaration function 

     // ! login function 
    const loginToApp = (e) => {
        e.preventDefault () ; 
        auth.signInWithEmailAndPassword(email,password)
        .then (userAuth => {
            dispatch(login({
                email : userAuth.user.email,
                uid : userAuth.user.uid,
                displayName : userAuth.user.displayName,
                profilePic : userAuth.user.photoURL
            }))
        }).catch((error) => alert(error))
    }  
    return (
        <div className = "login">
            <img src = "https://www.pngkey.com/png/detail/14-143268_file-linkedin-logo-svg-linkedin-logo-png-no.png" alt = "" />
             
            <form className = "formInputs">
              <input value = {name} onChange = {e => setName(e.target.value)} placeholder = "Full name (required if registering)" type ="text"></input> 
              <input value = {profilePic} onChange = {e => setProfilePic(e.target.value)} placeholder = "Profile pic URL (optional)" type ="text"></input> 
              <input value = {email} onChange = {e => setEmail(e.target.value)} placeholder = "Email" type ="email"></input>  
              <input value = {password} onChange = {e => setPassword(e.target.value)} placeholder = "Password" type ="password"></input>  
               <button type ="submit" onClick = {loginToApp}>Sign In</button> 
            </form> 
            <p>Not a member ? {"  "}
                <span className = "Login_register" onClick = {register}>Register Now </span>
            </p>
        </div>
    )
}

export default Login
