import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [a, seta] = useState(0);
  const [b, setb] = useState(0);
  const [result, setresult] = useState(0);

  const handleCalculation = async () => {
    const res = await axios.post("https://calc-backend-keca.onrender.com/calculate", {
      num1: Number(a),
      num2: Number(b),
    });
    setresult(res.data.result);
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col gap-8  items-center justify-center ">
        <div>ADD!</div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-3">
            <div>enter num1</div>
            <input
              type="text"
              value={a}
              placeholder="number1"
              onChange={(e) => seta(e.target.value)}
              className="bg-white text-black"
            />
          </div>
          <div className="flex flex-row gap-3">
            <div>enter num2</div>
            <input
              type="text"
              value={b}
              placeholder="number2"
              onChange={(e) => setb(e.target.value)}
              className="bg-white text-black"
            />
          </div>
          <button onClick={handleCalculation} className="bg-white text-black">
            add
          </button>
          <div className="bg-white text-black">Result: {result}</div>
        </div>
      </div>
    </>
  );
}

export default App;
