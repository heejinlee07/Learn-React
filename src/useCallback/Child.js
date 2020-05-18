import React, { useEffect } from "react";

const Child = ({ list, remove }) => {
  useEffect(() => {
    console.log("자식 컴포넌트가 화면에 나타남");
    console.log(list);
    return () => {
      console.log("자식 컴포넌트가 화면에서 사라짐");
      console.log(list);
    };
  }, [list]);
  return <h1 onClick={() => remove(list._id)}>{list.name}</h1>;
};

export default React.memo(Child);

/* 
NOTE:
React.memo는 재사용할 값을 관리하는 것으로
불필요한 렌더링을 방지한다. 
최적화를 하고 싶은 컴포넌트를 React.memo로 감싸면 된다
이렇게하면 상태값이 변경되어도 리렌더링하지 않음.
*/
