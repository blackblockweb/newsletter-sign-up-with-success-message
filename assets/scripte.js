let btn = document.getElementById("btn");
let email = document.getElementById("Email");
let label = document.querySelector(".label1");
let btn2 = document.getElementById("btn2");
let thank = document.querySelector(".thank");
btn.onclick = function () {
    if(email.value ===""){
        email.style.backgroundColor = "#FFE8E6";
        label.classList.add('active');
    }else{
        thank.classList.add("active2");
    }
}

btn2.onclick = function () {
    thank.classList.remove("active2");
}