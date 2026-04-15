import express from 'express' ;

import dotenv from 'dotenv';

dotenv.config();

const app = express() ;
const PORT = process.env. PORT || 3000;

// Middleware para ler JSON
app.use(express.json());

// Rota de teste

app.get ('/', (req, res) => {
    res. json({
        message : 'Rodando',
        status: 'OK'
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});