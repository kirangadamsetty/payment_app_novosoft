import {createContext} from "react"


export const projectContext = createContext()

const ProjectContextProvider = ({children}) =>{
    return(
        <projectContext>
            {children}
        </projectContext>
    )
}

export default ProjectContextProvider
