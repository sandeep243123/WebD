var f=0;
setInterval(()=>{
    let d=document.getElementsByClassName("child");
    const curTime=new Date();
    d[2].innerHTML=curTime.getSeconds();
    d[0].innerHTML=curTime.getHours();
    d[1].innerHTML=curTime.getMinutes();
},1000)

let t=document.getElementsByClassName("child1");
const curDate=new Date();
t[0].innerHTML=curDate.getDate()
t[1].innerHTML=curDate.getMonth()
t[2].innerHTML=curDate.getFullYear()
    