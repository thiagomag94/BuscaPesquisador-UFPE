const express = require('express')
const fs = require('fs')
const csv = require('csv-parser')
const { urlencoded, json } = require('express')
const { default: mongoose } = require('mongoose')
const professoresdb = require('./mongo')
const app = express()
const PORT = 3004
app.use(express.urlencoded({
    extended: true
    })
)

app.use(express.json())


const professores = []

//conexão com banco
const DB_USER = 'thiago'
const DB_password = encodeURIComponent('FbVm2K35zb2A9Pt')

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_password}@databaseufpe.xpguxkd.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    app.listen(3000)
    console.log('Mongo DB conectado!!!')
})
.catch((err)=>{
    console.log(err)
})

//leitura do csv
fs.createReadStream('database.xlsx')
    .pipe(csv())
    .on('data', (rows)=>{
        professores.push(rows)
    }).on('end', ()=>{  
    })

//rotas da api
app.post('/banco', (req,res)=>{
    try{
        console.log
        professores.map(async(professor)=>{
            await professoresdb.create(professor)
        })
        
        res.status(201).json({message: 'Conectado com sucesso'})
    } catch(error){
        res.status(500).json({ error: error})
    }

})
app.get('/', async(req, res)=>{
    try{
        const resultado_query = await professoresdb.find()
        res.json({data: resultado_query})
    }catch(error){
        res.status(500).json({ error: error})
    }
   
    
})
    
app.get('/professor', (req, res)=>{
    const nome = req.query.nome
    const arrayfiltered = professores.filter(professor=> professor.NOME === nome)
    res.json({professor: arrayfiltered[0]})
    
})


app.listen(PORT, ()=> {
    console.log(`Server running, PORT ${PORT}`)
})

