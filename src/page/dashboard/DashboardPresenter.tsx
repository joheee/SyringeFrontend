import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { DashboardPageInterface } from "../../config/Interfaces";
import DeviceCard from "../../components/DeviceCard";

export default function DashboardPresenter({ prop }: DashboardPageInterface) {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Static sidebar for desktop */}
      <Sidebar />

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        {/* Topbar */}
        <Topbar />

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Hello {"bang admin"}
              </h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              <div className="p-4 rounded-md bg-white mt-4">
                <div className="mb-4 font-bold text-lg">Device List</div>
                <div className="grid gap-4">
                  {prop.devices.docs.map((item, i) => (
                    <DeviceCard prop={item} key={i}/>
                  ))}
                </div>
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
