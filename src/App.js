import React from 'react';
import firebase from "./firebase"
const App = () => {
    const handleClick = () => {
        let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container')

        let number = "+917977318133";
        firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e) {
            let code = prompt("enter otp")
            if(code == null) return;
            e.confirm(code).then(function(result){
                console.log(result.user,'user');
                document.querySelector("label").textContent = result.user.phoneNumber + "Number Verified"
            }).catch((error) => {
                console.log(error);
            })
        })
    }
    return (
        <div >
        <div id="recaptcha-container"></div>
        <label></label>
            <button onClick={handleClick}>
                click here
            </button>
        </div>
    );
};

export default App;