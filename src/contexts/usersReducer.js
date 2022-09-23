const usersReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE": {
      const users = action.data.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      const admin = action.adminData.docs[0].data();
      console.log("Loaded");
      return {
        ...state,
        users: users,
        adminCredentials: {
          password: admin.password,
          adminWalletKey: admin.walletKey,
          email: admin.email,
          id: action.adminData.docs[0].id,
        },
      };
    }

    case "ADD_USER": {
      const updatedUsers = [action.newUser, ...state.users];
      return {
        ...state,
        users: updatedUsers,
      };
    }

    case "DELETE_USER": {
      const updatedUsers = state.users.filter((user) => user.id !== action.id);
      return {
        ...state,
        users: updatedUsers,
      };
    }

    case "UPDATE_ADMIN_PASSWORD": {
      const updateCredentials = state.adminCredentials;
      updateCredentials.password = action.newPassword;
      return {
        ...state,
        adminCredentials: updateCredentials,
      };
    }

    case "UPDATE_ADMIN_WalletKey": {
      const updateCredentials = state.adminCredentials;
      updateCredentials.adminWalletKey = action.newWalletKey;
      return {
        ...state,
        adminCredentials: updateCredentials,
      };
    }

    default: {
      return state;
    }
  }
};

export default usersReducer;
