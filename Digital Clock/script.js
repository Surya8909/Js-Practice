const time = document.querySelector(".time");

setInterval(() => {
    const d = new Date();
    let h = d.getHours() % 12 || 12; 
    let m = d.getMinutes();
    let s = d.getSeconds();


    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    time.innerHTML = `${h}:${m}:${s}`;
}, 1000);