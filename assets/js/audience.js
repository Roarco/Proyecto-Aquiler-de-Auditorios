const URL =
    "https://g809461e5a992bc-pudgjcmoed3aisa4.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/";
const serviceAudience = new ServiceAudience();
let action = "create";

(async function () {
    try {
        const data = await serviceAudience.getall(URL);
        const tbody = document.querySelector("tbody");
        data.forEach((element) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
        <th scope="row">${element.id}</th>
        <td>${element.owner}</td>
        <td>${element.capacity}</td>
        <td>${element.category_id}</td>
        <td>${element.name}</td>
        <td> <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="setFormAudience(${element.id})" >
        Edit
        </button></td>
        <td> <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="deleteAudience(${element.id})">
        Delete
        </button></td>
        `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.log(error);
    }
})();

async function deleteAudience(id) {
    try {
        const response = await serviceAudience.delete(URL, id);
        location.reload();
    } catch (error) {
        console.log(error);
    }
}

//creamos una funcion para setear los datos del formulario
async function setFormAudience(id) {
    try {
        const audience = await serviceAudience.getbyid(URL, id);
        const idAudience = document.getElementById("id");
        idAudience.disabled = true;
        const owner = document.getElementById("owner");
        const capacity = document.getElementById("capacity");
        const category_id = document.getElementById("category_id");
        const name = document.getElementById("name");
        idAudience.value = audience[0].id;
        owner.value = audience[0].owner;
        capacity.value = audience[0].capacity;
        category_id.value = audience[0].category_id;
        name.value = audience[0].name;

        action = "update";
    } catch (error) {
        console.log(error);
    }
}

//creamos una funcion para enviar los datos del formulario
async function sendFormAudience() {
    try {
        const idAudience = document.getElementById("id");
        const owner = document.getElementById("owner");
        const capacity = document.getElementById("capacity");
        const category_id = document.getElementById("category_id");
        const name = document.getElementById("name");
        const audience = {
            id: parseInt(idAudience.value),
            owner: owner.value,
            capacity: parseInt(capacity.value),
            category_id: parseInt(category_id.value),
            name: name.value,
        };
        if (action == "create") {
            const response = await serviceAudience.create(URL, audience);
        }
        if (action == "update") {
            const response = await serviceAudience.update(URL, audience);
        }
        location.reload();
    } catch (error) {
        console.log(error);
    }
}

