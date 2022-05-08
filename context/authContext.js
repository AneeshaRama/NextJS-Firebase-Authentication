import { createContext, useReducer, useEffect } from "react";

//initial state
const initialState = {
  user: null,
};

//creating context
const Context = createContext();

//reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

//Provider
const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  //Checking if user already logged in
  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(localStorage.getItem("user")),
    });
  }, []);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, DataProvider };
