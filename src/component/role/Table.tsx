import { useEffect, useState } from "react";
import Table, { ColumnPrps } from "../Table";
import Link from "next/link";
import Button from "../Button";
import { get, remove } from "../../../api/rest.api";
import { useRouter } from "next/router";

const RoleTable = () => {
  const [roleList, setRoleList] = useState([]);
  const router = useRouter();
  const deleteRole = async (id: number) => {
    await remove(`/role/${id}`);
    alert("Role deleted successfully");
    fetchRole();
  };
  const updateRole = (id: number) => {
    router.push(`/role/create?id=${id}`);
  };
  const column: ColumnPrps[] = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (role) => {
        return (
          <span>
            <Button onClick={() => updateRole(role.id)} name="Edit" />
            <Button onClick={() => deleteRole(role?.id)} name="Delete" />
          </span>
        );
      },
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
      <Table columns={column} data={roleList} />
    </div>
  );
};

export default RoleTable;
