import React, { createContext, useReducer, useContext } from 'react';

// 1. Global state başlangıç değeri
const initialState = {
  selectedNeighborhood: '',
};

// 2. Reducer fonksiyonu (state güncelleme mantığı)
function appReducer(state, action) {
  switch (action.type) {
    case 'SET_NEIGHBORHOOD':
      return { ...state, selectedNeighborhood: action.payload };
    default:
      return state;
  }
}

// 3. Context yarat
const AppContext = createContext();

// 4. Provider component (global state ve dispatch'i sağlar)
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

// 5. Kolay kullanımı için custom hook
export function useAppContext() {
  return useContext(AppContext);
}
