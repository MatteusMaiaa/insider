import http from 'node:http'
import { json } from '../streams/json.js'
import { Database } from './database.js'


const database = new Database()

const server = http.createServer(async (req, res ) => {
    const { method, url } = req 

  await json(req, res)
    
    if (method === 'GET' && url === '/users') {
       const users = database.select('users')
       
        return res.end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        const { name, email } = req.body;
    
        const user = { 
            id: 1,
            name: name,  // Usando os dados passados no corpo da requisição
            email: email,
        };
        
        database.insert('users', user); // Inserindo o usuário na base de dados
    
        return res.writeHead(201).end(); // Retornando sucesso
    }
    

    return res.writeHead(404).end('NOT FOUND')
})

server.listen(3333)







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