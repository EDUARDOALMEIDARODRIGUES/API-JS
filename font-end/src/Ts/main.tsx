import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Header from "./Header.tsx";
import ContApi from './ContApi.tsx';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContApi />  
    <header className="header ease-out z-10 
    mx-auto max-h-[100vh] bg-cover bg-no-repeat transition-all duration-[850ms] md:h-[100px]">
      <div className="absolute max-w-[full] h-full inset-0 bg-black opacity-50" />
      <Header />
      <App />
      <h1>
        Como vai querer seu pedido ?
     </h1>
    </header>
    <main>
      
    </main>
   </StrictMode>
);
