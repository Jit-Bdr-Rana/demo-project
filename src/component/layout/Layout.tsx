import { FaUser } from "react-icons/fa6";
import { FaList } from "react-icons/fa6";
import { AiFillDashboard } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const menuList = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <AiFillDashboard />,
    },
    {
      title: "Users",
      path: "/users",
      icon: <FaUserFriends />,
    },
  ];
  return (
    <div className="flex w-full items-center justify-center min-h-screen">
      <div className=" bg-green-800 w-[20%] min-h-screen">
        <h1 className="text-center p-3 ">Admin</h1>
        <ul className="p-2">
          {menuList.map((item, index) => {
            return (
              <li className="p-2 flex items-center gap-2 hover:bg-green-950 cursor-pointer">
                {item.icon}
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" bg-white w-[80%] min-h-screen ">
        <div
          className={
            "shadow-md text-black border border-gray-300 p-5 flex justify-between"
          }
        >
          <div className="flex items-center gap-3">
            <FaList className="cursor-pointer" />
            <h1>Header</h1>
          </div>
          <div className="flex items-center gap-3">
            <FaUser />
            <span>username</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
