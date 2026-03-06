//Write a function that takes marks (0–100) and returns grade: 90–100 → A, 75–89 → B,50–74 → C, Below 50 → Fail. Validate invalid inputs and avoid deeply nested if-else

function getGrade(marks) {
    //Validate input
    if (typeof marks!=="number" || isNaN(marks)) {
        return "Invalid input: Marks must be a number";
    }

    if (marks <0 || marks >100) {
        return "Invalid input: Marks must be between 0 and 100.";
    }

    if (marks >= 90) return "Grade: A";
    if (marks >= 75 && marks<=89) return "Grade: B";
    if (marks >= 50 && marks<=74) return "Grade: C";

    return "Fail";
}

//Test cases
console.log(getGrade(94)); 
console.log(getGrade(80));  
console.log(getGrade(60));  
console.log(getGrade(30));  
console.log(getGrade(150)); 
console.log(getGrade('X')); 