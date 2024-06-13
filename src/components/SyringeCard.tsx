import ProgressBar from "@ramonak/react-progress-bar";
import { SyringeCardInterface } from "../config/Interfaces";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    padding: "0",
    border: "none",
    inset: "50% auto auto 50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function SyringeCard({ prop, title, device }: SyringeCardInterface) {
  const [percent, setPercent] = useState<number>(100);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setPercent(Math.floor((prop.volume / 60) * 100));
    if (percent <= 20) {
      toast.error(`${title} fluid is getting low!`);
      setIsOpen(true);
    }
  }, [percent, prop.volume, title]);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="p-4 rounded-md bg-white mt-4 w-64 grid gap-4">
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={() => {}}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col items-end p-6 bg-white rounded shadow-lg">
          <div className="text-4xl font-bold mb-2">
            {title}'s volume is low!
          </div>
          <div className="text-2xl font-semibold mb-4">{prop.fluid} for patient name {device.user.name}</div>

          <button
            onClick={closeModal}
            className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg text-base font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto"
          >
            close
          </button>
        </div>
      </Modal>

      <div className="flex gap-2 items-center">
        <div className="text-xl font-bold">{title}</div>
        {percent >= 20 ? null : (
          <img
            src="https://static-00.iconduck.com/assets.00/danger-icon-2048x2048-ey688pf1.png"
            className="cursor-pointer w-6 h-6"
            onClick={openModal}
          />
        )}
      </div>
      {prop.status == false ? (
        <div className="bg-red-300 w-fit py-1 text-white px-2 rounded-lg">
          not used
        </div>
      ) : (
        <div className="bg-teal-500 w-fit py-1 text-white px-2 rounded-lg">
          running
        </div>
      )}
      <ProgressBar
        completed={percent}
        maxCompleted={100}
        bgColor={percent <= 20 ? "rgb(252 165 165 / 1)" : "rgb(20 184 166 / 1)"}
      />
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
