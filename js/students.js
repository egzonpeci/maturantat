let students = [
    ["Filan Fisteku", "Prishtine"],
    ["Filan Fisteku", "Prishtine"],
    ["Filan Fisteku", "Prishtine"],
    ["Filan Fisteku", "Prishtine"],
    ["Filan Fisteku", "Prishtine"],
    ["Filan Fisteku", "Prishtine"],
    ["Filan Fisteku", "Prishtine"],
    ["Filan Fisteku", "Prishtine"],
    ["Filan Fisteku", "Prishtine"],
    ["Filan Fisteku", "Prishtine"],
    ["Filan Fisteku", "Prishtine"],
    ["Filan Fisteku", "Prishtine"],
    ["Filan Fisteku", "Prishtine"],
    ["Filan Fisteku", "Prishtine"],
    ["Filan Fisteku", "Prishtine"],
    ["Filan Fisteku", "Prishtine"],
    ["Filan Fisteku", "Prishtine"],
    ["Filan Fisteku", "Prishtine"],
    ["Filan Fisteku", "Prishtine"],
    ["Filan Fisteku", "Prishtine"],
    ["Filan Fisteku", "Prishtine"]
];


let htmlStudents = '';

for (let i = 0; i < students.length; i++) {

    htmlStudents += `
        <div class="student">
                <img src="images/student.jpg" alt="">
                <h1 class="student-fullname">
                    ${students[i][0]}
                </h1>
                <h3 class="student-fullname">
                    ${students[i][1]}
                </h3>
            </div>
    `;
}


document.getElementById("students").innerHTML = htmlStudents;