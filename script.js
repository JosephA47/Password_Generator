var generate = document.getElementById("generate");
var copy = document.getElementById("copy");
var password = document.getElementById("password");

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

generate.addEventListener("click", function(event) {
    event.preventDefault(); 

    randomNumber();
})

copy.addEventListener("click", function(event) {
    event.preventDefault();

    copyPassword();

    copy.textContent = "Copied";
})