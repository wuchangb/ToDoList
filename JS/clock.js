const clock = document.querySelector("h2#clock");

function intervalHello() {
    console.log("hello");
}

function clockApp(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hour}:${minute}:${second}`;
}

clockApp();
setInterval(clockApp, 1000);