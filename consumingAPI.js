async function getContent(){
    let url = 'https://swapi.dev/api/people/1/'
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

