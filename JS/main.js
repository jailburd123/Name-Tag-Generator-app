

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
        
        
        <p class="card-text">${person.email}</p>
        <p class="card-text">${person.phone}</p>
        <p class="card-text">${person.location.street.number} ${person.location.street.name}</p>
        <p class="card-text">${person.location.city}, ${person.location.state} ${person.location.postcode}</p>
        <p class="card-text">${person.location.country}</p>
        
        <p class="card-text">${person.dob.age}</p>
        <p class="card-text">${person.dob.date}</p>
        <p class="card-text">${person.registered.date}</p>
        <p class="card-text">${person.registered.age}</p>
        <p class="card-text">${person.nat}</p>
        
            `;
};
