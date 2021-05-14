var namePrompt = prompt("What is your full name?");
var originPrompt = prompt("Where are you from?");
var majorPrompt = prompt("What is your major?");

var nameGreeting = "Hello, my name is "+namePrompt;
var originGreeting = "I am from "+originPrompt;
var majorGreeting = "My major is "+majorPrompt;



document.querySelector(".display_line1").innerHTML = nameGreeting
document.querySelector(".display_line2").innerHTML = originGreeting
document.querySelector(".display_line3").innerHTML = majorGreeting