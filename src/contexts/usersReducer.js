const usersReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE": {
      const users = action.data.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
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

    default: {
      return state;
    }
  }
};

export default usersReducer;
