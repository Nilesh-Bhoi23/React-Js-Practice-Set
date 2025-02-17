let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if(success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed!");
    }
  });
  
  myPromise
    .then(result => console.log(result)) // .then() handles the resolved value
    .catch(error => console.error(error)); // .catch() handles the error
  