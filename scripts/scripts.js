// homework: create random user generator with random user api and display results on the page.

fetch ('https://randomuser.me/api/')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    displayUserDate(data)
})

function displayUserDate(obj){
    const user_container = document.querySelector(".user_container")
    const refreshButton = document.createElement("button")
    refreshButton.classList.add("refreshButton")
    refreshButton.innerText = "Get new user"
    refreshButton.type = "submit"
    refreshButton.addEventListener("click", loadNewUser)
    
    obj.results.forEach(element => {
        const card = document.createElement("div")
        card.classList.add("card")

        const name = document.createElement("h2")
        name.classList.add("name")

        const gender = document.createElement("p")
        gender.classList.add("gender")

        const id = document.createElement("p")
        id.classList.add("id")

        const cell = document.createElement("p")
        cell.classList.add("cell")

        const email = document.createElement("p")
        email.classList.add("email")

        const login = document.createElement("p")
        login.classList.add("login")

        const location = document.createElement("p")
        location.classList.add("location")

        const timezone = document.createElement("p")
        timezone.classList.add("timezone")

        const dob = document.createElement("p")
        dob.classList.add("dob")

        const registered = document.createElement("p")
        registered.classList.add("registered")

        const img = document.createElement("img")
        img.classList.add("img")

        name.innerText = "Full Name: " + element.name.title + " " + element.name.first + " " + element.name.last
        gender.innerText = "Gender: " + element.gender
        id.innerText = "ID number: " + element.id.name + " " + element.id.value
        cell.innerText = "Phone: " + element.phone + " " + "Cell: " + element.cell
        email.innerText = "Email: " + element.email
        login.innerText = "User name: " + element.login.username  + " User password: " + element.login.password
        location.innerText = "Country: " + element.location.country + ", " + " State: " + element.location.state + ", " + " Street: " + element.location.street.name + ", " +  " Number: " + element.location.street.number + ", " + "Postcode: " + element.location.postcode
        timezone.innerText = "Timezone: " + element.location.timezone.description
        dob.innerText = "Date Of Birth: " + element.dob.date + " Age: " + element.dob.age
        registered.innerText = "Registered: " + element.registered.date
        img.src =element.picture.medium

        user_container.appendChild(card)
        card.appendChild(name)
        card.appendChild(gender)
        card.appendChild(id)
        card.appendChild(cell)
        card.appendChild(email)
        card.appendChild(login)
        card.appendChild(location)
        card.appendChild(timezone)
        card.appendChild(dob)
        card.appendChild(registered)
        card.appendChild(img)
        user_container.appendChild(refreshButton)
    });
}

function loadNewUser (){
    const user_container =document.querySelector(".user_container")
    user_container.innerHTML = ''

    fetch('https://randomuser.me/api/')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        displayUserDate(data)
    })
}