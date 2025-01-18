var box=document.getElementById("automatic");
var button=document.getElementById("btn");
var timer=document.getElementById("timer");
const minutes=1;
let seconds=minutes*60;


function genrate()
{
    timer.style.display="block";
    setInterval(()=>{
        const min=Math.floor(seconds/60);
        let sec=seconds%60;
        timer.innerHTML="waiting for OTP "+`${min}:${sec}`;
        seconds--;
    },1000);
   setTimeout(()=>{
    const num=Math.round((Math.random()*9000)+1000);
    box.value=num;
    timer.remove();
   },30000);
}