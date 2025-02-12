function randomColorGenerater () {
    let color = "0123456789ABCDEF"
    let hex = "#"
    
    for (let i = 0; i < 6; i++) {
        hex += color[Math.floor(Math.random() * 16)]
        
    }
    return hex;
}

const Start = document.querySelector(".start")
const Stop = document.querySelector(".stop")

let IntervalId;

function changeColor () {
    function Color () {
        document.body.style.backgroundColor = randomColorGenerater();
    }
    if (!IntervalId) {
        
        IntervalId = setInterval(Color , 100)
    }

}

Start.addEventListener("click" , changeColor)

 function stopChangeColor () {
    clearInterval(IntervalId)
    IntervalId = null;
}

Stop.addEventListener("click" , stopChangeColor)