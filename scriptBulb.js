function bulbOn(){
    document.getElementById("bulb").src='bulbOn.jpeg';
}
function bulbOff(){
    document.getElementById("bulb").src='bulbOff.jpeg';
    document.getElementById("top").innerHTML="If you get an idea turn the bulb on!!";
    document.getElementById("top").style.color='black';
    document.getElementById("top").style.fontSize='15px';
    document.getElementById("seen").style.display='block';

}
function changeCSS(){
    document.getElementById("top").style.fontSize='30px';
    document.getElementById("top").innerHTML="You got an idea Buddy!!";
    document.getElementById("top").style.color='blue';
}
function hideSeen(){
    document.getElementById("seen").style.display='none';
}