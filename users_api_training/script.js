function getRandomColor() {

    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}

async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const userData = await response.json();
        console.log(userData);
        const styleTag = document.createElement('style');
        document.head.appendChild(styleTag);

        
        userData.forEach((user, index) => {
            const randomColor = getRandomColor();
            const cssRule = `
                .tilesWrap li:nth-child(${index + 1}):before {
                    background: ${randomColor};
                    background: -webkit-linear-gradient(to right, ${randomColor}, ${randomColor});
                    background: linear-gradient(to right, ${randomColor}, ${randomColor});
                }
            `;
            styleTag.appendChild(document.createTextNode(cssRule));
            document.querySelector('#userInfo').innerHTML += 
                `
                <li>
                    <h2>${user.id}</h2>
                    <h3>${user.name}</h3>
                    <p>${user.phone} <br> ${user.email} <br> ${user.email}</p>
                    <button class="more">Read more</button>
                </li>
            `;
        });
        document.querySelectorAll(".more").forEach(button => {
            button.addEventListener('click', () => {
                alert('Not implemented yet');
            });
        });
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
    }
}
fetchUserData();