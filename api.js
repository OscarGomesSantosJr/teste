async function enviar(){
    //const rota = "http://localhost:8080/gravador";

    //const response = await fetch(rota);

    const formulario = document.querySelector("#formulario");
    const nome = document.querySelector("#nome");
    const idade = document.querySelector("#idade");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let dados = {
            nome: nome.value,
            idade: idade.value
        }
        
        dados = JSON.stringify(dados);
        console.log(dados);
        alert(dados);
    });
}