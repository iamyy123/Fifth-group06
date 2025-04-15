import React, { useState } from "react";

const CounterComponent: React.FC = () => {
  // 初始化计数状态为 0
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">财富值</h2>
      <div className="flex justify-center items-center mb-4">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-l"
          onClick={() => setCount(count - 1)}
        >
          减少
        </button>
        <span className="text-2xl mx-4">{count}</span>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r"
          onClick={() => setCount(count + 1)}
        >
          增加
        </button>
      </div>
    </div>
  );
};

export default CounterComponent;