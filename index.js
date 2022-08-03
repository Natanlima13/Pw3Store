const express = require ('express');

const app = express ();

const rotas = express.Router();
app.get('/',(req,res)=>{
    console.log('rota raiz');
    res.send('rota raiz de verbo http get!')
});



app.listen(3000,()=>{
    console.log('servidor rodando em: http://localhost:3000')
});
