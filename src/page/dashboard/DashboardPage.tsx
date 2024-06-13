import { collection } from "firebase/firestore";
import DashboardPresenter from "./DashboardPresenter";
import { useCollection } from "react-firebase-hooks/firestore";
import { db_firestore } from "../../config/FirebaseConnect";
import AuthMiddleware from "../../middleware/AuthMiddleware";
import Loading from "../../components/Loading";

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

  if (loading) return <Loading />;
  return <DashboardPresenter prop={prop} />;
}
