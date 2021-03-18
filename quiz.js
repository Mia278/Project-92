p1 = localStorage.getItem("key1");
p2 = localStorage.getItem("key2");
p1_score = 0;
p2_score = 0;

document.getElementById("player1_name").innerHTML = p1;
document.getElementById("player2_name").innerHTML = p2;
document.getElementById("player1_score").innerHTML = " : " + p1_score;
document.getElementById("player2_score").innerHTML = " : " + p2_score;
document.getElementById("question").innerHTML = "Question Turn : " + p1;
document.getElementById("answer").innerHTML = "Answer Turn : " + p2;

function send() {
    //declaration
    n1 = Number(document.getElementById("numb1").value);
    n2 = Number(document.getElementById("numb2").value);
    actual_answer = n1 * n2;
    //adding the main content on output
    question = "<h3>" + n1 + ' X ' + n2 + "</h3>";
    input_box = "<br><br> <span> Answer : </span> <input type = 'text' id = 'inputb' placeholder = 'type here'>";
    ans_btn = "<br><br> <button class = 'btn btn-primary' id = 'b3' style = 'width : 250px;' onclick = 'check()'>Check answer</button>";
    row = question + input_box + ans_btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("numb1").value = "";
    document.getElementById("numb2").value = "";
}

qturn = "p1";
aturn = "p2";

function check() {
    //declaration
    ans = document.getElementById("inputb").value;
    if (ans == actual_answer) {
        if (aturn == "p1") {
            p1_score = p1_score + 1;
            document.getElementById("player1_score").innerHTML = " : " + p1_score;
        } else {
            p2_score = p2_score + 1;
            document.getElementById("player2_score").innerHTML = " : " + p2_score;
        }
    }
    if (qturn == "p1") {
        qturn = "p2";
        document.getElementById("question").innerHTML = "Question Turn - " + p2;
    } else {
        qturn = "p1";
        document.getElementById("question").innerHTML = "Question Turn - " + p1;
    }

    if (aturn == "p1") {
        aturn = "p2";
        document.getElementById("answer").innerHTML = "Answer Turn - " + p2;
    } else {
        aturn = "p1";
        document.getElementById("answer").innerHTML = "Answer Turn - " + p1;
    }
    document.getElementById("output").innerHTML = "";
}