import React from "react";
import useSidebarStore from "@/app/store/sidebar";

interface SidebarProps {
  sidebarOpen: boolean;
}

const SideBar: React.FC<SidebarProps> = ({ sidebarOpen }) => {
  // const {open,toggleSidebar} = useSidebarStore();
  // if(!open){
  //   return <div></div>
  // }
  return (
    <div>
      <aside
        id="menu"
        className={`bg-slate-800 text-white h-screen w-64 fixed transform transition-transform ease-in-out ${
          sidebarOpen ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold">Sidebar</h1>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#" className="block px-4 py-2 text-sm">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm">
                About Us
              </a>
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </nav>
      </aside>
      {/* <main
        className={`ml-64 p-8 ${
          sidebarOpen ? "overflow-hidden ml-64" : "ml-8"
        }`}
      >
        <h1 className="text-3xl font-bold mb-4">Main Content</h1>
      </main> */}
    </div>
  );
};

// SideBar.defaultProps = {
//   sidebarOpen: true,
// };

export default SideBar;
