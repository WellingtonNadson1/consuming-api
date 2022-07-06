async function getContent(){
    let url = 'http://localhost:3000/'
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        show(data)

    } catch (error) {
        console.error(error)
    }
    
}

getContent()


function show(data) {
    document.getElementById('root').innerHTML = data.films.map(film => `<p>${film}</p>`)
}

