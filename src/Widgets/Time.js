import React, { useCallback, useState } from "react";

const TimeComp = ({ title }) => {
  const [time, setTime] = useState(0);
  const timeUp = useCallback(() => {
    setTime(time + 1);
  }, [time, setTime]);
  return (
    <div>
      <p>{title}</p>
      <div onClick={timeUp}>Times: {time}</div>
    </div>
  );
};

export default TimeComp;
