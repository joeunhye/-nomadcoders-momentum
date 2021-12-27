const clock = document.querySelector('#clock');
const dateCont = document.querySelector('#date');
const secondsCont = document.querySelector('.time-second');
const periodCont = document.querySelector('.time-period');
const days = ['일', '월', '화', '수', '목', '금', '토'];


function getClock() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dates = date.getDate();
    const dayCont = days[date.getDay()];
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}`;
    dateCont.innerText = `${year}년 ${month}월 ${dates}일 ${dayCont}요일`;
    secondsCont.innerText = `${seconds}`;

    if(hours < 12) {
        periodCont.innerText = 'AM';
    }else {
        periodCont.innerText = 'PM';
    }
    
}

getClock();
setInterval(getClock, 1000);