import { createContext } from "react";

const CompContext = createContext()

export function CompProvider({children}){
    return(
        <CompContext.Provider value={{test:1}}>{children}</CompContext.Provider>
    )
}

export default CompProvider