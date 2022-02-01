
function closemenu(){
 var c19=document.getElementById("A2");
 var c20=document.getElementById("I1");
   var c4=document.getElementById("nev2");
   var c1=document.getElementById("nev1");
   if (window.innerWidth < 700){
   c1.style.right="-200px";
   c4.style.right="calc(200px + 100vw)";};
   c20.style.transform='scale(0)';
   c19.style.transform='scale(1)';
}
function showmenu(){
 var c19=document.getElementById("A2");
 var c20=document.getElementById("I1");
   var c2=document.getElementById("nev1");
   c2.style.right="0";
    var c3=document.getElementById("nev2");
    c3.style.right="200px";
    c20.style.transform='scale(1)';
    c19.style.transform='scale(0)';
}
function f1() {
     var P1 = document.getElementById("Name");
     var P2 = document.getElementById("Email");
     var P3 = document.getElementById("Subject");
     var P4 = document.getElementById("Message");
     if(P1.value.length!=0 && P2.value.length>=5 && P3.value.length!=0 && P4.value.length!=0)
     {
     var Xhr = new XMLHttpRequest();
     Xhr.open('GET', "https://api.telegram.org/bot5068815984:AAFDyJ9HYmfJmmqVq0prIv0C0vmXNFUKWNc/sendmessage?chat_id=1233632774&text=Name: " +P1.value+" Email: " +P2.value+ " Subject: " +P3.value+ " Message: " +P4.value+ "");
     Xhr.send();
     var P5 =document.getElementById("S3");
     P5.style.display = 'inline-block';
     setTimeout(function() {P5.style.display='none'}, 20000);
     P1.style.boxShadow='none';
     P2.style.boxShadow='none';
     P3.style.boxShadow='none';
     P4.style.boxShadow='none';
     P1.value='';
     P2.value='';
     P3.value='';
     P4.value='';
     P5.value='';
     }
    else if (P1.value.length==0){
      P1.style.boxShadow='0 0 0 2px red';
    }
    else if(P2.value.length<=5){
      P2.style.boxShadow='0 0 0 2px red';
    }
    else if (P3.value.length==0){
      P3.style.boxShadow='0 0 0 2px red';
    }
    else if (P4.value.length==0){
      P4.style.boxShadow='0 0 0 2px red';
    };
}
function slider1(){
    var c5=document.getElementById("z1");
    var c6=document.getElementById("z2");
    var c7=document.getElementById("z3");
    var c8=document.getElementById("z4").getBoundingClientRect().width;
    var c12=document.getElementById("circle1");
    var c13=document.getElementById("circle2");
    var c14=document.getElementById("circle3");
    
    if(c6.offsetLeft== 0){
    c7.style.visibility='hidden';
    c5.style.visibility='visible';
    c5.style.left="0px";
    c6.style.left="100%";
    c7.style.left="-100%";
    c7.style.transitionDuration='0s';
    c5.style.transitionDuration='0.5s';
    c6.style.transitionDuration='0.5s';
    c12.style.background='grey';
    c13.style.background='lightgrey';
    c14.style.background='lightgrey';
    }
    else if(c5.offsetLeft==0){
    c6.style.visibility='hidden';
    c7.style.visibility='visible';
    c5.style.left="100%";
    c6.style.left="-100%";
    c7.style.left="0px";
    c6.style.transitionDuration='0s';
    c5.style.transitionDuration='0.5s';
    c7.style.transitionDuration='0.5s';
    c14.style.background='grey';
    c12.style.background='lightgrey';
    c13.style.background='lightgrey';
    }
    else if(c7.offsetLeft==0){
    c5.style.visibility='hidden';
    c6.style.visibility='visible';
    c5.style.left="-100%";
    c6.style.left="0px";
    c7.style.left="100%";
    c5.style.transitionDuration='0s';
    c6.style.transitionDuration='0.5s';
    c7.style.transitionDuration='0.5s';
    c13.style.background='grey';
    c12.style.background='lightgrey';
    c14.style.background='lightgrey';
    };
}
function slider2(){
    var c5=document.getElementById("z1");
    var c6=document.getElementById("z2");
    var c7=document.getElementById("z3");
    var c8=document.getElementById("z4").getBoundingClientRect().width;
    var c12=document.getElementById("circle1");
    var c13=document.getElementById("circle2");
    var c14=document.getElementById("circle3");
    if(c6.offsetLeft== 0){
    c5.style.visibility='hidden';
    c7.style.visibility='visible';
    c5.style.left="100%";
    c6.style.left="-100%";
    c7.style.left="0px";
    c5.style.transitionDuration='0s';
    c6.style.transitionDuration='0.5s';
    c7.style.transitionDuration='0.5s';
    c14.style.background='grey';
    c13.style.background='lightgrey';
    c12.style.background='lightgrey';
    }
    else if(c5.offsetLeft==0){
    c7.style.visibility='hidden';
    c6.style.visibility='visible';
    c5.style.left="-100%";
    c6.style.left="0";
    c7.style.left="100%";
    c7.style.transitionDuration='0s';
    c5.style.transitionDuration='0.5s';
    c6.style.transitionDuration='0.5s';
    c13.style.background='grey';
    c14.style.background='lightgrey';
    c12.style.background='lightgrey';
    }
    else if(c7.offsetLeft==0){
    c6.style.visibility='hidden';
    c5.style.visibility='visible';
    c5.style.left="0px";
    c6.style.left="100%";
    c7.style.left="-100%";
    c6.style.transitionDuration='0s';
    c5.style.transitionDuration='0.5s';
    c7.style.transitionDuration='0.5s';
    c12.style.background='grey';
    c13.style.background='lightgrey';
    c14.style.background='lightgrey';
    };
}
var A5=screen.width;
var startingX,movingX;
function touchstart(event){
    startingX=event.touches[0].clientX;
}
function touchmove(){
    movingX=event.touches[0].clientX;
}
function touchend(){
    if(A5<=700){
    if(startingX+70 < movingX){
        slider1();
    }
    else if(startingX-70 > movingX){
        slider2();
    };
    };
}

