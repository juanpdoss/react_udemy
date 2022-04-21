// allow us to create a context object
import { createContext, useReducer } from "react";

export const ThemeContext = createContext(); // creating an object provider <-

// to acces this provider, we are going to use <ThemeContext.Provider />
// any component in our app who is wrapped by this provider, can access the required value


// function to use in our useReducer, is gonna carry the logic who updates our state
const themeReducer = (state,action)=>{
  //  we return a value who represents the new state, based on the action (the action represents which value do we wanna actualize)  
  switch (action.type) {
    // case specified on the dispatch function
    case 'CHANGE_COLOR':
                // we need to save the previous state bc otherwise we are going to lost ALL the state properties, 
                // currently we only have a color property but we can a more properties
        return { ...state,color:action.payload}
      break;
  
    default:
      return state;
      break;
  }
}

export function ThemeProvider({ children }) {
  // the second parameter is the initial value for the state 
  const [state,dispatch] = useReducer(themeReducer, { 
    color:'#58249c'
  })

  const changeColor = (color)=>{
    // object describing the dispatch action  
    // the type describes the type of state change we want to make
    // the payload is any data we want to base the state change on
    dispatch({
      type:'CHANGE_COLOR',
      payload:color
    },)
  }



  return (
    <ThemeContext.Provider value={{ ...state,changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}
