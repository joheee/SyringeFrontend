import { useNavigate, useParams } from "react-router-dom";
import DevicePresenter from "./DevicePresenter";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc, updateDoc } from "firebase/firestore";
import { db_firestore } from "../../config/FirebaseConnect";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AuthMiddleware from "../../middleware/AuthMiddleware";
import Loading from "../../components/Loading";

export default function DevicePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const deviceRef = doc(db_firestore, "Devices", id!);
  const [device, loading] = useDocumentData(deviceRef);

  const [name, setName] = useState<string>("");
  const [person, setPerson] = useState<string>("");
  const [room, setRoom] = useState<number>(0);
  const [bed, setBed] = useState<number>(0);

  function handleBack() {
    navigate("/dashboard");
  }
  async function handleUpdate() {
    const persons = person.split(",").map((name) => name.trim());
    if (persons.length > 3 || persons.length < 1 || persons[0] === '') {
      toast.error('there must be 1-3 people!')
      return
    }
    const updatedData = {
      user: {
        name: name,
        assignedPerson: person.split(",").map((name) => name.trim()),
        roomNumber: room,
        bedNumber: bed,
      },
    };

    await updateDoc(deviceRef, updatedData)
      .then(() => {
        console.log("Document successfully updated!");
        toast.success("success update user information");
      })
      .catch((error) => {
        toast.error("abort update");
        console.error("Error updating document: ", error);
      });
  }

  useEffect(() => {
    if (device) {
      setName(device!.user.name);
      setPerson(device!.user.assignedPerson.toString());
      setRoom(device!.user.roomNumber);
      setBed(device!.user.bedNumber);
    }
  }, [device, loading]);

  const prop = {
    device: device!,
    handleBack,
    setName,
    setPerson,
    setRoom,
    setBed,
    handleUpdate,
    name,
    person,
    room,
    bed,
  };

  if (loading) return <Loading/>
  return (
    <AuthMiddleware>
      <DevicePresenter prop={prop} />;
    </AuthMiddleware>
  );
}
