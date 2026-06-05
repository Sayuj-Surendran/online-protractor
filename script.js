const upload=document.getElementById("upload");
const imagePreview=document.getElementById("imagePreview");

const protractor=document.getElementById("protractor");

let rotation=0;

upload.addEventListener("change",(e)=>{

const file=e.target.files[0];

if(!file) return;

imagePreview.src=URL.createObjectURL(file);

imagePreview.style.display="block";

});

document.getElementById("rotateLeft")
.addEventListener("click",()=>{

rotation-=5;

protractor.style.transform=
`rotate(${rotation}deg)`;

});

document.getElementById("rotateRight")
.addEventListener("click",()=>{

rotation+=5;

protractor.style.transform=
`rotate(${rotation}deg)`;

});

document.getElementById("resetBtn")
.addEventListener("click",()=>{

rotation=0;

protractor.style.transform=
`rotate(0deg)`;

});

let dragging=false;

let offsetX=0;
let offsetY=0;

protractor.addEventListener("pointerdown",(e)=>{

dragging=true;

offsetX=e.offsetX;
offsetY=e.offsetY;

});

document.addEventListener("pointermove",(e)=>{

if(!dragging) return;

protractor.style.left=
(e.pageX-offsetX)+"px";

protractor.style.top=
(e.pageY-offsetY)+"px";

});

document.addEventListener("pointerup",()=>{

dragging=false;

});
