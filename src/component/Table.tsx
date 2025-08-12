export interface ColumnPrps {
  title: string;
  dataIndex: string;
  render?: (data: any, i: number) => React.ReactNode;
}

interface Props {
  data: any[];
  columns: ColumnPrps[];
}

const Table = ({ data, columns }: Props) => {
  return (
    <div className="max-h-[400px] z-0 overflow-auto border border-gray-300 rounded-md">
      <table className="w-full table-fixed border-collapse">
        <thead className="bg-green-800 text-white sticky top-0 z-10">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left"
                style={{ minWidth: "150px" }} // keeps consistent column widths
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, topIndex) => (
            <tr
              key={topIndex}
              className="odd:bg-gray-100 text-black hover:bg-gray-200"
            >
              {columns.map((column, index) => (
                <td key={index} className="px-4 py-2 break-words">
                  {column?.render
                    ? column?.render(item, topIndex)
                    : item[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
