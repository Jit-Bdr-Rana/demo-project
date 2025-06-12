interface ColumnPrps {
  title: string;
  dataIndex: string;
}

interface Props {
  data: any;
  columns: ColumnPrps[];
}

const Table = ({ data, columns }: Props) => {
  return (
    <div>
      <h1>Table design</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-green-800">
            {columns.map((column, index) => {
              return (
                <th key={index} className="px-4 py-2">
                  {column.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: number) => {
            return (
              <tr key={index} className="odd:bg-gray-50 odd:text-black">
                {columns.map((column, index) => {
                  return (
                    <td key={index} className="px-4 py-2">
                      {item[column.dataIndex]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
