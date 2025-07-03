import { useEffect, useState } from "react";
import Table from "../Table";
import Link from "next/link";
import Button from "../Button";
import { get } from "../../../api/rest.api";

const RoleTable = () => {
  const [roleList, setRoleList] = useState([]);
  const column: any = [
    {
      title: "Name",
      dateIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
  ];
  const fetchRole = async () => {
    const { data, error } = await get("/role");
    if (data && !error) {
      alert(JSON.stringify(data));
      setRoleList(data?.data);
    }
  };
  useEffect(() => {
    fetchRole();
  }, []);
  return (
    <div>
      <div className="flex w-full justify-between items-center ">
        <h1 className="text text-black ">Wellcome to the user page</h1>
        <Link href="/role/create">
          <Button name="Create Role" backgroundColor="bg-blue-500" />
        </Link>
      </div>
      <Table columns={column} data={[]} />
    </div>
  );
};

export default RoleTable;
