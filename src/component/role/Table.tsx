import { useEffect, useState } from "react";
import Table, { ColumnPrps } from "../Table";
import Link from "next/link";
import Button from "../Button";
import { get } from "../../../api/rest.api";

const RoleTable = () => {
  const [roleList, setRoleList] = useState([]);
  const column: ColumnPrps[] = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
  ];
  const fetchRole = async () => {
    const { data, error } = await get("/role");
    if (data && !error) {
      setRoleList(data?.data);
    }
  };
  useEffect(() => {
    fetchRole();
  }, []);
  return (
    <div>
      <div className="flex w-full justify-between items-center ">
        <h1 className="text text-black ">Role</h1>
        <Link href="/role/create">
          <Button name="Create Role" backgroundColor="bg-blue-500" />
        </Link>
      </div>
      <Table columns={column} data={[]} />
    </div>
  );
};

export default RoleTable;
