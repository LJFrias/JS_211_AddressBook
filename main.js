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
        
        <h4 class="names">${person.name.first}  ${person.name.last}</h4>
        <img class="portrait" src="${person.picture.large}">
            
        <div class="moreInfo" id="toggle${i}">
        Location: ${person.location.city} ${person.location.country} <br>
        Email: ${person.email}<br>
        Phone: ${person.phone}
        </div>
        <button onclick="showHide(${i})">More Info/LessInfo</button>
        
        `;
        
        

    addressList.insertAdjacentHTML("afterbegin", html);
    })
})
}

function showHide(i) {
  
    let x = document.getElementById(`toggle${i}`);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }