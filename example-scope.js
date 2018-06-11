
//SCOPE
//Global variables
var student1 = "Bella";
var student2 = "Hana";
var student3 = "Mike";

//can access from every where
//TEST 1 Global variabels
console.log("Result: " + student1 + " < " + student2 + " < "+ student3); //Result: Bella < Hana < Mike

//Test 2
function isClever(stud){
  student4 = "John";
  console.log(stud + " is the cleveriest");
}

isClever(student2); // Hana is the cleveriest
isClever(student4); // John is the cleveriest


//RETURN
// In function we can use return instead of console.log();
// use console.log();
function addNumbers(num1, num2){
  console.log(num1 + num2);
}

addNumbers(3, 5);

//Using return
function addNumbers1(number1, number2){
  return number1 + number2;
}

addNumbers1(10, 10);
