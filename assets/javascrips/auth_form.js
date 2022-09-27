
const modal = document.querySelector('.modal');


// Show-Hiden ModalContainer Signup
const signUp = document.querySelector('.js-signup');
const modalContainerSignUp = document.querySelector('.modal__container--signup');
const hidenBtnSignUp = document.querySelector('.js-hiden-modal-signup')
     
     
// Show modal signup
function showModalSignUp (){
    modal.classList.add('active');
    modalContainerSignUp.classList.add('active');
}
    
signUp.addEventListener('click', showModalSignUp )
    

// Hiden modal signup
function hidenModalSignUp (){
    modal.classList.remove('active');
    modalContainerSignUp.classList.remove('active');
}

hidenBtnSignUp.addEventListener('click', hidenModalSignUp)


modal.addEventListener('click', hidenModalSignUp)
modalContainerSignUp.addEventListener('click', (event)=>{
    event.stopPropagation()
})


// Show-Hiden ModalContainer Login
const logIn = document.querySelector('.js-login');
const modalContainerLogIn = document.querySelector('.modal__container--login');
const hidenBtnLogIn = document.querySelector('.js-hiden-modal-login')
            
// Show modal login
function showModalLogIn (){
    modal.classList.add('active');
    modalContainerLogIn.classList.add('active');
}
       
logIn.addEventListener('click', showModalLogIn )
       
// Hiden modal login
function hidenModalLogIn (){
    modal.classList.remove('active');
    modalContainerLogIn.classList.remove('active');
}
   
hidenBtnLogIn.addEventListener('click', hidenModalLogIn)
   
modal.addEventListener('click', hidenModalLogIn)
modalContainerLogIn.addEventListener('click', (event)=>{
    event.stopPropagation()
})

// Switch modal login/ signup
const switchModals= document.querySelectorAll('.auth-form__switch-btn')

function switchModalAuth (){
    modalContainerSignUp.classList.toggle('active');
    modalContainerLogIn.classList.toggle('active');

}
for (const switchModal of switchModals) {
    switchModal.addEventListener('click', switchModalAuth )
}
