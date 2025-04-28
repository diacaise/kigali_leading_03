const contain = document.getElementById('container');
const ragisterBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
ragisterBtn.addEventListener('click', ()=>{
    container.classList.add("active");
});

loginBtn.addEventListener('click', ()=>{
    container.classList.remove("active");
});
