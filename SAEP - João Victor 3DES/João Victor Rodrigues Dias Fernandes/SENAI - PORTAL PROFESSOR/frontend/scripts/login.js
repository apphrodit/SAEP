const email = document.querySelector("#email");
const senha = document.querySelector("#senha");

function autenticar(){
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    if(email == "<EMAIL>" && senha == "<PASSWORD>"){
        
        window.location.href = "home.html";
        
        
    }else{
        alert("Senha incorreta ");
    }
}
