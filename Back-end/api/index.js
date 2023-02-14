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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json())
const professores = []

//conexão com banco
const DB_USER = 'thiago'
const DB_password = encodeURIComponent('FbVm2K35zb2A9Pt')

//tirar o warning 
mongoose.set("strictQuery", false);

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_password}@databaseufpe.xpguxkd.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    app.listen(3000)
    console.log('Mongo DB conectado!!!')
})
.catch((err)=>{
    console.log(err)
})

//leitura do csv
/*fs.createReadStream('database.xlsx')
    .pipe(csv())
    .on('data', (rows)=>{
        professores.push(rows)
    }).on('end', ()=>{  
    })*/

//rotas da api

app.get('/', async(req, res)=>{
    try{
        const resultado_query = await professoresdb.find()
        res.json({data: resultado_query})
    }catch(error){
        res.status(500).json({ error: error})
    }
   
    
})
    
app.post('/professor', async(req, res)=>{
    try{
        const resultado_query = await professoresdb.find()
        const nomeRequested = req.body.professores
        const arrayfiltered = resultado_query.filter(professor=>  nomeRequested.includes(professor.NOME))
        if(arrayfiltered.lenght === 0){
            res.json({error: "Nome não encontrado"})
        }else{
            res.json({professores:arrayfiltered})
    }
        
    }catch(error){
        res.status(500).json({ error: error})
    }
    
    
    
})


app.listen(PORT, ()=> {
    console.log(`Server running, PORT ${PORT}`)
})

