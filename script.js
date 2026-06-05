const line = document.getElementById("line");
const angleText = document.getElementById("angle");

let dragging = false;

line.addEventListener("touchstart",()=>{
    dragging=true;
});

document.addEventListener("touchend",()=>{
    dragging=false;
});

document.addEventListener("touchmove",(e)=>{
    if(!dragging) return;

    let rect=line.parentElement.getBoundingClientRect();

    let cx=rect.left+175;
    let cy=rect.top+170;

    let x=e.touches[0].clientX-cx;
    let y=e.touches[0].clientY-cy;

    let angle=Math.atan2(y,x)*180/Math.PI;

    line.style.transform=`rotate(${angle}deg)`;

    angleText.innerText=Math.round(angle);
});
