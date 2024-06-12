import { DocumentData } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function DeviceCard({ prop }: DocumentData) {
  return (
    <Link to={`/device/${prop.id}`} className="flex justify-between px-4">
      <div className="font-bold">{prop.data().name}</div>
      {prop.data().status == true ? (
        <div className="bg-[#8EACCD] text-white px-4 py-1 rounded-xl">
          online
        </div>
      ) : (
        <div className="bg-[#e9e9e9] text-black px-4 py-1 rounded-xl">
          offline
        </div>
      )}
    </Link>
  );
}
