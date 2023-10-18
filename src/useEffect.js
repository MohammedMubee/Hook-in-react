import React, { useState, useEffect } from "react";

function HookUseEffect() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increase1 = () => {
    setCount1(count1 + 1);
  };

  const increase2 = () => {
    setCount2(count2 + 1);
  }

  useEffect(() => {
    console.log(count1 + " useEffect");
    console.log(count2 + " useEffect");
  }, [count1, count2]);

  return (
    <div>
      <button onClick={increase1}>Increase Count 1</button>
      <button onClick={increase2}>Increase Count 2</button>
    </div>
  );
}

export default HookUseEffect;
