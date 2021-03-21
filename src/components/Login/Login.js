import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import './Login.css';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });

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
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {

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
                var credential = result.credential;

                var token = credential.accessToken;

                var user = result.user;
                setLoggedInUser(user);
                history.replace(from);
            }).catch((error) => {
                console.log(error);
            });
    }


    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                console.log(res);
                setLoggedInUser(res.user);
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error);
            });

        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                var user = userCredential.user;
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error);
            });


    };

    return (
        <>
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
            <label htmlFor="newUser">New User Register</label>
            < form className="login-form" onSubmit={handleSubmit(onSubmit)} >
                <h3>Login Form</h3>
                {newUser && <input type="text" name="name" ref={register} placeholder="name" />}

                <input type="email" name="email" ref={register} placeholder="email" />
                {errors.email && <span className="error">Email is required</span>}

                <input type="password" name="password" ref={register} placeholder="password" />
                {errors.password && <span className="error">Password is required</span>}

                {newUser ? <input type="submit" value="Register" /> :
                    <input type="submit" value="Login" />}

                <br />
            </form >

            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            <br />
            <br />
            <button onClick={handleGitHubSignIn}>Git Hub Sign In</button>

        </>
    );
};

export default Login;