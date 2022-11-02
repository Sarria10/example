const tarjetas = document.querySelector('.contenido')
const spinner = document.querySelector('.lds-spinner')

document.addEventListener("DOMContentLoaded", consultarAPI)

function consultarAPI() {

    setTimeout(() => {
        spinner.remove() ; 
    }, 3000);

    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => { return response.json()})
        .then(usuarios => {mostrarPerfiles(usuarios)})
    }, 3001);
}

function mostrarPerfiles(usuarios) {
    // console.log(usuarios)

    usuarios.forEach(perfil => {
        
        const { id, name, username, email, address:{ city, street, zipcode } } = perfil
        // console.log(perfil)
        tarjetas.innerHTML += `
            <div class="tarjetas">
                <img class='imagen' src="./assets/${id}.png">
                <p><strong>id:</strong> ${id} </p>
                <p><strong>Name:</strong> ${name} </p>
                <p><strong>Username:</strong> ${username} </p>
                <p><strong>Email:</strong> ${email} </p>
                <p><strong>Address:</strong> Street ${street} in the city of ${city} / Zipcode: ${zipcode} </p>
            </div>
        `
    });
}