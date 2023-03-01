window.onload  = function() {
    getContacts()
}

let addressList = document.getElementById("container")

const API = 'https://randomuser.me/api/?results=5'

const getContacts = () => {
    fetch(API)
    .then(res => {
        if(!res.ok) {
            throw Error(res.statusText)
        } return res.json()
    })
    .then (data => people = data.results)
    .catch (err => console.log(`Error, ${err}`))
    .then (people => {people.map((person, i) => {
        let html = `
        <h4>${person.name.first}  ${person.name.last}</h4>
        <img class="portrait" src="${person.picture.large}">
        <div id="moreInfo">
            address, email, phone,
            </div>
        <button onclick>More Info/ Less Info</button>
        `;

    addressList.insertAdjacentHTML("afterbegin", html);
    })
})
}