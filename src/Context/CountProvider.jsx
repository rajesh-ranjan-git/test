import { createContext, useContext, useReducer } from "react";
import { countReducer } from "../Reducers/countReducer";

const countContext = createContext();

// Provider
const countProvider = ({ children }) => {
  const initialState = {
    count: 0,
  };

  const [{ count }, countDispatch] = useReducer(countReducer, initialState);

  return (
    <CountContext.Provider value={{ count, countDispatch }}>
      {children}
    </CountContext.Provider>
  );
};

// Consumer

const useCount = () => useContext(countContext);

export { useCount, countProvider };
