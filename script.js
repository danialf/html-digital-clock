// set time content
const setTime = (target) => {
     let date = new Date();

     let h = date.getHours();
     let m = date.getMinutes();
     let s = date.getSeconds();

     h = (h < 10) ? ('0' + h) : h;
     m = (m < 10) ? ('0' + m) : m;
     s = (s < 10) ? ('0' + s) : s;

     target.innerText = `${h} : ${m} : ${s} ${h >= 12 ? 'PM' : 'AM'}`;
}

let time = document.getElementById("timer");

// initialize first call to prevent flinching on screen
setTime(time);

// interval to update time content
setInterval(() => {
     setTime(time);
}, 1000);
