

let getPerson = () => {
    fetch(`https://randomuser.me/api/`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response);
            }
        }).then((data) => {
            buildPerson(data);
            console.log(data);
    })
        .catch((error) =>{
            console.error(error);
        }).finally(() => {
        console.log('Successfully completed!')
        });

};

getPerson();


// build 
let buildPerson = (data) => {
    let person = data.results[0];
    let personDiv = document.getElementById('person');
    personDiv.innerHTML = `

    <div class="card" style="">
            <img class="card-img-top" src="${person.picture.medium}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${person.name.first} ${person.name.last}</h5>
            <p class="card-text"></p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item"><i>Email:</i> ${person.email}</li>
            <li class="list-group-item"> <i>Address:</i> <br>
            ${person.location.street.number} ${person.location.street.name}<br>
            ${person.location.city}, ${person.location.state} ${person.location.postcode}  ${person.location.country}
            </li>
            <li class="list-group-item"><i>Work Phone:</i><br> ${person.phone}</li>
            <li class="list-group-item"><i>Cell Phone:</i><br> ${person.cell}</li>
            <li class="list-group-item"><i>ID:</i><br> ${person.login.uuid}</li>
            <li class="list-group-item"><i>SSN:</i><br> ${person.id.value}</li>
            <li class="list-group-item"><i>Username:</i><br> ${person.login.username}</li>
            </ul>
        

            `;
};
