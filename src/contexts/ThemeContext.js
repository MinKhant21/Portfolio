import { createContext, useReducer } from "react";


let ThemeContext = createContext();

const ThemeReducer = (state,action) => {
     switch (action.type) {
          case "CHANGE_THEME":
               return {...state,theme:action.payload}
          default:
               break;
     }
}

const  ThemeContextProvider = ({children}) => {

     const [state,dispatch] = useReducer(ThemeReducer,{
          theme:"light"
     })

     const ChangeTheme = (theme) => {
          dispatch({type:"CHANGE_THEME",payload:theme})
     }

     return (
          <ThemeContext.Provider value={{...state,ChangeTheme}}>
               {children}
          </ThemeContext.Provider>
     )
}


export {ThemeContext , ThemeContextProvider}


