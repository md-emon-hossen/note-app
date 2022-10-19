import React, { useContext, useState } from "react";

const ModulContext = React.createContext();



export function useModul() {
    return useContext(ModulContext);
};


export function ModulProvider({ children }) {
    const [data, setdata] = useState(false);
    return (
        <ModulContext.Provider value={{ data, setdata }}>
            {children}
        </ModulContext.Provider>
    )
}