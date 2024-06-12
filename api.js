async function enviar(){
    const rota = "http://localhost:8080/gravador";

    const formulario = document.querySelector("#formulario");
    const nome = document.querySelector("#nome");
    const idade = document.querySelector("#idade");

    formulario.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = {
            nome: nome.value,
            idade: idade.value
        }
        alert(formData);
        
        //console.log(dados);

        const request = new Request (rota, {
            method: 'POST',
            mode:'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const response = await fetch(request);

        console.log(response);
    });
}