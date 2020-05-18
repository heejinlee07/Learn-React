import React, { useState, useEffect, useMemo, useCallback } from "react";
import Child from "./Child";

/*
NOTE:
useCallback의 기본 형태
const func = useCallback(
  () => () => {
     ... 
  },
  [users]
);
useCallback(1,2) 1번 자리엔 함수가 들어갑니다. 
2번 자리엔 useEffect에서 넘겨주었던 depth, 
즉 여기서 지켜 볼 상태값이 들어가게 됩니다.
*/

const listLength = (list) => {
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
  const _remove = useCallback(
    (_id) => {
      console.log(state);
      setState(state.filter((s) => s._id !== _id));
    },
    [state],
  );
  const _updateList = useCallback(
    (e) => {
      setInputState(e.target.value);
    },
    [state],
  );
  // const count = listLength(state);
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
