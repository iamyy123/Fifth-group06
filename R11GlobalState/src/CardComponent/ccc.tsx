import React, { useState } from "react";

const ToggleSwitch: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">切换开关</h2>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={isOn}
          onChange={handleToggle}
        />
        <span className="w-11 h-6 bg-gray-300 rounded-full inline-block relative"></span>
        <span className={`w-5 h-5 bg-white rounded-full inline-block absolute top-0.5 left-0.5 ${isOn? "translate-x-5" : ""}`}></span>
      </label>
      <p className={`mt-4 ${isOn? "text-green-500" : "text-red-500"}`}>
        {isOn? "开关已开启" : "开关已关闭"}
      </p >
    </div>
  );
};

export default ToggleSwitch;