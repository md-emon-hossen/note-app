import React, { useContext, useState } from "react";

const dataContext = React.createContext();

export function useData() {
    return useContext(dataContext);
}


export function DaataProvider({ children }) {
    const [search, setsearch] = useState("");
    const [mainData, setmainData] = useState([
        {
            title: "hello",
            dis: "this is a small country",
            time: '10/06/2021'
        },
        {
            title: "hi",
            dis: "this is a small text",
            time: '24/06/2021'
        }, {
            title: "hello",
            dis: "this is a small country",
            time: '19/06/2021'
        },
        {
            title: "hi",
            dis: "this is a small text",
            time: '01/07/2021'
        }
    ]);


    const value = {
        mainData,
        search,
        setsearch,
        setmainData
    }

    return (
        <dataContext.Provider value={value}>
            {children}
        </dataContext.Provider>
    )
}