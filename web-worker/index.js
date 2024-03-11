const worker = new Worker("worker.js");
const button1 = document.getElementsByClassName("button1")[0];
const button2 = document.getElementsByClassName("button2")[0];

button2.addEventListener("click",function(){
    if(button2.style.backgroundColor==="green"){
        button2.style.backgroundColor="blue";
    }else{
        button2.style.backgroundColor="green";
    }
})

button1.addEventListener("click",function(){
    worker.postMessage("do calculation");
})

worker.onmessage=function(message){
    console.log("message",message.data);
}