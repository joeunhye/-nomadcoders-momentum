const loginFrom = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

function onLoginSubmit(e) {
    e.preventDefault();
    let userName = loginInput.value;
    localStorage.setItem('user', userName);
    loginFrom.classList.add('hidden');
    greeting.classList.add('on');
    paintGreetings(userName);
}
function paintGreetings(user) {
    greeting.innerText = `Hello ${user} :)`;
}

const saveInfo = localStorage.getItem('user');
if(saveInfo === null) { 
    loginFrom.classList.remove('hidden');
    greeting.classList.remove('on');
    loginFrom.addEventListener('submit', onLoginSubmit);
}else {
    loginFrom.classList.add('hidden');
    greeting.classList.add('on');
    paintGreetings(saveInfo);
}

