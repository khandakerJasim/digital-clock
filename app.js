const hour=document.getElementById('hour');
const minutes=document.getElementById('minit');
const second=document.getElementById('second');

const clock=setInterval(function Time(){
    let datetoday = new Date();
    let hr=datetoday.getHours();
    let minit=datetoday.getMinutes();
    let sec=datetoday.getSeconds();
    
    if(hr<10){
        hr='0'+hr;
    };
    if(minit<10){
        minit='0'+ minit;
    };
    if(sec<10){
        sec='0'+sec;
    };
    hour.textContent=hr;
    minutes.textContent=minit;
    second.textContent=sec;


}, 1000)