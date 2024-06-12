import { DevicePageInterface } from "../config/Interfaces";

export default function UserForm({prop}: DevicePageInterface) {
  return (
    <div className="lg:col-span-2">
      <h3 className="text-lg font-medium text-warm-gray-900">User Data</h3>
      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div>
          <label
            htmlFor="first_name"
            className="block text-sm font-medium text-warm-gray-900"
          >
            Patient Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              value={prop.name}
              onChange={(e) => prop.setName(e.target.value)}
              className="py-3 px-4 block w-full shadow-lg text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block text-sm font-medium text-warm-gray-900"
          >
            Room Number
          </label>
          <div className="mt-1">
            <input
              type="number"
              onChange={(e) => prop.setRoom(parseInt(e.target.value))}
              value={prop.room}
              className="py-3 px-4 block w-full shadow-lg text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-warm-gray-900"
          >
            Assigned Person (comma separated)
          </label>
          <div className="mt-1">
            <input
              type="text"
              onChange={(e) => prop.setPerson(e.target.value)}
              value={prop.person}
              className="py-3 px-4 block w-full shadow-lg text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-warm-gray-900"
            >
              Bed Number
            </label>
          </div>
          <div className="mt-1">
            <input
              type="number"
              onChange={(e) => prop.setBed(parseInt(e.target.value))}
              value={prop.bed}
              className="py-3 px-4 block w-full shadow-lg text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
              aria-describedby="phone-optional"
            />
          </div>
        </div>
        <div className="sm:col-span-2 sm:flex sm:justify-end">
          <button onClick={prop.handleUpdate} className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg text-base font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
