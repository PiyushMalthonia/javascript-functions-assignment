// 1. Welcome Function
function welcomeStudent(name,course){
    return `Welcome ${name} to the ${course} course`;
}
console.log(welcomeStudent("Asha", "JavaScript"));
console.log("\n");




// 2. Add Two Numbers
function addNumbers(num1,num2){
    return num1+num2;
}
const result = addNumbers(10, 20);
console.log(result);
console.log("\n");




// 3. Voting Eligibility
function checkVotingEligibility(age){
    if (age>=18){
        return "Eligible to vote";
    }
    else
        return "Not eligible to vote";
}
console.log(checkVotingEligibility(16));
console.log(checkVotingEligibility(20));
console.log("\n");




// 4. Even or Odd
function checkEvenOrOdd(num){
    if (num%2===0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
console.log(checkEvenOrOdd("10"));
console.log(checkEvenOrOdd(11));
console.log(checkEvenOrOdd(10));
console.log("\n");




// 5. Positive, Negative or Zero
function checkNumber(num){
    if (num>0){
        return "Positive";
    }
    else if (num<0){
        return "Negative";
    }
    else{
        return "Zero";
    }
}
console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));
console.log("\n");




// 6. Find the Larger Number
function findLargest(num1,num2){
    if (num1>num2){
        return num1;
    }
    else if (num2>num1){
        return num2;
    }
    else if (num1===num2){
        return "Numbers are equal";
    }
}
console.log(findLargest(10, 20));
console.log(findLargest(50, 50));
console.log(findLargest(5,"5"));
console.log(findLargest("5","5"));
console.log(findLargest("5","15"));  //JS checks the first letter of both string 
console.log(findLargest(-1,-5));
console.log("\n");




// 7. Student Grade
function getGrade(marks){
    if(marks>=90 && marks<=100){
        console.log("Grade : A+");
    }
    else if(marks<=89 && marks>75) {
        console.log("Grade : A");
    }
    else if(marks<=74 && marks>60) {
        console.log("Grade : B");
    }
    else if(marks<59 && marks>=40) {
        console.log("Pass");
    }
    else {
        console.log("Fail");
    }
}
getGrade(91);
getGrade(84);
getGrade(73);
getGrade(55);
getGrade(30);
console.log("\n");




// 8.  Placement Eligibility
function checkPlacementEligibility(percentage, hasBacklogs){
    if(percentage>=65 && hasBacklogs===false){
        return "Pass";
    }
    else{
        return "Fail";
    }
}
console.log(checkPlacementEligibility(72, false));
console.log(checkPlacementEligibility(80, true));
console.log("\n");




// 9. Login Validation
function login(username, password){
    if (username==="admin" && password===1234){
        console.log("Login successful");
    }
    else{
        console.log("Invalid credentials");
    }
}
login("admin", 1234);
login("admin", "1234");
login("admin", "5678");
login("student", "1234");
console.log("\n");




// 10. == vs ===
console.log(5 == "5")   //output: True because equal(==) checks only value
console.log(5 === "5")  //output: False because strictly equal(===) checks both value and data type
console.log(false == 0) //output: True because equal(==) checks only value
console.log(false === 0) //output: False because strictly equal(===) checks both value and data type
console.log(10 === 10)  //output: True because strictly equal(===) checks both value and data type
console.log("\n")




// Main Challenge: Student Result Function
function getStudentResult(name, marks, attendance) {
    if (marks>=40 && attendance>=75) {
        return `${name} passed the course`;
    }
    else {
        return `${name} did not pass the course`;
    }
}
console.log(getStudentResult("Asha", 82, 90));
console.log(getStudentResult("Ravi", 65, 60));
console.log(getStudentResult("Rahul", 35, 80));
console.log(getStudentResult("Neha", 40, 75));
