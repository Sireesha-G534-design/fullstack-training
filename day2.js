//Regular function
function Bonus(salary){
    return salary * 0.10;

}
console.log(Bonus(50000)); //50000

// arrow function
const BonusArrow = (salary) => salary* 0.10;

console.log (BonusArrow(60000)); //6000

//Default parameter
const greet = (name ="Employee")=> `Hello, ${name}`;


console.log(greet());
console.log(greet("Ravi"));


// Rest parameter
const total = (...number)=>
 number.reduce((sum, number) => sum + number,0);

console.log(total(10,20,30,40,50));




//scope and closures

//global scope
const company = "ABC technologies";

//function declaration
function employeeInfo() {
    //function scope
 const department = "Non IT";

 if (true) {
    let salary = 60000;
    console.log(department, salary);

  } return department;

}
console.log(employeeInfo()); // Calls function and prints IT
console.log(company); // Prints company name



const creatCounter =() => {
    let count =0;
    return ()=>{
        count+=1;
        return count;
    }
}
const counter = creatCounter();

console.log(counter()); 
console.log(counter()); 
console.log(counter()); 



//Destructing and spread syntax

const employee ={
    id: 115,
    name: "Hari",
    department: 'IT',
    salary: 50000

};

// object destructing

const {name, salary} =employee;

console.log(name,salary);

//Array destructing
const scores = [80,90,100];
const [first,second,third]=scores;


console.log(first,second,third);

const updateEmployee ={
    id: 115,
    name: "Anu",
    department: 'IT',
    salary: 90000

};

// object destructing

console.log(updateEmployee);

//spread: combine arrays
const teamA =["Hari","Anu"];
const teamB= ["kiran","priya"];



const allEmployees = [...teamA, ...teamB];

console.log(allEmployees);







const employees = require("./50employees.json");

// 17. Closure: create a private counter
const createSalaryCounter = () => {
  let count = 0;

  return () => {
    count += 1;
    return count;
  };
};

const salaryCounter = createSalaryCounter();

console.log("Salary counter:", salaryCounter()); // 1
console.log("Salary counter:", salaryCounter()); // 2
console.log("Salary counter:", salaryCounter()); // 3


// 18. Spread: create a copy of the employee array
const employeeCopy = [...employees];

console.log("Copied employee count:", employeeCopy.length);


// 19. Destructuring: get first employee details
const {
  id: firstEmployeeId,
  name: firstEmployeeName,
  department: firstEmployeeDepartment,
  salary: firstEmployeeSalary
} = employees[0];

console.log("Employee ID:", firstEmployeeId);
console.log("Employee name:", firstEmployeeName);
console.log("Department:", firstEmployeeDepartment);
console.log("Salary:", firstEmployeeSalary);


// 20. Find IT employees earning above 90000
const highPaidITEmployees = employees.filter(
  ({ department, salary }) =>
    department === "IT" && salary > 90000
);

console.log("High-paid IT employees:", highPaidITEmployees);
