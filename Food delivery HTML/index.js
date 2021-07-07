//- script1
window.onload = function() {
document.addEventListener("contextmenu", function(e){
e.preventDefault();
}, false);
document.addEventListener("keydown", function(e) {
// "J" key
if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
alert('not allowed');
disabledEvent(e);
}
// "F12" key
if (event.keyCode == 123) {
alert('Too smart!\nBut you are not allowed for this action');
disabledEvent(e);
}
}, false);
function disabledEvent(e){
if (e.stopPropagation){
e.stopPropagation();
} else if (window.event){
window.event.cancelBubble = true;
}
e.preventDefault();
return false;
}
};

//- script2
document.onkeydown = function(e) 
{
if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 73 || e.keyCode === 85 || e.keyCode === 117)) 
{
alert('Too smart!\nBut you are not allowed for this action');
return false;
} 
else 
{
return true;
}
};

//- script3
function myFunction() {
var element = document.body;
element.classList.toggle("dark-mode");
}
