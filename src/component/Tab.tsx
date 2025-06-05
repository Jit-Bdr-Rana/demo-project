import { useState } from "react";

export default function Tab() {
  const [tab, setTab] = useState("Tab1");
  const handleClick = (val: string) => {
    setTab(val);
  };
  return (
    <div>
      <div className="flex">
        <button
          onClick={() => handleClick("Tab1")}
          className={`border ${
            tab == "Tab1" ? "bg-blue-600" : "border-gray-400"
          }  p-2 px-8 cursor-pointer`}
        >
          Tab1{" "}
        </button>
        <button
          onClick={() => handleClick("Tab2")}
          className={`${
            tab == "Tab2" ? "bg-blue-600" : "border-gray-400"
          }  p-2 px-8 cursor-pointer`}
        >
          Tab2
        </button>
      </div>
      {tab === "Tab1" && (
        <div className="border h-52">
          <h1>Tab 1 content</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      )}

      {tab === "Tab2" && (
        <div className="border h-52">
          <h1>Tab 2 content</h1>
          <p>Tab 2 content</p>
        </div>
      )}
    </div>
  );
}
