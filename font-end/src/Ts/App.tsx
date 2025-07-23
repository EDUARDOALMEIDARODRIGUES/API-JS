import '../css/index.css'
import ScrolAnimation from './components/animation/scrolAnimation';
import { PagNovoEsque, PagNovoDirei } from './components/PagNovo';

const tamano = {
  h:200,
  w:200,
  link : 'https://www.guardianrecovery.com/wp-content/uploads/2024/09/What-Is-Blue-Meth-scaled.jpg',
}

function App() {
  return (
    <>
      <ScrolAnimation>
        <PagNovoEsque>
          <div className="bg-amber-50 rounded-e-3xl max-w-2xl flex flex-row">
            <img
              src={tamano.link}
              height={tamano.w}
              width={tamano.h}
              className="pr-1 bordaImga max-h-[200px] basis-1/3"
            />
            <div className=" bg-orange-300 rounded-b-2xl basis-2/3">
              <h1 className="pt-9 text-center font-mono font-extrabold">
                NOVO SABOR DE LA PIEDRA
              </h1>
              <p className="font-mono">
                o novo sabor do sucesso de vendas LA PIEDRA chega a cidede LA
                PIEDRA AZUL, desenvolvida pelo quimico renomado Haserberk
              </p>
            </div>
          </div>
        </PagNovoEsque>
        <PagNovoDirei>
          <div className="bg-amber-50 rounded-s-3xl max-w-2xl flex flex-row">            
            <div className=" bg-orange-300 rounded-b-3xl basis-2/3">
              <h1 className="pt-9 pb-4 text-center font-mono font-extrabold">
                ANTIGO CEO DEMITIDO NOVO ACAMINHO
              </h1>
              <p className="font-mono pb-4">
                É ocm muito lamento que o antigo chefe da compania Pablo Escobar
                foi destituido do seu cargo, e um novo CEO à caminho, seu nome é
                Gus Fring, o futuro novo CEO já avia mostrado um otimo desenpenho na
                companiha KFC, onde avia trasido uma marjen de lucor de 9 bilhões para 
                a empresa, com uma media a de 100 venda por ano
              </p>
            </div>
            <img
              src='https://static.wikia.nocookie.net/villains/images/7/75/Pollos2.png'
              height={tamano.w}
              width={tamano.h}
              className="pl-1 bordaImga2  basis-1/3"
            />
          </div>
        </PagNovoDirei>
        </ScrolAnimation>
    </>
  );
}

export default App