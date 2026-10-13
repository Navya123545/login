/*const box=document.querySelector('.box');
const register=document.querySelector('.register');
const login=document.querySelector('.login');

register.addEventListener('click',()=>{
    box.classList.add('active');
})
login.addEventListener('click',()=>{
    box.classList.remove('active');*/

    let btnclick=document.querySelector(".register");
    btnclick.addEventListener("click", () => {
        window.location.href="re.html";
    })