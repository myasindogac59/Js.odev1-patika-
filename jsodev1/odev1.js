let UserName = prompt("Kullanıcı Adı:");
function showTime(){


let myName =document.querySelector("#myName")
    
myName.innerHTML = UserName 
    
let myClock = document.querySelector("#myClock")
var date = new Date()
    
var gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    
myClock.innerHTML = `
${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${gunler[date.getDay()]} 
    `
    }
setInterval(showTime,1000)