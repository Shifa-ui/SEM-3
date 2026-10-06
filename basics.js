console.log("SYNCHRONOUS START");
for(let i=1; i<=10; i++){
    console.log(`${i}`)
}
console.log("SYNCHRONOUS END");
console.log("ASYNCHRONOUS START");
setTimeout(() => {
    console.log("Sup People!!")
}, 1000);
console.log("ASYNCHRONOUS END");

//architecture of nodejs
// // execution order
setTimeout(() => console.log("MacroQueue"), 0);
Promise.resolve().then(() => {
    console.log("MicroQueue")
});

//no of queues in nodejs
// 1. MicroQueue
// 2. MacroQueue

//no of phases in nodejs
// 1. Timers
// 2. I/O Callbacks
// 3. Check
// 4. Close Callbacks
// 5. Poll
// 6. Idle, Prepare
 import fs from 'fs'
 
 const promise1