import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

type setScrolAnima = {
      children : React.ReactNode;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const scrolAnimation = ({children}: setScrolAnima) =>{
      const { useRef } = React;
      const container = useRef<HTMLDivElement>(null);

      useGSAP (() => {
            gsap.to(".sco", {
                  scrollTrigger: {
                        trigger :'.sco',
                        toggleActions : 'restart pause reverse pause',
                  },
                  opacity: 100,
                  x : -20,
            }) 
      }, {scope : container});

      return(
            <>
                  <div ref={container}>
                        <div className="sco">
                              {children}
                        </div>
                  </div>            
            </>
      );
}

export default scrolAnimation;