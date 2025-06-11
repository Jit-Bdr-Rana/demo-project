import Breadcrumb from "@/component/Breadcrumb";
import Counter from "@/component/Counter";
import List from "@/component/List";
import Tab from "@/component/Tab";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* <h1>Tab Design</h1> */}
      {/* <Tab /> */}
      {/* <Counter /> */}
      {/* <List /> */}
      <Breadcrumb
        data={[
          { title: "Home", link: "/" },
          { title: "About", link: "/about" },
          { title: "Contact", link: "/contact" },
        ]}
      />
    </div>
  );
}
