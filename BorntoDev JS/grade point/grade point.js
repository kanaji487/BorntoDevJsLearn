let score = prompt("your score")
if(score >= 80){
    document.getElementById("result").innerHTML = "you get A grade"
}else if(score >= 70){
    document.getElementById("result").innerHTML = "you get B grade"
}else if(score >= 60){
    document.getElementById("result").innerHTML = "you get C grade"
}else if(score >= 50){
    document.getElementById("result").innerHTML = "you get D grade"
}else
{
    document.getElementById("result").innerHTML = "you failed"
}