import ProgressBar from "@ramonak/react-progress-bar";
import { SyringeCardInterface } from "../config/Interfaces";
import { useEffect, useState } from "react";

export default function SyringeCard({ prop, title }: SyringeCardInterface) {
  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    setPercent(Math.floor((prop.volume / 60) * 100));
  }, [prop.volume]);

  return (
    <div className="p-4 rounded-md bg-white mt-4 w-64 grid gap-4">
      <div className="text-xl font-bold">{title}</div>
      {prop.status == false ? (
        <div className="bg-red-300 w-fit py-1 text-white px-2 rounded-lg">
          not used
        </div>
      ) : (
        <div className="bg-teal-500 w-fit py-1 text-white px-2 rounded-lg">
          running
        </div>
      )}
      <ProgressBar completed={percent} maxCompleted={100} />
      <div className="">
        <div className="">Volume</div>
        <div className="ml-2 text-lg font-bold">{prop.volume} mL</div>
      </div>
      <div className="">
        <div className="">Flow Rate</div>
        <div className="ml-2 text-lg font-bold">{prop.flowrate} mL/hr</div>
      </div>
      <div className="">
        <div className="">Time Remaining</div>
        <div className="ml-2 text-lg font-bold">{prop.timeRemaining} min</div>
      </div>
    </div>
  );
}
