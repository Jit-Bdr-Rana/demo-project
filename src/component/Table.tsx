import { useState } from "react";

export interface ColumnPrps {
  title: string;
  dataIndex: string;
  render?: (data: any, i: number) => React.ReactNode;
}

interface Props {
  data: any[];
  columns: ColumnPrps[];
  pagination?: {
    pageSize: number;
    total: number;
  };
}

const Table = ({ data, columns, pagination }: Props) => {
  const totalPage = Math.ceil(
    (pagination?.total || 0) / (pagination?.pageSize || 10)
  );
  const [page, setPage] = useState(1);
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

      {pagination && (
        <div className="flex items-center justify-center space-x-2 mt-4">
          <button
            className="px-3 py-1 border rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-50"
            disabled
          >
            Prev
          </button>

          {Array.from({ length: totalPage }, (v, i) => {
            return (
              <button
                onClick={() => setPage(i + 1)}
                className={`px-3 py-1 border rounded-md ${
                  page == i + 1 && "bg-green-600"
                }  text-white hover:bg-green-700`}
              >
                {i + 1}
              </button>
            );
          })}

          <button className="px-3 py-1 border rounded-md text-gray-600 hover:bg-gray-100">
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
