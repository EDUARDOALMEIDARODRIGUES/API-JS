import type React from "react";

type PagSet = {
      children : React.ReactNode
};

export const PagNovoEsque = ({children} : PagSet) => {
      return(
            <>
                  <div className="left-0 top-0 pt-6 p-3.5">
                        {children}
                  </div>
            </>
      );
}

export const PagNovoDirei = ({children} : PagSet) => {
      return(
            <>
                  <div className="float-end t-0 pt-6 p-3.5">
                        {children}
                  </div>
            </>
      );
}