import { useEffect, useState } from "react";
import { get } from "../../../api/rest.api";
import Table from "../Table";
import Button from "../Button";
import Link from "next/link";

const User = () => {
  const [userList, setUserList] = useState([]);
  const [toggle, setToggle] = useState(false);
  const fetchUser = async () => {
    const { data, error } = await get("/users");
    if (data && !error) {
      setUserList(data.data);
    }
  };

  // fetchUser();
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      {toggle && <div>This is toggle</div>}
      <Button onClick={() => setToggle(!toggle)} name="Toggle" />
      <div className="flex w-full justify-between items-center ">
        <h1 className="text text-black ">Wellcome to the user page</h1>
        <Link href="/user/create">
          <Button name="Create User" backgroundColor="bg-blue-500" />
        </Link>
      </div>
      ~
      <Table
        columns={[
          {
            title: "id",
            dataIndex: "id",
          },
          {
            title: "name",
            dataIndex: "name",
          },
          {
            title: "username",
            dataIndex: "username",
          },
          {
            title: "Email",
            dataIndex: "email",
          },

          {
            title: "Action",
            dataIndex: "",
            render: (data: any) => {
              return (
                <div className="gap-2 flex">
                  <Link href={`/user/create?id=${data.id}`}>
                    <button className="text-blue-500 text-sm">Edit</button>
                  </Link>
                  <button className="text-red-500 text-sm">Delete</button>
                </div>
              );
            },
          },
        ]}
        data={userList}
      />
    </div>
  );
};

export default User;
