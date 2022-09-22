import { createContext, useContext, useEffect, useReducer } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import usersReducer from "./usersReducer";

const initialState = {
  users: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(collection(db, "users"));
      dispatch({
        type: "INITIALIZE",
        data: data,
      });
    };

    getUsers();
  }, []);

  return (
    <GlobalContext.Provider value={{ users: state.users }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalContext);
};
