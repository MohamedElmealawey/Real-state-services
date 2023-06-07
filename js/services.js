var form1=document.getElementById("form1");
var form2=document.getElementById("form2");
var form3=document.getElementById("form3");
var form4=document.getElementById("form4");
var form5=document.getElementById("form5");
var form6=document.getElementById("form6");
var form7=document.getElementById("form7");
var form8=document.getElementById("form8");
var form9=document.getElementById("form9");
var form10=document.getElementById("form10");
var over=document.querySelector(".overlay1");
var over1=document.querySelector(".overlay2");
var over2=document.querySelector(".overlay3");
var over3=document.querySelector(".overlay4");
var over4=document.querySelector(".overlay5");
var over5=document.querySelector(".overlay6");
var over6=document.querySelector(".overlay7");
var over7=document.querySelector(".overlay8");
var over8=document.querySelector(".overlay9");
var over9=document.querySelector(".overlay10");
var times=document.getElementById("close_overlay");
var times1=document.getElementById("close_overlay1");
var times2=document.getElementById("close_overlay2");
var times3=document.getElementById("close_overlay3");
var times4=document.getElementById("close_overlay4");
var times5=document.getElementById("close_overlay5");
var times6=document.getElementById("close_overlay6");
var times7=document.getElementById("close_overlay7");
var times8=document.getElementById("close_overlay8");
var times9=document.getElementById("close_overlay9");
var body=document.querySelector(".body");

form1.addEventListener("click",()=>{
    over.classList.add("active");
    body.classList.add("active");
})
times.addEventListener("click",()=>{
    over.classList.remove("active");
    body.classList.remove("active");

})
times1.addEventListener("click",()=>{
    over1.classList.remove("active");
    body.classList.remove("active");
})
form2.addEventListener("click",()=>{
    over1.classList.add("active");
    body.classList.add("active");
})
times2.addEventListener("click",()=>{
    over2.classList.remove("active");
    body.classList.remove("active");
})
form3.addEventListener("click",()=>{
    over2.classList.add("active");
    body.classList.add("active");
})
times3.addEventListener("click",()=>{
    over3.classList.remove("active");
    body.classList.remove("active");
})
form4.addEventListener("click",()=>{
    over3.classList.add("active");
    body.classList.add("active");
})
times4.addEventListener("click",()=>{
    over4.classList.remove("active");
    body.classList.remove("active");
})
form5.addEventListener("click",()=>{
    over4.classList.add("active");
    body.classList.add("active");
})
times5.addEventListener("click",()=>{
    over5.classList.remove("active");
    body.classList.remove("active");
})
form6.addEventListener("click",()=>{
    over5.classList.add("active");
    body.classList.add("active");
})
times6.addEventListener("click",()=>{
    over6.classList.remove("active");
    body.classList.remove("active");
})
form7.addEventListener("click",()=>{
    over6.classList.add("active");
    body.classList.add("active");
})
times7.addEventListener("click",()=>{
    over7.classList.remove("active");
    body.classList.remove("active");
})
form8.addEventListener("click",()=>{
    over7.classList.add("active");
    body.classList.add("active");
})
times8.addEventListener("click",()=>{
    over8.classList.remove("active");
    body.classList.remove("active");
})
form9.addEventListener("click",()=>{
    over8.classList.add("active");
    body.classList.add("active");
})
times9.addEventListener("click",()=>{
    over9.classList.remove("active");
    body.classList.remove("active");
})
form10.addEventListener("click",()=>{
    over9.classList.add("active");
    body.classList.add("active");
})


window.onscroll=()=>{
    bar.classList.remove("fa-times");
    lis.classList.remove("active");

    var maxHeight=window.document.body.scrollHeight - window.innerHeight;
    var percentage=((window.scrollY)/maxHeight) * 100;
    document.querySelector(".scroll-indicator").style.width=percentage + '%';
}