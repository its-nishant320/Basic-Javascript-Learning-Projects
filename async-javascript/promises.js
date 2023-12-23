const promiseOne = new Promise(function(resolve,reject) {
    setTimeout(function(){
        console.log("Async fun is called")
        resolve();
    },1000);
})

promiseOne.then(function() {
    console.log("async resolved");
})



new Promise(function(resolve,reject) {
    setTimeout(function(){
        console.log("async task2 is called");
        resolve();
    })
}).then(function() {
    console.log("async2 resolved");
})

const promiseTwo = new Promise(function(resolve,reject) {
    setTimeout(function(){
        resolve({username:"Nishant", rollno:"AP22XXXXX944"})
    },1000)
})


promiseTwo.then(function(user) {
    console.log(user);
})

const promiseThree = new Promise(function(resolve,reject) {
    let error = false;
    if(!error) {
        resolve({username:"Nishant",rollno:"AP22XXXXXX944"});
    }
    else {
        reject("Something went wrong");
    }
})

promiseThree.then(function(user) {
    console.log("User details: ", user);
    return user.rollno;
})
.then(function(username){
    console.log("Roll no : ", username);
})
.catch(function(err) {
    console.log(err);
})
.finally(function() {
    console.log("Promise execution completed");
})

const PromiseFour = new Promise(function(resolve,reject) {
    setTimeout(function() {
        let error = false;
        if(!error) {
            resolve({username: "Nishant", rollno: "AP2211XXXX944"});
        }
        else {
            reject("Error: Something went wrong");
        }
    },1000)
});

