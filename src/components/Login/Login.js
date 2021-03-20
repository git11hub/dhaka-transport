import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import './Login.css';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    //new line
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });
    //new line


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email };
                setLoggedInUser(signedInUser);
                history.replace(from);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    // Github Sign In

    const handleGitHubSignIn = () => {        
        var githubProvider = new firebase.auth.GithubAuthProvider();
        firebase
            .auth()
            .signInWithPopup(githubProvider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                var token = credential.accessToken;

                // The signed-in user info.
                var user = result.user;
                console.log(user);
                setLoggedInUser(user);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }


    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log('form submitted', data);

        //new line
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                setUser(user);
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
        // data.preventDefault();
        //new line

    }

    console.log(watch("example")); // watch input value by passing the name of it
    return (

        < form className="login-form" onSubmit={handleSubmit(onSubmit)} >

            < input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
            { errors.email && <span className="error">Email is required</span>}

            < input type="password" name="password" ref={register({ required: true })} placeholder="Password" />
            { errors.password && <span className="error">Password is required</span>}

            <input type="submit" value="Submit" />

            <br />
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            <br/>
            <br/>
            <button onClick={handleGitHubSignIn}>Git Hub Sign In</button>
        </form >



        // <div>
        //     <h1>This login page...</h1>
        //     <button onClick={handleGoogleSignIn}>Google Signin</button>
        // </div>
    );
};

export default Login;