async function enviar(){
    const rota = "http://localhost:8080/gravador";

    const formulario = document.querySelector("#formulario");
    const nome = document.querySelector("#nome");
    const idade = document.querySelector("#idade");

    formulario.addEventListener("submit", async (e) => {
        e.preventDefault();

        let dados = {
            nome: nome.value,
            idade: idade.value
        }
        
        dados = JSON.stringify(dados);
        //console.log(dados);
        alert(dados);

        const response = await fetch(rota, {
            method: 'POST',
            mode:'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: dados,
        });
        const data = await response.json();

        console.log(data);
    });
}