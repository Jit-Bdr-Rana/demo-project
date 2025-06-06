import { users } from "./users";

const Table = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <table className="table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className=" text-black border border-gray-300 px-4 py-2">ID</th>
            <th className="text-black border border-gray-300 px-4 py-2">
              Name
            </th>
            <th className="text-black border border-gray-300 px-4 py-2">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, email }) => (
            <tr key={id} className="hover:bg-gray-200">
              <td className=" text-black border border-gray-300 px-4 py-2">
                {id}
              </td>
              <td className=" text-black border border-gray-300 px-4 py-2">
                {name}
              </td>
              <td className="text-black border border-gray-300 px-4 py-2">
                {email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
