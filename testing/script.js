// pending promise
let promise = new Promise(function(){
    console.log("Promise");
})


console.log(promise)

let mypromise = new Promise((resolve,reject)=>{
    resolve([12,12,34,45,])
})

console.log(mypromise)

mypromise.then(()=>{
    return [6789]  // return a value from the function
}).catch(console.error())




async function waitForData(){
    
}
