import React, {createContext, useContext, useReducer } from 'react'

// This is the data layer
export const StateContext = createContext();

//Build a provider
export const StateProvider = ({ reducer, initialState, children}) => {
    return (
        // eslint-disable-next-line no-unused-expressions
        <StateContext.Provider value={useReducer(reducer, initialState)} >
            {children}
        </StateContext.Provider>
    )
}

//This is how we use it
export const useStateValue = () => useContext(StateContext)
