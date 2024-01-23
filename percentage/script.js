function convert() {
    var input = parseInt(document.getElementById("web").value);
    var input1 = parseInt(document.getElementById("maths").value);
    var input2 = parseInt(document.getElementById("computer").value);
    var input3 = parseInt(document.getElementById("physics").value);

    let total = input + input1 + input2 + input3;
    let percentage = total * 100 / 400;

    let grade = '';
    if (percentage >= 90) {
        grade = 'A';
    } else if (percentage >= 80) {
        grade = 'B';
    } else if (percentage >= 70) {
        grade = 'C';
    } else if (percentage >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    document.getElementById('result').innerHTML = "Out of 400, your total marks are " + total + ". Your percentage is " + percentage.toFixed(2) + "%. Your grade is " + grade + ". You have passed.";
}
