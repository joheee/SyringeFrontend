import { collection } from "firebase/firestore";
import DashboardPresenter from "./DashboardPresenter";
import { useCollection } from "react-firebase-hooks/firestore";
import { db_firestore } from "../../config/FirebaseConnect";

export default function DashboardPage() {
  const [devices, loading] = useCollection(
    collection(db_firestore, "Devices"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const prop = {
    devices: devices!,
  };
  
  if (loading) return <div className="">loading</div>;
  return <DashboardPresenter prop={prop}/>
}
