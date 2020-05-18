/* eslint-disable */
import React, { useState, useEffect, useReducer } from "react";
import List from "./List";
import { initialState, reducer } from "./reducer/bookReducer";

const Book = () => {
  const date = new Date();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("부모 컴포넌트가 화면에 나타남");
    console.log(state);
    return () => {
      console.log("부모 컴포넌트가 화면에서 사라짐");
    };
  }, [state]);

  const changeInput = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name: name,
      value: value,
    });
  };
  const addPhone = async () => {
    const newPhone = {
      _id: date.getTime(),
      name: state.inputState.name,
      phone: state.inputState.phone,
    };
    dispatch({
      type: "ADD_PHONE",
      newBook: newPhone,
    });
  };
  const deletePhone = (_id) => {
    console.log(_id);
    dispatch({
      type: "DELETE_PHONE",
      _id: _id,
    });
  };
  const phoneList = state.bookState;
  const inputData = state.inputState;
  console.log(phoneList);
  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          onChange={changeInput}
          value={inputData.name}
        />
        <input
          type="text"
          name="phone"
          onChange={changeInput}
          value={inputData.phone}
        />
        <button onClick={addPhone}>번호 등록</button>
      </div>

      <List phone={phoneList} deletePhone={deletePhone} />
    </div>
  );
};

export default Book;
