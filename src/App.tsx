import { useState, useEffect } from "react";

function App() {
  const [up, setUp] = useState<number>(0);
  const upCount = () => {
    setUp(up + 1);
    console.log(up);
  }
  const reSet = () => {
    setUp(0);
    console.log(up);
  }
  useEffect(() => {

  }, [up])
  return (
    <>
      <h1>안녕하세요{up}</h1>
      <button onClick={upCount}>
        잉 아잇!
      </button>
      <button onClick={reSet}>
        푸루룻
      </button>
    </>
  )
}

export default App
