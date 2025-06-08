import Tab from "@/component/Tab";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Tab Design</h1>
      <Tab
        data={[
          {
            title: "Tab1",
            key: "Tab1",
            onClick: () => {
              console.log("Tab1");
            },
            content: <div>Tab1</div>,
          },
          {
            title: "Tab2",
            key: "Tab2",
            onClick: () => {
              console.log("Tab2");
            },
            content: <div>Tab2</div>,
          },
          {
            title: "Tab3",
            key: "Tab3",
            onClick: () => {
              console.log("Tab2");
              alert("Tab3");
            },
            content: <div>Tab2</div>,
          },
          {
            title: "Tab4",
            key: "Tab4",
            onClick: () => {
              console.log("Tab2");
              alert("Tab4");
            },
            content: <div>Tab4</div>,
          },
        ]}
      />
    </div>
  );
}
