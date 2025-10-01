import {createContext} from "react"
import {doctors}  from "../assets/assets"

const AppContext = createContext()

export const AppContextProvider = (props) => {
    const value = {
        doctors 
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContext }
export default AppContextProvider