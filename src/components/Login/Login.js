import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import './Login.css';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
    }

    console.log(watch("example")); // watch input value by passing the name of it
    return (

        < form className="login-form" onSubmit={handleSubmit(onSubmit)} >
            {/* < input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
            { errors.name && <span className="error">Name is required</span>} */}

            < input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
            { errors.email && <span className="error">Email is required</span>}

            < input type="password" name="password" ref={register({ required: true })} placeholder="Password" />
            { errors.password && <span className="error">Password is required</span>}

            {/* < input name="phone" ref={register({ required: true })} placeholder="Your Phone no." />
            { errors.phone && <span className="error">Phone number is required</span>} */}

            <input type="submit" />
            <br/>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
        </form >



        // <div>
        //     <h1>This login page...</h1>
        //     <button onClick={handleGoogleSignIn}>Google Signin</button>
        // </div>
    );
};

export default Login;