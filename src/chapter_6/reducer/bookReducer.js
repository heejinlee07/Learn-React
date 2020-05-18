export const initialState = {
  inputState: {
    name: "",
    phone: "",
  },
  bookState: [],
};

export const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        bookState: [...state.bookState],
        inputState: {
          ...state.inputState,
          [action.name]: action.value,
        },
      };
    case "ADD_PHONE":
      return {
        inputState: initialState.inputState,
        bookState: state.bookState.concat(action.newBook),
      };
    case "DELETE_PHONE":
      return {
        inputState: initialState.inputState,
        bookState: state.bookState.filter((book) => book._id !== action._id),
      };
    default:
      return null;
  }
};
