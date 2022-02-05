var answer =0;
function check(){
    
    var que1 = document.quiz.question1.value;
    var que2 = document.quiz.question2.value;
    var que3 = document.quiz.question3.value;
    var que4 = document.quiz.question4.value;
    var que5 = document.quiz.question5.value;
    var que6 = document.quiz.question6.value;
    var que7 = document.quiz.question7.value;
    var que8 = document.quiz.question8.value;
    var que9 = document.quiz.question9.value;
    var que10 = document.quiz.question10.value;

    // var results = document.getElementsById('results');

    if (que1 == "scripting language"){answer++}

    if (que2 == "Undefined"){answer++}

    if (que3 == "Javascript"){answer++}

    if (que4 == "all of the above"){answer++}    

    if (que5 == "all of the above"){answer++}

    if (que6 == "ignores the statement"){answer++}

    if (que7 == "all of the above"){answer++}

    if (que8 == "const"){answer++}

    if (que9 == "all of the above"){answer++}

    if (que10 == "clearInterval"){answer++}

 document.write(answer);
// document.getElementById("results").innerHTML = answer

}

function grading(){
    let grade;
    if(answer>=8){
        grade = "Excellently passed"
    }
    else if(answer>=5){
        grade="Fairly passed"
    }
    else{
        grade="poorly done, kindly retake"
    }
    // document.getElementById("results").innerHTML = grade;
}

