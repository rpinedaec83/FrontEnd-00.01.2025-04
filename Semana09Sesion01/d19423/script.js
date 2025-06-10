console.log("Inicio de la Aplicacion");

// setTimeout(()=>{
//     console.log("Esto es asincrono")
// }, 3000);


// function saludar(nombre, callback){
//     console.log("Hola "+ nombre);
//     callback();
// }

// saludar("Roberto", ()=>{
//     console.log("Fin del saludo")
// })

//CALLBACKS

function miCallback(resultado){
    document.getElementById("demo1").innerText= resultado;
    document.getElementById("demo2").innerText = "Listo";
}

function calculadora(num1, num2, miCallback){
    document.getElementById("demo2").innerText = "Procesando"
    setTimeout(()=>{
        miCallback(num1+num2)
    },5000)
}

calculadora(5,5,miCallback);


//PROMESAS

let miPromesa = new Promise((resolve, reject)=>{
    try {
       // throw "Tuve un error 404 4n la api"
        setTimeout(()=>{
            resolve("Ejecutado");
        }, 3000)
    } catch (error) {
        reject(error)
    }
})

miPromesa.then(respuesta=>console.log(respuesta)).catch(error=>console.error(error));


async function MiAsyncFunction() {
    let promesa = new Promise((resolve, reject)=>{
        try {
            let req = new  XMLHttpRequest();
            req.open("GET","https://jsonplaceholder.typicode.com/posts",true);
            req.onload = ()=>{
                if(req.status=200){
                    setTimeout(()=>{
                        resolve(req.response)
                    }, 4000)
                }
                else{
                    reject("Hubo un error")
                }
            }
            req.send();
        } catch (error) {
            reject(error)
        }
        
    });

    document.getElementById("demo3").innerText = "Cargando...";
    let resultado = await promesa;
    document.getElementById("demo3").innerText = resultado;
    return resultado;
}

MiAsyncFunction();

function getFetch(){
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => res.json())
        .then(data=> console.log(data))
        .catch(err => console.log(err))
}

getFetch();

console.log("Fin de la aplicacion");



let frmDatos =document.getElementById("frmDatos");

frmDatos.addEventListener("submit", (e)=>{
    e.preventDefault();

    let txtUsuario = document.getElementById("txtUsuario").value;

     fetch(`https://api.github.com/users/${txtUsuario}`)
        .then(res => res.json())
        .then(data=>{
            let txtUserName = document.getElementById("txtUserName");
            txtUserName.innerText = data.login;

            let txtTitle = document.getElementById("txtTitle");
            txtTitle.innerText = data.bio;

            let imgUser = document.getElementById("imgUser");
            imgUser.src = data.avatar_url

            let divPersona = document.getElementById("Persona");
            divPersona.style.display = "block";

        })
        .catch(err => console.log(err))
})




console.log("Fin de la aplicacion");

