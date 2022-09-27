player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

number1 = 0;
number2 = 0;

document.getElementById("player1_score").innerHTML = number1;
document.getElementById("player2_score").innerHTML = number2;

document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;

document.getElementById("player_question").innerHTML = "Question Turn =   " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn =   " + player2_name;


function send(){
    get_word = document.getElementById("number").value;

    number1 = document.getElementById("nember1").value;
    number2 = document.getElementById("nember2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type= 'text' id= 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-primary' onclick = 'check()'>check</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
   
}