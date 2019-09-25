var password = document.getElementById("password");
var generate = document.getElementById("generate");
var copy = document.getElementById("copy");

var letter = ["abcdefghijklmnopqrstuvwxyz"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!#$%&*+-:;<=>?@[]^_{|}~"];

generate.addEventListener("click", function(){
    var randomletter = Math.floor(Math.random(letter.length));
    var randomnumber = Math.floor(Math.random(number.length));
    var randomspecial = Math.floor(Math.random(special.length));

    var characters = randomletter + randomnumber + randomspecial;
    
});