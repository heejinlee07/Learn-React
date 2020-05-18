/* eslint-disable */
import { useReducer, useCallback } from "react";

const useData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeInput = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name: name,
      value: value,
    });
  }, []);
  const addPhone = useCallback(async () => {
    const newPhone = {
      _id: date.getTime(),
      name: state.inputState.name,
      phone: state.inputState.phone,
    };
    dispatch({
      type: "ADD_PHONE",
      newBook: newPhone,
    });
  }, []);
  const deletePhone = useCallback((_id) => {
    console.log(_id);
    dispatch({
      type: "DELETE_PHONE",
      _id: _id,
    });
  }, []);
  return [state, changeInput, addPhone, deletePhone];
};

export default useData;
