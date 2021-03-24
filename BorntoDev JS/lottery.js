let lottery_number = prompt("lottery number")
let random_number = Math.floor(Math.random() * 1000000)
document.getElementById("random").innerHTML = random_number
if( lottery_number == random_number ){
    document.getElementById("result").innerHTML = "You get the biggest price"
}
else{
    document.getElementById("result").innerHTML = "Try again next time"
}