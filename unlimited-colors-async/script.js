
const randomColor = function() {
    let color = "#";
    let hex = "0123456789ABCDEF";
    for(let i=0; i<6; i++) {
        color = color + hex[Math.floor(Math.random()*16)];
    }
return color;
};

let changing = function() {
    document.body.style.backgroundColor = randomColor();
}

let intervalId;
const changecolor = function () {
    if(!intervalId) {
       intervalId = setInterval(changing,1000);
    }
};

const stopchanging = function() {
    clearInterval(intervalId);
    intervalId = null;
}

let a = document.querySelector("#start");
a.addEventListener("click", changecolor);

let b = document.querySelector("#stop");
b.addEventListener("click", stopchanging)

