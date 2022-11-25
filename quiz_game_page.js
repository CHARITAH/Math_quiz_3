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
    input_box = "<br>Answer : <input type= 'text' id= 'input_player'>";
    check_button = "<br><br><button class = 'btn btn-primary' onclick = 'check()'>check</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
   
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        update_player1_score = update_player1_score +1;
        document.getElementById("player1_score").innerHTML = update_player;
    }
    else
    {
        update_player2_score = player2_score+1;
        document.getElementById("player2_score").innerHTML = update_player2_score;
    }

}

if(question_turn == "player1")
{
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
}
else 
{
    question_turn = "player1"
    document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name;
}