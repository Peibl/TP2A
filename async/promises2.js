
function resolver2segundos(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Listo!');
        }, 2*1000);
    });
}

async function asyncCall(){
    console.log('Llamanda...');
    const resultado = await resolver2segundos();
    
    console.log(resultado);
}

asyncCall();