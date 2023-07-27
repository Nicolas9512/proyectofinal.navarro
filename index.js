console.log("calculadora")


let paso = prompt("elige el paso que deseas, \n 1-suma \n 2-resta \n 3-multiplicacion \n 4-division")
let A = prompt ("acciona el primer numero del paso")
let B = prompt ("acciona el segundo numero del paso")

while (paso !=4){

    switch (paso){

        case 1:
        console.log(A + B)
        break;

      case 2:
      console.log(A - B)
      break;

      case 3:
        console.log(A * B)
        break;

        case 4:
            console.log(A / B)
            break;

    }

}

const array = [1,2,3,4,5,6];
let total =0;

const recorrerArray = (Array, fn) =>{
for(let A=0; i < Array.length; A++){

  function Array ([A]);
}
}

function acumular(num){

  total=total + num
}

const loginbutton = Document.getElementById("login-button");
console.log(buttonlogin);

buttonlogin.addEventListener("click",() =>{
  alert("BOTON");
})



const bbdd = [{

  usuario: ''
  contraseña: ''
  

}]

const user = {
  usuario: ''
  contraseña:  ''
}
const buttonlogin = document.getElementById("login-button");
const app = document.querySelector("app");

const bienvenidaAlUsuario = usuriologueado => {
  app.innerHTML = '<h1>Bienvenido sr/sra ${usuariologueado.usuario}</h1>'
}
buttonlogin.addEventListener("click",()=>{
  const usuarioEncontrado = bbdd.find(el =>el.usuario === user.usuario && el.contraseña === user.contraseña)
  if(usuarioEncontrado){
    bienvenidaAlUsuario(usuarioEncontrado);
  }else{
    console.log("No se encontro usuario")
  }
}
);

const inputs = document.querySelectorAll("imput");
inputs.forEach( (elemento) =>{

  elemento.addEventListener("input",(e)=>{
    if(e.target.name == "usuario"){
      user.usuario = e.target.value
    }
   if(e.target.name == "contraeña"){
    user.contraseña = e.target.value
   }


  }
  )
}
)
localStorage.setItem("autenticacion",true);
localStorage.setItem("galeria","ver fotos");

const isAuth = localStorage.getItem("autenticacion");
console.log(isAuth);
 
localStorage.setItem("Ver galira",JSON.stringify(ArrayCalculadora))

const button = document.querySelector("#Reintentar")
console.log(button);
button.addEventListener("click",()=>{
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((Response)=>{return Response.json()})
  .then((res)=>{
const div = document.createElement("div")

  })
   .catch((Error)=> console.log(Error))
})









