import { useEffect, useState } from "react";
import { get } from "../../../api/rest.api";
import Table from "../Table";

const User = () => {
  const [userList, setUserList] = useState([]);

  const fetchUser = async () => {
    const { data, error } = await get("/users");
    if (data && !error) {
      setUserList(data.data);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <h1 className="text text-black">Wellcome to the user page</h1>
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
            dataIndex: "",
          },
          {
            title: "Address",
            dataIndex: "",
            render: (data: any) => {
              return <> {data?.address?.light}</>;
            },
          },
        ]}
        data={userList}
      />
    </div>
  );
};

export default User;
