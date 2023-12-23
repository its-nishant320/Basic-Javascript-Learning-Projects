let a = document.querySelector('#start');

a.addEventListener('click', function(e) {
var changeme = setInterval(function() {
        document.querySelector('h1').innerHTML="Hello Everyone";

    },2000);
})

let b = document.querySelector('#stop');
b.addEventListener('click',function(e) {
    clearInterval(changeme);
})