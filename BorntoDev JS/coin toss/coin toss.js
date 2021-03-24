let round = prompt("จำนวนรอบที่ต้องการเล่น")
for(var i = 0; i < round; i++){
    var answer = prompt("หัว หรือ ก้อย")
    var random_answer = ""
    if(Math.floor(Math.random()*10) <=4 ){
        random_answer = "หัว"
    }
    else{
        random_answer = "ก้อย"
    }

    if(answer == random_answer){
        alert("ตอบถูก ยินดีด้วย")
    }
    else{
        alert("ตอบผิด เสียใจด้วย")
    }
    document.getElementById("game-list").innerHTML += "คุณสุ่ม :" + answer + "ระบบสุ่มได้ :" + random_answer + "<br>"
    console.log(random_answer+ ":" + answer)  
}
document.getElementById("result").innerHTML = "คุณเล่นทั้งหมด" + round + "รอบ และได้คะแนนทั้งหมด" + "sum" + "คะแนน"