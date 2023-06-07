AOS.init();

var inp=document.getElementById("inp");
var eye=document.querySelector("#eye");

var bar=document.querySelector("#menu-btn");
var lis=document.querySelector(".navbar");

bar.onclick=()=>{
    lis.classList.toggle("active");
    bar.classList.toggle("fa-times");
}

var user=document.querySelector("#login-btn");
var log=document.querySelector(".login-form");
var loginnow=document.querySelector("#login-now");

user.onclick=()=>{
    log.classList.toggle("active");
    user.classList.toggle("fa-times");
    if(user.classList.contains("fa-times")){
        reg.classList.remove("active");
    }
}

var usernew=document.querySelector("#new-user");
var reg=document.querySelector(".register-form");

usernew.onclick=()=>{
    log.classList.remove("active");
    reg.classList.toggle("active");
}

loginnow.onclick=()=>{
    reg.classList.remove("active");
    log.classList.toggle("active");
}

var infbtn=document.querySelector("#info-btn");
var clos=document.querySelector("#close-btn");
var info=document.querySelector(".contact-info");

infbtn.onclick=()=>{
    info.classList.toggle("active");
}
clos.onclick=()=>{
    info.classList.remove("active");
}

var searchForm=document.querySelector("#search-form");
var searchIcon=document.querySelector("#search-btn");

searchIcon.onclick=()=>{
    searchForm.classList.toggle("active");
}


eye.addEventListener("click",()=>{
    if(eye.classList.contains("fa-eye")){
        inp.setAttribute("type","text");
        eye.classList.remove("fa-eye");
        eye.classList.toggle("fa-eye-slash");
    }else if(eye.classList.contains("fa-eye-slash")){
        inp.setAttribute("type","password");
        eye.classList.remove("fa-eye-slash");
        eye.classList.toggle("fa-eye");
    }
})


const allIndicator = document.querySelectorAll('.indicator li');
const allContent = document.querySelectorAll('.tabs .content li');

allIndicator.forEach(item=> {
    item.addEventListener('click', function () {
        const content = document.querySelector(this.dataset.target);

        allIndicator.forEach(i=> {
            i.classList.remove('active');
        })

        allContent.forEach(i=> {
            i.classList.remove('active');
        })

        content.classList.add('active');
        this.classList.add('active');
    })
})

var up=document.querySelector(".scroll-up");

up.addEventListener("click",()=>{
    window.scroll(0,0);
})

window.addEventListener("scroll",()=>{
    if(window.scrollY>350){
        up.classList.add("active");
    }else{
        up.classList.remove("active");
    }
})

const accordion=document.querySelectorAll(".navbar a");
accordion.forEach(acco=>{
    acco.onclick=()=>{
        accordion.forEach(dion=>dion.classList.remove("active"));
        acco.classList.toggle("active");
    }
})

window.onscroll=()=>{
    bar.classList.remove("fa-times");
    lis.classList.remove("active");

    var maxHeight=window.document.body.scrollHeight - window.innerHeight;
    var percentage=((window.scrollY)/maxHeight) * 100;
    document.querySelector(".scroll-indicator").style.width=percentage + '%';
}

let slides=document.querySelectorAll(".slide-container");
let index=0;

function next(){
    slides[index].classList.remove('active');
    index=(index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prev(){
    slides[index].classList.remove('active');
    index=(index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

window.addEventListener("load",()=>{
    setTimeout(() => {
        document.querySelector(".loader").classList.add("loader-hidden");
    }, 1800);
})



