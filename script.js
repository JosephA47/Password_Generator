var generate = document.getElementById("generate");
var copy = document.getElementById("copy");
var password = document.getElementById("password");
var clear = document.getElementById("clear");

var str = "abcdefghijklmnopqrstuvwxyz!#$%&*+-:;<=>?@[]^_{|}~0123456789";
var newpassword = '';
var plength =  Math.floor(Math.random() * 128+8);

function randomNumber() {
    for (var i = 0; i < plength; i++){
        var random = Math.floor(Math.random() * str.length);
        newpassword += str.substring(random, random+1);
        
    }
    password.textContent = "Password: " + newpassword;
    console.log(newpassword);  
}

function copyPassword() {
    password.select();

    document.execCommand("copy");
    console.log(password.value);
}

function clearPassword() {
    password.textContent = "";
    
}

generate.addEventListener("click", function(event) {
    event.preventDefault(); 

    randomNumber();
})

clear.addEventListener("click", function (event) {
    event.preventDefault();

    clearPassword();
})

copy.addEventListener("click", function(event) {
    event.preventDefault();

    copyPassword();

    copy.textContent = "Copied";
})