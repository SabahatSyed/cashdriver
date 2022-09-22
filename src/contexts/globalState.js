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

  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      newUser: user,
    });
  };

  const deleteUser = (id) => {
    dispatch({
      type: "DELETE_USER",
      id: id,
    });
  };

  return (
    <GlobalContext.Provider value={{ users: state.users, addUser, deleteUser }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalContext);
};
