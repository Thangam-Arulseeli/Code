console.log('A')

Promise.resolve().then(() => console.log('B'))

setTimeout(() => {
  console.log('C')
}, 1000)

process.nextTick(() => console.log('D'))

setTimeout(() => {
  console.log('E')
}, 1000)

console.log('F')

setImmediate(() => {
  console.log('G')
})

// Output
// A F 
//D (will process Next Event Loop Iteraton. nextTick() callbacks are executed before timers in the event loop order// )
// B(Promise to wait other task in the list to complete)
//G (setImmediate()) - This method is used to break up long running operations and run a callback function immediately after the browser has completed other operations
// C E

// setImmediate() is to schedule the immediate execution of callback after I/O events callbacks and before setTimeout and setInterval 
// What is the difference between setImmediate and nextTick?

//Difference between process.nextTick() and setImmediate ...
//process. nextTick() runs code immediately after the current operation, before any I/O tasks or timers, making it ideal for urgent tasks. setImmediate() schedules code to run after the current event loop phase, particularly after I/O tasks, ensuring smoother execution flow.

// What is the priority of setImmediate and setTimeout?
//js used for executing code asynchronously. setImmediate() is used to schedule a function to be executed after the current event loop iteration completes. It has a lower priority than I/O events, but a higher priority than setTimeout().

// What is the difference between nextTick and setTimeout?
// setTimeout() delays your callback, as it first has to give the browser control by using it and only then back to you when its calls your callback function. 👁 As you can see, nextTick() is executed before setTimeout() . This is why using nextTick() will be more performant as it will be run faster!

//What is Promise and callback in JavaScript?
//While both Promises and Callbacks serve the same purpose of handling asynchronous operations, Promises offer a more organized, readable, and manageable way to write code. Promises resolve the issues associated with nested callbacks and provide better error handling.

// What is Promise and async await?
//Difference Between Promise and Async/Await - Naukri Code 360
//Introduction. In JavaScript, a promise represents the eventual completion or failure of an asynchronous operation. Async/await simplifies writing asynchronous code, offering a more readable and concise syntax. To improve the user experience and fast rendering, we use asynchronous functions.

//What are the 3 states of a JavaScript Promise?
//States of a JavaScript Promise
//A JavaScript Promise object can be in one of three states: pending , resolved , or rejected . While the value is not yet available, the Promise stays in the pending state