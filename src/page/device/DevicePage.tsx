import { useNavigate, useParams } from "react-router-dom";
import DevicePresenter from "./DevicePresenter";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc, updateDoc } from "firebase/firestore";
import { db_firestore } from "../../config/FirebaseConnect";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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
  function handleUpdate() {
    const updatedData = {
      user: {
        name: name,
        assignedPerson: person.split(",").map((name) => name.trim()),
        roomNumber: room,
        bedNumber: bed,
      },
    };

    updateDoc(deviceRef, updatedData)
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

  if (loading) return <div className="">loading</div>;
  return <DevicePresenter prop={prop} />;
}
