const promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Hahahahahah")
    }, 2000);
})


promise.then((value)=>{
    console.log(value)
})


console.log(promise)