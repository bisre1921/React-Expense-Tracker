import React , {createContext , useReducer} from "react";
import AppReducer from "./AppReducer";

const intialState = {
    transactions: [
        {id:1 , text:"food" , amount:-20} , 
        {id:2 , text:"wage" , amount:500} ,
        {id:3 , text:"game" , amount:-90} ,
        {id:4 , text:"book" , amount:-110} ,
    ]
};

export const GlobalContext = createContext(intialState);

export const GlobalProvider = ({children}) => {
    const [state , dispatch] = useReducer(AppReducer , intialState);

    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION" , 
            payload : id
        });
    }
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions , 
            deleteTransaction
        }}>
            {children}
         </GlobalContext.Provider>
    )
}