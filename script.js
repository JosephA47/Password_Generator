var generate = document.getElementById("generate");
var copy = document.getElementById("copy");
var password = document.getElementById("password");

var str = ["abcdefghijklmnopqrstuvwxyz!#$%&*+-:;<=>?@[]^_{|}~0123456789"];
var newpassword = '';
var plength =  Math.floor(Math.random() * (8-128)+8);

function randomNumber() {
    for (var i = 0; i < plength; i++){
        var random = Math.floor(Math.random() * str.length);
        newpassword += str.substring(random);
        
    }
    password.textContent = "Password: " + newpassword;
    //console.log(newpassword);
}

generate.addEventListener("click", function(event) {
    event.preventDefault();
    
    randomNumber();
})
