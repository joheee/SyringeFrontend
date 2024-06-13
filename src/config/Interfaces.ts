import { DocumentData, QuerySnapshot } from "firebase/firestore";
import { ReactNode } from "react";

export interface LoginPageInterface {
  prop: {
    setEmail: (e: string) => void;
    setPassword: (e: string) => void;
    handleLogin: () => void;
  };
}

export interface AuthMiddlewareInterface {
  children?: ReactNode;
}

export interface DashboardPageInterface {
  prop: {
    devices: QuerySnapshot;
  };
}

export interface DevicePageInterface {
  prop: {
    device: DocumentData;
    handleBack: () => void;
    setName: (e: string) => void;
    setPerson: (e: string) => void;
    setRoom: (e: number) => void;
    setBed: (e: number) => void;
    handleUpdate: () => void;
    name: string;
    person: string;
    room: number;
    bed: number;
  };
}

export interface SyringeCardInterface {
  prop: {
    status: boolean;
    flowrate: number;
    fluid: string;
    timeRemaining: number;
    volume: 15;
  };
  title: string;
  device: DocumentData
}
