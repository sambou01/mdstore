const containerc = document.getElementById('containerc');
const loginButton = document.getElementById('login');
const signUpButton = document.getElementById('signUp');

signUpButton.addEventListener('click', () =>{
    containerc.classList.add('panel-active');
})
loginButton.addEventListener('click', () =>{
        containerc.classList.remove('panel-active');
})