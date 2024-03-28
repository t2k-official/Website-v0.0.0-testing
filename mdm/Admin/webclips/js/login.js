import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js'
import { auth } from '../../../../js/main.js';

// Function to handle login
async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email.includes('@t2mfut.xyz')) {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log('[' + error.code + ']' + error.message)
            alert('Sorry, This account does not exist!');
            return
        }
        /*analytics.logEvent('login', {
            method: 'email',
            email: email,
            password: password,
            success: true,
            message: 'Successfully logged in!',
            timestamp: new Date().getTime(),
            type: 'login',
            url: 'https://t2mfut.xyz/mdm/Admin/webclips/login.html',  
        })*/
        window.location.href = "./redirecting.html";
    } else{
        alert('Sorry, this service is not for public use!');
        console.log('Login Failed: @t2mfut.xyz email domain not included!')
        return
    }
}
document.getElementById('login-btn').addEventListener('click', login);
