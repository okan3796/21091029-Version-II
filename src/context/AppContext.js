import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  selectedNeighborhood: '',
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_NEIGHBORHOOD':
      return { ...state, selectedNeighborhood: action.payload };
    default:
      return state;
  }
}

const AppContext = createContext();

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
