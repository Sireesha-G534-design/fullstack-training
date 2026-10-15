
const studentName = "Hari";
let marks = 85;
const subject = "JavaScript";
const isPassed = true;

console.log("Welcome to JavaScript!");
console.log("Student name:", studentName);
console.log("Subject:", subject);
console.log("Marks:", marks);
console.log("Passed:", isPassed);

console.log(`${studentName} scored ${marks} marks in ${subject}.`);




const employeeName = "Anjali";
let age = 30;
const role = "Software Engineer";
let salary = "null";
const city = "Kolkata";
const isEmployee = "true";




console.log("Employee name: ",employeeName);
console.log("Age: ", age);
console.log("Role:", role);
console.log("Salary:", salary);
console.log("City:" ,city );
console.log("Employee:" ,isEmployee)



//Task- 1
const priyaName = "priya";
let priyaMarks = 85;


//arithmatic operations
console.log("Addition: ", 10 + 5);
console.log("Subtraction: ", 10 -5);
console.log("Multiplication: ", 10 *5);
console.log("Subtraction:", 10 / 2);


//comparision marks
console.log("is she got marks 85?",   priyaMarks === true);


 if(priyaMarks >=35) {
    console.log(priyaName+ "passed!");
}else{
    console.log(priyaName+ "failed!");
}

const studentName2 = "priya";
let Marks2 = 85;


//arithmatic operations
console.log("Addition: ", 10 + 5);
console.log("Subtraction: ", 10 -5);
console.log("Multiplication: ", 10 *5);
console.log("Subtraction:", 10 / 2);


//comparision marks
console.log("is she got marks 85?",   Marks2 === true);



console.log( "The Numbers 1 to 10"  ); 


for( let i=1; i <=10; i++){
console.log(i);
}






let studentMarks =34;


if (studentMarks   >=90){
console.log("Grade A");
}else if(studentMarks >=80){
    console.log("Grade B");

}else if(studentMarks >=70){
    console.log("Grade c");

}else if(studentMarks >=65){
    console.log("Grade D");
}else{
    console.log("failed");
}




// Task -2
for(let i=1; i<=30; i++){
 if(i % 3 === 0 && i % 5 === 0){
 console.log("FIZZBUZZ");
}else if(i % 3 ===0){
    console.log("Fizz");
}else if(i % 5 ===0){
    console.log("BUZZ");
}else{
    console.log(i);
}

}




//Task-3

 // Store the word to check
let word = "sequoia";

// Initialize the vowel counter to zero
let count = 0;

// Store all vowels
let vowel = "aeiou";

// Loop through each character in the word
for (let i = 0; i < word.length; i++) {

    // Check whether the current character is a vowel
    if (vowel.includes(word[i].toLowerCase())) {

        // Increase the count when a vowel is found
        count++;
    }
}

// Print the original word
console.log("Word:", word);

// Print the total number of vowels
console.log("Number of Vowels:", count);




//Task- 4



let text = "school2026 India";

// Initialize counters
let vowelsCount = 0;
let consonantsCount = 0;
let digitsCount = 0;

// Store all vowels
let vowelLetters = "aeiou";

// Convert text to lowercase
text = text.toLowerCase();

// Loop through each character
for (let i = 0; i < text.length; i++) {
    let character = text[i];

    // Check for vowels
    if (vowelLetters.includes(character)) {
        vowelsCount++;
    }

    // Check for consonants
    else if (character >= "a" && character <= "z") {
        consonantsCount++;
    }

    // Check for digits
    else if (character >= "0" && character <= "9") {
        digitsCount++;
    }
}

// Display the counts
console.log("Text:", text);
console.log("Vowels:", vowelsCount);
console.log("Consonants:", consonantsCount);
console.log("Digits:", digitsCount);






//Task -5  Reverse a STRING

// store the original word
 let originalWord = "KeyboardEvent";

 //Split the word into character, reverse them, and join them
 let reverseWord =originalWord.split("").reverse().join("");


 console.log("original Word: ", originalWord);
 console.log("reverse Word:", reverseWord)




 //Task-6 find largest number

 let firstNumber =25;
 let secondNumber = 90;
 let thirdNumber = 45;
 
 //compare all three numbers 
 if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
    console.log("Largest: ",firstNumber
    )
 }else if (secondNumber>= firstNumber && secondNumber >= thirdNumber) {
    console.log("largest: ", secondNumber);

 }else {
    console.log("Largest: ", thirdNumber);
 }


 //Task 7
 // store students details
 const  Name = "Priya";
  let Marks = 90;
  

  //store the grade
  let grade = "";

  // Validate the marks 
  if (typeof marks !== "number" || !Number.isFinite(Marks)) {
    grade = "Invalid input";

  }else if (Marks < 0 || Marks>100){
    grade =" inavalid marks";

  }//calculate the grade
   else if(Marks>=90){
    grade ="A";
   }else if(Marks>=75){
    grade="B";
   }else if(Marks>=35){
    grade = "c";
   }else{
    grade="Fail";
   }
   // Display the result using a template literal
console.log(` Name: ${Name}`);
console.log(`Marks: ${marks}`);
console.log(`Grade: ${grade}`);


//TaSK-8
// Leap Year

// Store the year to check
let year = 2024;

// Validate the year
if (!Number.isInteger(year) || year <= 0) {
    console.log("Invalid year. Enter a positive integer.");
}

// Check leap year conditions
else if (year % 400 === 0) {
    console.log(`${year} is a leap year.`);
}
else if (year % 100 === 0) {
    console.log(`${year} is not a leap year.`);
}
else if (year % 4 === 0) {
    console.log(`${year} is a leap year.`);
}
else {
    console.log(`${year} is not a leap year.`);
}

