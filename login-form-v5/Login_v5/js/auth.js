
import { getAuth , createUserWithEmailAndPassword,connectAuthEmulator} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';
const myForm = document.getElementById('myForm')
const auth = getAuth()
myForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    const email = myForm['email'].value
    const pass = myForm['pass'].value
    console.log(email,pass)
    console.log(auth)
    createUserWithEmailAndPassword(auth,email,pass).then(cred => {
        console.log(cred)
    })
})