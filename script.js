// async function myfunc(){
//     // console.log("Test")
//     // let message ="Promise resolved"
//     return  Promise.resolve("Promise  vvvv is resolved")
// }

// myfunc()
// .then(console.log)

// async function greeting (){
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(() => resolve("I am async and await keywords"), 2000);
//     })

//     let result = await promise 
//     console.log(result)

// }

// greeting()

// async function fetchingData(){
//     let response=await fetch('https://jsonplaceholder.typicode.com/todos')
//     console.log(response)
//     let userData = await response.json()
//     console.log(userData)
// }

// fetchingData()

// function loadData(url){
//     return fetch(url).then(response=>{
//         if(response.status=== 200){
//             console.log(response)
//             return response.json()
//         }
//         else(
//             new Error(response.status)
//         )
//     })
// }

// loadData("https://jsonplaceholder.typicode.com/todos").catch(alert);


// Reading data from github users



// https://api.github.com/users


async function githubUsers(){
    let response = await fetch('https://api.github.com/users')
    console.log(response)
    let data = await response.json()
    console.log(data)
    console.log(data[0].avatar_url);
     let display = " ";
    data.map((values)=>{
        display += ` <div class="cards">
            <img src=${values.avatar_url} alt=${values.login}>
            <h1>${values.login}</h1>
        </div>`;

    })
    document.getElementById("root").innerHTML = display;
   const displayMessage = await new Promise((resolve,reject)=>{
        setTimeout(resolve, 2000);
        console.log("All data is being displayed")
    })
    document.getElementById("title").textContent=displayMessage
}

githubUsers()