/* eslint-disable */
/*NOTE:
useMemo는 여러 연산이 수반되는 함수를 자주 반복하지 않고, 
필요할 때만 실행되게 하는 기능. 성능최적화
*/

import React, { useState, useEffect, useMemo } from "react";
import Child from "./Child";
const listLength = (list) => {
  //useMemo를 쓰지 않으면 실질적인 리스트 갯수에 변화가 없어도
  //계속 계산이 이루어진다.
  console.log("<<리스트 갯수 계산>>");
  return list.length;
};
const Parent = () => {
  useEffect(() => {
    console.log("부모 컴포넌트가 화면에 나타남");
    return () => {
      console.log("부모 컴포넌트가 화면에서 사라짐");
    };
  }, []);
  const [inputState, setInputState] = useState("");
  const [state, setState] = useState([
    {
      _id: 0,
      name: "aaa",
    },
    {
      _id: 1,
      name: "bbb",
    },
    {
      _id: 2,
      name: "ccc",
    },
    {
      _id: 3,
      name: "ddd",
    },
    {
      _id: 4,
      name: "eee",
    },
  ]);
  const _remove = (_id) => {
    console.log(state);
    setState(state.filter((s) => s._id !== _id));
  };
  const _updateList = (e) => {
    setInputState(e.target.value);
  };
  // const count = listLength(state);
  /*useMemo 첫 번째 파라미터: 함수, 
  두 번째 파라미터: 변경됨을 감지할 데이터,
  두 번째 파라미터의 데이터가 변경될 때 해당 함수가 실행됨
  즉 실제 상태가 변경될 때만 로직이 실행된다.
  */
  const count = useMemo(() => listLength(state), [state]);
  return (
    <div>
      인풋: <input onChange={_updateList} />
      {state.map((s) => (
        <Child list={s} remove={_remove} key={s._id} />
      ))}
      <h1 style={{ color: "red" }}>{count}</h1>
    </div>
  );
};

export default Parent;
