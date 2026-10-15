
const employees = require("./50employess.json");

console.log("Total employees:", employees.length);

// TASK 1: Function - calculate annual salary
function calculateAnnualSalary(monthlySalary) {
  return monthlySalary * 12;
}

console.log("Annual salary:", calculateAnnualSalary(50000));


// TASK 2: Arrow function - check salary
const isHighSalary = (salary) => salary > 80000;

console.log("Salary above 80000:", isHighSalary(85000));


// TASK 3: Default parameter - calculate bonus
const calculateBonus = (salary, rate = 10) =>
  (salary * rate) / 100;

console.log("Bonus at 10%:", calculateBonus(50000));
console.log("Bonus at 15%:", calculateBonus(50000, 15));


// TASK 4: Rest parameters - add amounts
const addAmounts = (...amounts) =>
  amounts.reduce((total, amount) => total + amount, 0);

console.log("Total amounts:", addAmounts(100, 200, 300, 400));


// TASK 5: map() - get employee names
const employeeNames = employees.map(({ name }) => name);

console.log("Employee names:", employeeNames);


// TASK 6: filter() - employees earning above 80000
const highEarners = employees.filter(
  ({ salary }) => salary > 80000
);

console.log("High earners:", highEarners);


// TASK 7: reduce() - calculate total salary
const totalSalary = employees.reduce(
  (total, { salary }) => total + salary,
  0
);

console.log("Total salary:", totalSalary);


// TASK 8: Calculate average salary
const averageSalary = totalSalary / employees.length;

console.log("Average salary:", averageSalary.toFixed(2));


// TASK 9: find() - search by name
const searchName = "SNEHA";

const foundEmployee = employees.find(
  ({ name }) => name.toLowerCase() === searchName.toLowerCase()
);

console.log("Search result:", foundEmployee ?? "Employee not found");


// TASK 10: some() - anyone earning above 100000?
const hasHighSalary = employees.some(
  ({ salary }) => salary > 100000
);

console.log("Anyone earns above 100000:", hasHighSalary);


// TASK 11: every() - everyone earns at least 40000?
const allMeetMinimum = employees.every(
  ({ salary }) => salary >= 40000
);

console.log("Everyone earns at least 40000:", allMeetMinimum);


// TASK 12: sort() - highest to lowest salary
const salaryDescending = [...employees].sort(
  (a, b) => b.salary - a.salary
);

console.log("Employees by salary (high to low):", salaryDescending);


// TASK 13: Destructuring - first employee details
const {
  id: firstEmployeeId,
  name: firstEmployeeName,
  department: firstEmployeeDepartment,
  salary: firstEmployeeSalary
} = employees[0];

console.log("First employee ID:", firstEmployeeId);
console.log("First employee name:", firstEmployeeName);
console.log("First employee department:", firstEmployeeDepartment);
console.log("First employee salary:", firstEmployeeSalary);


// TASK 14: Spread - copy the employee array
const employeeCopy = [...employees];

console.log("Copied employee count:", employeeCopy.length);


// TASK 15: Update Ravi's salary without changing original
const ravi = employees.find(
  ({ name }) => name.toLowerCase() === "ravi"
);

const updatedRavi = ravi
  ? { ...ravi, salary: ravi.salary + 5000 }
  : "Employee Ravi not found";

console.log("Updated Ravi:", updatedRavi);
console.log("Original Ravi:", ravi);


// TASK 16: Closure - private counter
const createCounter = () => {
  let count = 0;

  return () => {
    count += 1;
    return count;
  };
};

const counter = createCounter();

console.log("Counter:", counter()); // 1
console.log("Counter:", counter()); // 2
console.log("Counter:", counter()); // 3


// TASK 17: Group employees by department
const groupedByDepartment = employees.reduce(
  (groups, employee) => {
    const { department } = employee;

    if (!groups[department]) {
      groups[department] = [];
    }

    groups[department].push(employee);
    return groups;
  },
  {}
);

console.log("Employees grouped by department:", groupedByDepartment);


// TASK 18: Department count, total salary and average salary
const departmentSummary = Object.entries(groupedByDepartment).map(
  ([department, members]) => {
    const departmentTotalSalary = members.reduce(
      (total, employee) => total + employee.salary,
      0
    );

    return {
      department,
      employeeCount: members.length,
      totalSalary: departmentTotalSalary,
      averageSalary: Number(
        (departmentTotalSalary / members.length).toFixed(2)
      )
    };
  }
);

console.log("Department summary:", departmentSummary);


// TASK 19: Top 3 highest-paid employees
const topThreeEarners = [...employees]
  .sort((a, b) => b.salary - a.salary)
  .slice(0, 3);

console.log("Top 3 earners:", topThreeEarners);


// TASK 20: Reusable employee search function
const searchEmployee = (name) =>
  employees.find(
    (employee) =>
      employee.name.toLowerCase() === name.trim().toLowerCase()
  ) ?? "Employee not found";

console.log("Search Ravi:", searchEmployee("Ravi"));
console.log("Search unknown:", searchEmployee("Unknown"));
