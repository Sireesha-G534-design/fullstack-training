//Event Loop
console.log("Go");

setTimeout(()=> {
    console.log("Time is completed");
},)

console.log("Stop");



//Callback 
//example-1

// Function that accept another function

// Main function
function greet(name, callback) {
    console.log("Hello, " + name);

    callback(); // Execute the callback function
}

// Callback function
function sayWelcome() {
    console.log("Welcome to INDIA!");
}

// Pass the callback function
greet("Ravi", sayWelcome);

//example-2


function calculate(order, callback) {
  // Check whether callback is actually a function
 // console.log("Callback type:", typeof callback);

  if (typeof callback !== "function") {
    console.log("Error: Please pass a function as callback.");
    return;
  }

  return callback(order);
}

function getOrderDetails(order) {
  return `Order ID: ${order.id}, Product: ${order.product}`;
}

function checkDelivery(order) {
  return order.status === "Delivered"
    ? "Order delivered successfully"
    : "Order is still in progress";
}

const order = {
  id: 101,
  product: "Laptop",
  status: "Delivered"
};

// Pass function names WITHOUT parentheses
console.log(calculate(order, getOrderDetails));
console.log(calculate(order, checkDelivery));






//promise
//example -1
//fucntion that returns a promise
function checkMarks(marks) {
  return new Promise((resolve, reject) => {
    if (marks >= 35) {
      resolve("Student passed");
    } else {
      reject("Student failed");
    }
  });
}

//the function with different marks

checkMarks(80)
.then((message) => console.log(message) )
.catch((error) => console.log(error.message));


checkMarks(20)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));






  //aync/await

//example

function fetchUser(){
  return new Promise((resolve) =>{
    setTimeout(()=>
    resolve({id:1, name: "Hari"}));
  },2000);
}

//asyc function
async function displayUser(){
  const user = await fetchUser();


  console.log(user.name);
}
//call the function
displayUser();







//try/catch
//example

 // Function to check the order delivery status
function checkOrder() {

  // Create a Promise to handle success or failure
  return new Promise((resolve, reject) => {

    //  delay of 1 second
    setTimeout(() => {

      // Store the order delivery status
      const isDelivered = false;

      // If the order is delivered, return success
      if (isDelivered) {
        resolve("Order delivered successfully!");
      } else {
        // If not delivered, return an error
        reject(new Error("Order delivery failed!"));
      }

    }, 1000);
  });
}

// async allows us to use await inside this function
async function displayOrder() {

  // try contains code that may produce an error
  try {
    console.log("Checking order status...");

    // Wait for the Promise to resolve or reject
    const message = await checkOrder();

    // Print the success message
    console.log(message);

  } catch (error) {
    // Handle the error if the Promise is rejected
    console.log("Error:", error.message);
  }
}

// Call the async function
displayOrder();








//promise.all()
function getUser() {
  return Promise.resolve(["id: 10","name: Siri"]);

}
function getProducts(){
  return Promise.resolve(["Laptop","Mobile"]);
}
function getOrders(){
  return Promise.resolve([101,102]);
}

//fetch all results
async function loadDashboard(){
  try{
    const [user,products,orders] = await Promise.all([
      getUser(),
      getProducts(),
      getOrders(),
    
    ]);
     console.log("User:", user);
     console.log("Products:", products);
     console.log("Orders:", orders);

  }catch(error) {
    console.log("Failed", error.message);
  }
}
loadDashboard();



//custom error
//example


class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name ="validationError";
  }
}

//validation function
function validateAge(age) {
  if(age <18) {
    throw new ValidationError("Age must be 18 OR above");
  }
  return "Age is valid";
}


// Handle the custom error

try{
  console.log(validateAge(16));

}catch(error) {
  if (error instanceof ValidationError) {
    console.log(error.name + ":", error.message);
  }else{
    throw error;  //pass unexpected error onward
  }
}






//
