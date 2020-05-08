// definicion de la promesa
const doWorkPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        //resolve([3,2,6,7]);
        reject('Algo malo paso');
    }, 2*1000);
}); 

// invocacion de la promesa
doWorkPromise
.then((result) => {
    console.log("Success", result);
})
.catch(error => {
    console.log("Error!", error);
});


