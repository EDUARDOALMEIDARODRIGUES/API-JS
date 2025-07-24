// frontend/src/App.jsx
import { useState, useEffect } from 'react';
import '../css/index.css'; // ou App.css se for o caso

function App() {
  const [message, setMessage] = useState('');

  // Exemplo de requisição GET ao backend
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        // A URL do seu backend. Mude para a porta correta se for diferente de 3001
        const response = await fetch('http://localhost:3001/api/mensagem');
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error('Erro ao buscar mensagem do backend:', error);
        setMessage('Erro ao carregar mensagem.');
      }
    };

    fetchMessage();
  }, []); // O array vazio garante que o useEffect rode apenas uma vez, após a montagem do componente

  return (
    <div className="App">
      <h1>Frontend React</h1>
      
      <section>
        <h2>Mensagem do Backend:</h2>
        <p>{message}</p>
      </section>

    </div>
  );
}

export default App;