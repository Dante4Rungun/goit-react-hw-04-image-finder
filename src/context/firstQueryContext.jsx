import { createContext, useContext, useState } from "react";

const FirstQueryContext = createContext()

export const useFirstQuery = () => useContext(FirstQueryContext)

export const FirstQueryProvider = ({children}) => {
    const [isButtonShow, setIsButtonShow] = useState(false)

    return (
        <FirstQueryContext.Provider value={{ isButtonShow, setIsButtonShow }}>
            { children }
        </FirstQueryContext.Provider>
    )
}