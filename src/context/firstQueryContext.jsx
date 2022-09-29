import { createContext, useContext, useState } from "react";

const FirstQueryContext = createContext()

export const useFirstQuery = () => useContext(FirstQueryContext)

export const FirstQueryProvider = ({children}) => {
    const [isFirstQuery, setIsFirstQuery] = useState(true)
    const [isButtonShow, setIsButtonShow] = useState(false)

    const setFirstQueryStatus = () => {
        setIsFirstQuery(false)
    }

    return (
        <FirstQueryContext.Provider value={{ isFirstQuery, setFirstQueryStatus, isButtonShow, setIsButtonShow }}>
            { children }
        </FirstQueryContext.Provider>
    )
}