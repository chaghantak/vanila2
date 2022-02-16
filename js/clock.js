const clock = document.querySelector("h2#clock") //h2랑 id같이사용



function getClock(){
    const date = new Date();
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
   clock.innerText=`${hours}:${minutes}:${seconds}`
}
getClock()
setInterval(getClock, 1000)//첫번째 argument는 실행하고자하는 function 두번째 argument는 호출되는 function 간격 몇ms
// setTimeout(sayHello, 5000)