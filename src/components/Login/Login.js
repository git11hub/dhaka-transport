import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import './Login.css';
import { useHistory, useLocation } from 'react-router-dom';

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

    console.log(from);

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = (e) => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email };
                // setUser(signedInUser);
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
                console.log(error);
                console.log(errorMessage);
                // ...
            });
        e.preventDefault();
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
                // console.log(user);
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
                // console.log(errorMessage);
                // ...
            });
    }


    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                console.log(res);
                // var user = userCredential.user;
                // console.log(user);
                setLoggedInUser(res.user);
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error);
            });

        // testing Sign Up area Working

        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                var user = userCredential.user;
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error);
                // ..
            });


    };

    return (
        <>
            < form className="login-form" onSubmit={handleSubmit(onSubmit)} >
                {/* < input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
            { errors.email && <span className="error">Email is required</span>}

            < input type="password" name="password" ref={register({ required: true })} placeholder="Password" />
            { errors.password && <span className="error">Password is required</span>} */}
                {/* <input type="submit" value="Submit" /> */}
                <h3>Login Form</h3>
                <input type="email" name="email" ref={register} placeholder="email" />
                {errors.email && <span className="error">Email is required</span>}

                <input type="password" name="password" ref={register} placeholder="password" />
                {errors.password && <span className="error">Password is required</span>}

                <input type="submit" value="Login" />
                {/* <button type="submit">Login</button> */}

                <br />
            </form >
           
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <h3>Sign Up Form</h3>
                <input type="text" name="name" ref={register} placeholder="name" />
                <input type="email" name="email" ref={register} placeholder="email" />
                <input type="password" name="password" ref={register} placeholder="password" />
                <button type="submit">Submit</button>
            </form>


            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            <br />
            <br />
            <button onClick={handleGitHubSignIn}>Git Hub Sign In</button>

        </>
    );
};

export default Login;