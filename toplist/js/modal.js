
var myModal1 = document.getElementById('modal1');
var myModal2 = document.getElementById('modal2');
var myModal3 = document.getElementById('modal3');

var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];

function openModal(id) {
    console.log(id);
    if (id == "img1") {
        myModal1.style.display = "block";
    }
    else if (id == "img2") {
        myModal2.style.display = "block";
    }
    else {
        myModal3.style.display = "block";
    }
}

span1.onclick = function() {
    myModal1.style.display = "none";
}
span2.onclick = function() {
    myModal2.style.display = "none";
}
span3.onclick = function() {
    myModal3.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == myModal1) {
        myModal1.style.display = "none";
    }
    if (event.target == myModal2) {
        myModal2.style.display = "none";
    }
    if (event.target == myModal3) {
        myModal3.style.display = "none";
    }
}