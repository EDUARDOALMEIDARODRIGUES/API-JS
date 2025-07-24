import express from 'express';
import cors from 'cors';
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 3001; // Porta do backend, padrão 3001

// Middlewares
app.use(cors()); // Permite que qualquer origem acesse sua API durante o desenvolvimento
app.use(express.json()); // Permite que o Express entenda JSON no corpo das requisições

// Rota de exemplo
app.get('/api/mensagem', (req, res) => {
    res.json({ message: 'Olá do backend Node!' });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor backend rodando em http://localhost:${PORT}`);
});