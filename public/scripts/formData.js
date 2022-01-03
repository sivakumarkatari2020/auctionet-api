//Here we take input from signup form & store it in localstorage
let popup = document.getElementById("popupCont");
let formBtn = document.getElementById("inpBtn");
let unameInp = document.getElementById("inpUname");
let currencyInp = document.getElementById("inp-sel");

let btnSignup = document.getElementById("btnSignup");
let userDetails = document.querySelector('.top-bar-inner-user');
let btnLogout = document.getElementById("btnLogout");
let userName = document.getElementById("userName");

if(sessionStorage.uname && sessionStorage.ucurrency){
    let uname = sessionStorage.getItem("uname");
    
    btnSignup.style.display = "none";
    userName.innerText = `Hi ${uname}!`;
    userDetails.style.display = "flex";
}

btnSignup.addEventListener("click",(e)=>{
    e.preventDefault();
    popup.style.display = 'flex';
})

formBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    let uname = unameInp.value;
    let currency = currencyInp.value;

    if(uname.length > 3){
        sessionStorage.setItem("uname",uname);
        sessionStorage.setItem("ucurrency",currency);
        popup.style.display = "none";
        btnSignup.style.display = "none";
        userName.innerText = `Hi ${uname}!`;
        userDetails.style.display = "flex";
    }
})

btnLogout.addEventListener("click",(e)=>{
    e.preventDefault();

    sessionStorage.clear();
    btnSignup.style.display = "flex";
    userDetails.style.display = "none";
})