import { useState } from "react";
interface TabProps {
  data: {
    title: string;
    key: string;
    onClick: Function;
    content: React.ReactNode;
  }[];
}

export default function Tab({ data }: TabProps) {
  const [tab, setTab] = useState(data.map((item) => item.key)[0]);
  const handleClick = (val: string) => {
    setTab(val);
  };
  return (
    <div>
      <div className="flex">
        {data.map((item) => {
          return (
            <button
              onClick={() => {
                handleClick(item.key);
                item.onClick();
              }}
              className={`border ${
                tab == item.key ? "bg-blue-600" : "border-gray-400"
              }  p-2 px-8 cursor-pointer`}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <div className="border h-52">
        {data.map((item) => {
          return tab == item.key && item.content;
        })}
      </div>
    </div>
  );
}
