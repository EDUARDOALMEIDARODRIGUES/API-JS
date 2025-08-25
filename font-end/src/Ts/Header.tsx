import '../css/index.css';
import Buttom from "./components/Button.tsx";

const Header = () => {
  return (
    <>
      <div className='bg-amber-50 grid grid-cols-3 gap-5 relative'>
        <div className=" col-span-1 col-end-3">
          <h1 className="text-center font-bold font-mono text-black">
            LOS POLLOS HERMANOS
          </h1>
        </div>
        <div className="conaie">
          <Buttom>
            <div className="cubo">
              <div className="s1"></div>
              <div className="s2"></div>
              <div className="s3"></div>
              <div className="s4"></div>
              <div className="s5"></div>
              <div className="s6"></div>
            </div>
          </Buttom>
        </div>
      </div>
    </>
  );
}

export default Header