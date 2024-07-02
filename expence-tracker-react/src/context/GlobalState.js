import { createContext, useEffect, useReducer } from "react";

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};
let storedState = JSON.parse(localStorage.getItem("state"));
storedState = storedState ? storedState : initialState;

// console.log(storedState);
export const GlobalContext = createContext(storedState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, storedState);
  function deleteTransaction(id) {
    dispatch({ type: "deleteTransaction", payload: id });
  }
  function addTransaction(transaction) {
    dispatch({ type: "addTransaction", payload: transaction });
  }
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

function appReducer(state, action) {
  switch (action.type) {
    case "deleteTransaction":
      return {
        ...state,
        transactions: state.transactions.filter(
          (trans) => trans.id !== action.payload
        ),
      };
    case "addTransaction":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
}
