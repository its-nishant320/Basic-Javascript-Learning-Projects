const xhr = new XMLHttpRequest();
let requestUrl = 'https://api.github.com/users/nishant-Tiwari24';
xhr.open('GET',requestUrl);
let readyChange = xhr.onreadystatechange
readyChange = function() {
    if(xhr.readyState === 4) {
        let data = JSON.parse(this.responseText);
        console.log("hey");
        console.log(data.followers);
    }
    xhr.send();
}
