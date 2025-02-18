import http from 'node:http'
import { stringify } from 'node:querystring'

// - HTTP
//  - metodo HTTP
// - url

//GET , POST, PUT , PATCH, DELETE

//GET => buscar um recurso back-end
//POST => Criar um recurso back-end 
//PUT => Atualizar um recurso do back-end 
//Patch => Atualizar uma informacao especifica de um recurso no back-end
//DELETE => Delteetar um recurso no back-end

//GET /USERS => Buscando usuarios no back-end
//POST /users => Criar um usuario no back-end

//stateful - stateless

//JSON - javascript Object notation

//Cabecalhos (requisicao/resposta) => Metadados

const users = []

const server = http.createServer((req, res ) => {
    const { method, url } = req 

    if (method === 'GET' && url === '/users') {
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }

    if(method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'Jhon doe',
            email: 'jhondoe@gmail.com',
        })
        
            return res.writeHead(201).end() 
        }
    

    return res.writeHead(404).end('NOT FOUND')
})

server.listen(3333)