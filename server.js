import cors from 'cors'
import express from 'express'
const app = express()
const router = express.Router()
const port = '3000'
import axios from 'axios'
import fetch from 'node-fetch'

// Para adicionar o __dirneme e __filename é necessário add 
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// Outhre method 
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

app.use(cors())

// CONSUMINDO UMA API EXTERNA COM AXIOS E FORNECENDO A MINHA ROTA GET
router.get('/', async (req, res) => {
    const url = 'https://swapi.dev/api/people/1/'
    const { data } = await axios(url)

    return res.json(data)
})


// Consumindo uma API externa com node-fetch e disponibilizando para o front
// router.get('/', async (req, res) => {

//         try {
//             const response = await fetch('https://swapi.dev/api/people/1/')
//             const data = await response.json()
//             // console.log(data)
//             return res.json( data )

//         } catch (error) {
//             console.error(error)
//         }
// })


// router.get('/', (req, res) => {
//     return res.json([
//         {name: 'Wellington'},
//         {name: 'Nadson'},
//     ])
// })


// Renderizando um HTML para o Server
// router.get('/', (req, res) => res.sendFile(__dirname+'/index.html'))

app.use('/', router)
app.listen(port, () => console.log(`server runing at port ${port}`))