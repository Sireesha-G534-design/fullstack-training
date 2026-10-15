// catch certain error
"use strict";


// configure json data
const CONFIG = {
    maxAttempts: 3,
    retryDelay: 500,
    highPrice: 55000,

};
const orders =require("./50orders.json");

//custom error
class APIError extends Error {
    constructor(message) {
    super(message);
    this.name ="APIError";
 }
}

//validation

function validateProduct(product) {
  return Boolean(
    product &&
    typeof product.product === "string" &&
    product.product.trim() !== "" &&
    typeof product.price === "number" &&
    Number.isFinite(product.price) &&
    product.price > 0 &&
    typeof product.customerName === "string" &&
    product.customerName.trim() !== "" &&
    typeof product.id === "number" &&
    Number.isFinite(product.id) &&
    product.id > 0
  );
}



// high price of product show

function calculatePrice(price){
    if (!Number.isFinite(price) || price <0){
        throw new Error("Invalid Price");

    }
    return price
}
function classifyPrice(price) {
    if (price >= CONFIG.highPrice) {
        return "High";
    }
    return "Normal"

}


function analyzeProduct(data){

const highPrice = data
  .filter(({ price }) => price >= CONFIG.highPrice)
  .map(({ product, customerName, price }) => ({
    customerName,
    product,
    price: calculatePrice(price),
  }));

    //reduce the total and avarage price

    const totalPrice =data.reduce(
        (total,product) => total + product.price,
        0
    );

    const averagePrice =data.length 
    ? totalPrice /data.length
    :0;

    //locate the high price
    const topPrice = data.reduce(
        (top,product) => 
           !top || product.price > top.price ? product :top,
        data[0]
    );


    const hasLowPrice =data.some(
        product => product.price < 5500

    );

    const allValid = data.every(validateProduct);


    //group of customernames
    const customerNameGroups = data.reduce((groups, product) => {
        const customerName = product.customerName;
        return {
            ...groups,
            [customerName]: [
                ...(groups[customerName] || []),
                product,
            ],
        };
     }, {});

     //sort without mutating the original array

     const priceRanking = [...data].sort(
        (a,b) => b.price-a.price
     );

     return{
        totalProducts: data.length,
        highPrice,
        totalPrice,
        averagePrice,
        topPrice,
        hasLowPrice,
        allValid,
        customerNameGroups,
        priceRanking,
     };
     
}



//set time 


function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

//api response
function API(apiName,data) {
    return new Promise((resolve,reject) => {
        const responseDelay =Math.floor(Math.random() * 500) + 200;
        setTimeout(() => {
            //Stimulate a 30% failure probability
            if(Math.random() < 0.3){
                reject(new APIError(`${apiName} API failed`));
                
            }else{
                resolve(data);
            }
        }, responseDelay );
    })

}





//retry data of api
async function retryAPI(apiName,data){
    for (let attempt =1; attempt <= CONFIG.maxAttempts; attempt++){
        try{
            console.log(`${apiName}: Attempt ${attempt}`);
            const result =await API(apiName,data);
            console.log(`${apiName}: Success`);
            return result;

        }catch(error){
            console.error(`'${apiName}: ${error.message}`);

            if (attempt === CONFIG.maxAttempts){
                throw new APIError(
                    `${apiName}failed after ${CONFIG.maxAttempts} attempts`
                );
            }


            const waitTime = 
            CONFIG.retryDelay * 2 ** (attempt -1);
            console.log(`Retrying ${apiName} in ${waitTime}ms`);
            await delay(waitTime);
            
        }
    }
}


//mainfunction
async function main(){
    const startTime =Date.now();
    try{
        //promise.allSettled: both operations run concurently
        const results =await Promise.allSettled([
            retryAPI("Products",orders),
            retryAPI(
                "CustomerName",
                [...new Set(orders.map(product => product.customerName))]
         ) ])
         const [productResult,customerNameResult] =results;

         //handle api error independently
         if(productResult.status === "rejected"){
            console.error(
                "Cannot generate product report:",
                productResult.reason.message
            );
            return;
         }

         const productData = productResult.value;
    //seperate valid and invalid records
    const validProducts =productData.filter(validateProduct);
    const invalidProducts = productData.filter(
        product => !validateProduct(product)
    );
    const report =analyzeProduct(validProducts);
    //  show products in dashboard
    console.log("\n========== Product DASHBOARD ==========");

    console.log(`Total products: ${productData.length}`);
    console.log(`Valid products: ${validProducts.length}`);
    console.log(`Invalid products: ${invalidProducts.length}`);

    console.log(`Total  products: ₹${report.totalProducts}`);
   console.log(`Average price: ₹${report.averagePrice.toFixed(2)}`);

    console.log(`Total price: ₹${report.totalPrice}`);
    
// high price of product and name
    console.log("\nHigh price:");
    console.table(report.highPrice);

    console.log("\nPrice ranking:");
    console.table(
      report.priceRanking.map(({ product, price, customerName }) => ({
        product,
        customerName,
        price,
        priceCategory: classifyPrice(price),
      }))
    );
    //show customer group

    console.log("\ncustomerName groups:");
    console.log(
      Object.fromEntries(
        Object.entries(report.customerNameGroups).map(
          ([customerName, records]) => [customerName, records.length]
        )
      )
    );
// 
    if (customerNameResult.status === "fulfilled") {
      console.log("\ncustomerName API:", customerNameResult.value);
    } else {
      console.error(
        "\ncustomerName API error:",
        customerNameResult.reason.message
      );
    }

    console.log("\nInvalid records:", invalidProducts);
    console.log(`Execution time: ${Date.now() - startTime}ms`);
    console.log("========================================");
  } catch (error) {
    console.error("Unexpected dashboard error:", error.message);
  }
}

main()