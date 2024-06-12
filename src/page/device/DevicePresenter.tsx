import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import classNames from "../../hooks/ClassName";
import UserForm from "../../components/UserForm";
import SyringeCard from "../../components/SyringeCard";
import { DevicePageInterface } from "../../config/Interfaces";

export default function DevicePresenter({ prop }: DevicePageInterface) {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Static sidebar for desktop */}
      <Sidebar />

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        {/* Topbar */}
        <Topbar />

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex gap-5 items-center">
              <Link
                to="/dashboard"
                className={classNames(
                  "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                )}
              >
                back
              </Link>
              <h1 className="text-2xl font-semibold text-gray-900">
                {"bang user "}
              </h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              <div className="p-4 rounded-md bg-white mt-4">
                <UserForm prop={prop}/>
              </div>
              {/* /End replace */}
            </div>
          </div>
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Syringe List
              </h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex gap-5">
              {/* Replace with your content */}
              <SyringeCard prop={prop.device.syringe1} title="Syringe 1"/>
              <SyringeCard prop={prop.device.syringe2} title="Syringe 2"/>
              <SyringeCard prop={prop.device.syringe3} title="Syringe 3"/>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
