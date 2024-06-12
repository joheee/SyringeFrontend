import { Link, useNavigate } from "react-router-dom";
import classNames from "../hooks/ClassName";


export default function Sidebar() {
  const navigate = useNavigate();
  
  const navigation = [
    { name: "Dashboard", href: "/dashboard", action:handleDashboard, current: true },
    { name: "Logout", href: "/", action:handleLogout, current: true },
  ];

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }
  function handleDashboard() {
    navigate("/dashboard");
  }
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            StringePump
          </div>
          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-2 bg-white space-y-1">
              {navigation.map((item) => (
                <Link
                  onClick={item.action}
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
