const menu = document.querySelector('.menu')


fetch('https://api.sampleapis.com/rickandmorty/characters')
.then((res) => res.json())
.then((res) => {
    res.forEach((item) => {
        menu.innerHTML += `
            <div class="card">
                <img class="card_image" src="${item.image}">
                <p class="card_name">${item.name}</p>
            </div>
        `
    })
})
