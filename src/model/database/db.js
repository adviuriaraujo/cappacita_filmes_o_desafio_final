const {databaseConnection} = require('./connection')


//insere comentários no banco de dados
async function inserir (data) {
    const result = await databaseConnection('comment').insert({
        nome: `${data.nome}`,
        comment: `${data.comment}`
    })

    if(result) {
        return {
            nome: data.nome,
            comment: data.comment
        }
    } else {
        console.error("Deu erro!")
        return {
            error: "Deu erro na inserção"
        }
    }
}


//pega comentários do banco de dados
async function exibir () {
    const result = await databaseConnection('comment').orderBy('id', 'desc').select('nome', 'comment').limit(10)
    
    return result
}

module.exports = {inserir, exibir}