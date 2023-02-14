const mongoose = require('mongoose')

const professores = mongoose.model('Professores', {
    NOME:String,
    EMAIL_PRINCIPAL:String,
    EMAIL_SECUNDARIO:String,
    DEPARTAMENTO:String,
    CENTRO:String,
    LINHA_DE_PESQUISA:String
})

module.exports = professores