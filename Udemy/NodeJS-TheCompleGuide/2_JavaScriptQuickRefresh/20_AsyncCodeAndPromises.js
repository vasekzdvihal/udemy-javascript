setTimeout(() => {
  console.log('Timer is done!');
}, 2000); // Async code

// Callback function is a function that is executed after a certain task has been completed
console.log('Hello!');
console.log('Hi!');

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 1500);
  });
  return promise;
}

setTimeout(() => {
  console.log('Timer is done!');
  fetchData().then(text => {
    console.log(text);
    return fetchData();
  })
  .then(text2 => {
    console.log(text2);
  });
});

// Promise is an object that is used as a placeholder for the future result of an asynchronous operation
// Promise has 3 states: pending, resolved, rejected
// Promise is created using the new keyword
// Promise takes a function as an argument

