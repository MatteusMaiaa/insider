// { "users": }

export class Database {
    database = {}

   select(table) {
    const data = this.database[table] ?? []
    
    return data
}

   insert(table, data) {
    if (Array.isArray(this.database[table])) {        //se tiver um array dentro dessa tabela ele vai so adicionar o item na tabela
        this.database[table].push(data)                //se nnao ele vai criar um novo array com o item dentro dessa tabela
    } else {                                
        this.database[table] = [data]
    }
    return data;
    }
}