/*  import gsap from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import '../../../css/index.css'

gsap.registerPlugin(useGSAP);

type AnimaSet = {
      children : React.ReactNode;
}

export const Animation = ({children}: AnimaSet) => {

  const { useRef } = React;
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".box", {
        opacity: 0,
        x: -50,
      });
    },
    { scope: container }
  );

  return (
    <>
      <div ref={container}>
        <div className="box fixed inset-0 right-0 z-30 flex justify-end">
          {children}
        </div>
      </div>
    </>
  );
};*/