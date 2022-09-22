const usersReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE": {
      const users = action.data.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      console.log("Loading...");
      return {
        ...state,
        users: users,
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

    default: {
      return state;
    }
  }
};

export default usersReducer;
