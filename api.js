async function enviar(){

    const form = document.querySelector('#formulario'); 
    
    form.addEventListener("submit", async event => {
        event.preventDefault();
        const formData = new FormData(form);
        //formData.append('nome', document.querySelector("#nome").value);
        const data = await fetch('http://localhost:8080/gravador', {
            method: 'POST',
            mode:   'no-cors',
            body:   formData
        });

        const response = await data.json();
        console.log(formData);
    });

    
    
    /*
    var form = new FormData(document.getElementById("formulario"));
        fetch(rota, {
            method: "POST",
            body: form,
            
        });
    */
    /*
    const formulario = document.querySelector("#formulario");
    const nome = document.querySelector("#nome");
    const idade = document.querySelector("#idade");

    formulario.addEventListener("submit", async (e) => {
        e.preventDefault();

        var formData = {
            nome: nome.value,
            idade: idade.value
        }

        const request = new Request (rota, {
            method: 'POST',
            mode:'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: formData,
        });

        const response = await fetch(request);
        
        console.log(response);
    });
    */
}