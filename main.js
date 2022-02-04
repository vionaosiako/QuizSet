function check(){
    var answer =0;
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

    var results = document.getElementsById ('results');

    if (que1 == "js"){answer++}

    if (que2 == "js"){answer++}

    if (que3 == "js"){answer++}

    if (que4 == "js"){answer++}    

    if (que5 == "js"){answer++}

    if (que6 == "js"){answer++}

    if (que7 == "js"){answer++}

    if (que8 == "js"){answer++}

    if (que9 == "js"){answer++}

    if (que10 == "js"){answer++}

document.write(answer);


}