setInterval(function(){slider1()},10000)

function lod1(){
 var c9=document.getElementById("h5");
var c8=document.getElementById("lod");
var c11=document.getElementById("ls");
var c10=0;
var c18=document.getElementById("plt");
    for (var i = 0; i <= 100 ; i++) {
       setTimeout( function() {
       c9.style.width=c10 +'%';
       c11.textContent=c10 + '%';
       c10++;},i*10);
    }
    setTimeout(function() {
        c8.style.opacity='0'
    }, 800);
setTimeout(function() {
    c8.style.display='none';
}, 1800);
setTimeout(function() {
    c18.style.transform='scale(1)';
    c18.style.opacity='1';
}, 1000);
}
function scroll1(){
    var c15=window.scrollY;
    var c16=document.getElementById("q11");
    var c17=c15 / 2;
    c16.style.top= -c17 +'px';
}
   document.addEventListener("DOMContentLoaded", () => {
        let options = {
          root: null,
          rootMargin: "-250px 0px",
          threshold: 0.05
        }
        let observer = new IntersectionObserver(beTouching, options);
        document.querySelectorAll(".abs").forEach(abs => {
          observer.observe(abs);
          
          //console.log("watching", p.textContent);
        });
      })
      function beTouching(entries, ob) {
        //entries all 30 paragraphs
        entries.forEach(entry => {
          if (entry.isIntersecting) {
          //  console.log("intersecting");
            //console.log(entry.target);
            //console.log(entry.time, entry.intersectionRatio);
            entry.target.classList.add("show");
            ob.unobserve(entry.target);
          } else {
            entry.target.classList.remove("show");
          }
        });
      }