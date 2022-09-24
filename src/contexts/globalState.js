import { createContext, useContext, useEffect, useReducer } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import usersReducer from "./usersReducer";

const initialState = {
  users: [],
  adminCredentials: {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  useEffect(() => {
    const getUsers = async () => {
      console.log("Loading...");
      const data = await getDocs(collection(db, "users"));
      const adminData = await getDocs(collection(db, "admin"));
      dispatch({
        type: "INITIALIZE",
        data: data,
        adminData: adminData,
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

  const editUser = (updatedUser) => {
    dispatch({
      type: "EDIT_USER",
      updatedUser: updatedUser,
    });
  };

  const deleteUser = (id) => {
    const userRef = doc(db, "users", id);
    (async () => {
      try {
        await deleteDoc(userRef);
      } catch (err) {
        console.log(err);
      }
    })();

    dispatch({
      type: "DELETE_USER",
      id: id,
    });
  };

  const updateAdminPassword = (newPassword) => {
    dispatch({
      type: "UPDATE_ADMIN_PASSWORD",
      newPassword: newPassword,
    });
  };

  const updateAdminWalletKey = (newWalletKey) => {
    dispatch({
      type: "UPDATE_ADMIN_WalletKey",
      newWalletKey: newWalletKey,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        adminCredentials: state.adminCredentials,
        addUser,
        editUser,
        deleteUser,
        updateAdminPassword,
        updateAdminWalletKey,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalContext);
};
