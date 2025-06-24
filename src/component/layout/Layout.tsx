import { FaUser } from "react-icons/fa6";
import { FaList } from "react-icons/fa6";
import { AiFillDashboard } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [collapse, setCollapse] = useState(false);
  const menuList = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <AiFillDashboard />,
    },
    {
      title: "Users",
      path: "/user",
      icon: <FaUserFriends />,
    },
  ];
  return (
    <div className="flex w-full items-center justify-center min-h-screen">
      <div
        className={`bg-green-800 z-10 fixed inset-0 text-white ${
          collapse ? "w-[5%]" : "w-[20%]"
        } min-h-screen`}
      >
        <h1 className="text-center p-3 ">Admin</h1>
        <ul className="p-2">
          {menuList.map((item, index) => {
            return (
              <Link href={item.path}>
                <li className="p-2 flex items-center gap-2 hover:bg-green-950 cursor-pointer">
                  {item.icon}
                  {!collapse && <span>{item.title}</span>}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div
        className={`bg-white  ${
          collapse ? "ml-[4.5rem]" : "ml-[17rem]"
        } min-h-screen w-full `}
      >
        {/* header */}
        <div
          className={`${
            collapse ? "ml-16" : "ml-[16.5rem]"
          } shadow-md  fixed inset-x-0 text-black border bg-white border-gray-200 p-5 flex justify-between`}
        >
          <div className="flex items-center gap-3">
            <button onClick={() => setCollapse(!collapse)}>
              <FaList className="cursor-pointer" />
            </button>
            <h1>Header</h1>
          </div>
          <div className="flex items-center gap-3">
            <FaUser />
            <span>username</span>
          </div>
        </div>

        <div className=" mt-16 p-3">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
