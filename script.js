/////////////////For side navigation/////////////////////////
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


////////////For sticky header//////////////////
window.onscroll = function() {myFunction()}
var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
} 

//                 Login And Signup             //
function openLog() {
    document.getElementById("mylogin").style.width = "250px";
    document.getElementById("mylogin").style.boxShadow = "1px 1px 8px 8px rgb(219, 7, 7)";
}

function closeLog() {
    document.getElementById("mylogin").style.width = "0";
    document.getElementById("mylogin").style.boxShadow = "none"; 
}