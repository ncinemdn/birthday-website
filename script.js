function openEnvelope(){

const envelope=document.querySelector(".envelope");

envelope.classList.add("open");

setTimeout(()=>{

document.getElementById("envelope-screen").style.display="none";
document.getElementById("main-site").style.display="block";

document.getElementById("music").play();

createHearts();

},900);

}

function showSurprise(){

document.getElementById("message").style.display="block";
document.getElementById("gallery").style.display="block";

typeMessage();
startSlideshow();

}

const message = `Happiest birthday to my favorite person.

I know this is just a small website, but I wanted to make something that you can open and come back to whenever you want. Something that reminds you how loved you are.

Since you came into my life, things have felt lighter and happier. You became the person I tell everything to, the one I run to when something exciting happens, and the one I want beside me even during the most ordinary days.

I love how you make me laugh without trying, how comfortable everything feels when I’m with you, and how somehow you became my safe place without even realizing it.

Looking at these pictures reminds me of all the little memories we’ve made together.

Thank you for being patient with me and for always making me feel cared for.

Happy birthday, my bb. ❤️
`;

function typeMessage(){

let i=0;
const speed=35;

const target=document.getElementById("typed-text");

function typing(){

if(i < message.length){

target.innerHTML += message.charAt(i);
i++;

setTimeout(typing,speed);

}

}

typing();

}

function createHearts(){

setInterval(()=>{

let heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(Math.random()*20+10)+"px";

document.body.appendChild(heart);

setTimeout(()=>{heart.remove();},6000);

},300);

}

function startSlideshow(){

const slides=document.querySelectorAll(".slide");

let index=0;

setInterval(()=>{

slides[index].classList.remove("active");

index=(index+1)%slides.length;

slides[index].classList.add("active");

},2800);

}