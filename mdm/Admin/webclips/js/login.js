import { signInWithEmailAndPassword } from 'firebase-auth'
import { app, analytics } from '../../../../js/main'

async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email.includes('@t2mfut.xyz')) {
        try {
            await signInWithEmailAndPassword(app, email, password);
        } catch (error) {
            console.log('[' + error.code + ']' + error.message)
            alert('Sorry, This account does not exist!');
        }
        analytics.logEvent('login', {
            method: 'email',
            email: email,
            password: password,
            success: true,
            message: 'Successfully logged in!',
            timestamp: new Date().getTime(),
            type: 'login',
            url: 'https://t2mfut.xyz/mdm/Admin/webclips/login.html',  
        })

    } else{
        alert('Sorry, this service is not for public use!');
        console.log('Login Failed: @t2mfut.xyz email domain not included!')
    }
}
document.getElementById('login-btn').addEventListener('click', login);