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

I know this is just a small website, but I wanted to make something you can open anytime and come back to whenever you want. Something simple that reminds you how loved you are.

Since August 2022, when you came into my life, so many things started to feel different in the best way. The ordinary days didn’t feel so ordinary anymore. Somehow, you became the person I tell everything to — the first one I run to when something exciting happens, and the one I want beside me even during the quiet, normal moments.

I love how you make me laugh without even trying. I love how being with you feels easy and calm, like I don’t have to pretend to be anyone else. Without even realizing it, you slowly became my safe place.

Looking at these pictures reminds me of all the little memories we’ve made together. The simple moments that didn’t seem big at the time, but now mean so much because they happened with you.

As you turn 21 today, I just want you to know how grateful I am that our paths crossed. Out of all the people in the world, I’m so thankful that somehow it was you who became my person.

Lagi kong pinapanalangin na h’wag ka nang mawala sa buhay ko. Mahal kita, mahal na mahal. Lahat handa kong tahakin para sa’yo, palagi.

Happy 21st birthday, my bb, my baby baby, my home, my safe space, my tahanan, my palagi.

My Yellow ❤️
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