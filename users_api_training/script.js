
function fetchUserData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(userData => {
            console.log(userData);
            userData.map(user =>{
                document.querySelector('#userInfo').innerHTML += 
                `
                <li>
                    <h2>${user.id}</h2>
                    <h3>${user.name}</h3>
                    <p>${user.phone} <br> ${user.email} <br> ${user.email}</p>
                    <button>Read more</button>
                </li>
            `
            })
        })
        .catch(error => console.error('Erro ao buscar usuário:', error));
}

fetchUserData()