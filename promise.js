Promise((resolve, reject) =>{})
const promise1 = new Promise((resolve, reject)=>{
    let success = false;
    if(success){
        resolve({
            id: 68996,
            username: "John Doe",
        });
    } else{
        reject(new Error("Data not fetched"))
    }
});
// promise1
// .then((response) => {
//     console.log(response)
// })
// .catch((error) => {
//     console.error(error)
// });
// const promise2 = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve({
//             id: 68997,
//             username: "New Delhi",
//         });
//     } else{
//         reject(new Error("Order not fetched"));
//     }
// });
// Promise.all([promise1, promise2])
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })
// Promise.allSettled([promise1,promise2])
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })
function fetchUserData(){
    return new Promise((resolve, reject) => {
        let success = false;
        if(success){
            resolve({
                id: 659639,
                username: "john doe",
            });
        } else {
            reject(new Error("Data not Fetched"));
        }
    });
async function getUser(){
    try{
        const user = await fetchUserData();
    console.log(user);
   }
    catch(error){
        console.log('Error: ${error.message}');
    }
}
getUser();1