import Alert from "@/component/Alert";
import Breadcrumb from "@/component/Breadcrumb";
import Counter from "@/component/Counter";
import List from "@/component/List";
import Tab from "@/component/Tab";
import Table from "@/component/Table";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* <h1>Tab Design</h1> */}
      {/* <Tab /> */}
      {/* <Counter /> */}
      {/* <List /> */}
      {/* <Breadcrumb
        data={[
          { title: "Home", link: "/" },
          { title: "About", link: "/about" },
          { title: "Contact", link: "/contact" },
        ]}
      /> */}
      <Alert message="This is a success message" type="success" />
      <Alert message="This is a error message" type="error" />
      <Table
        data={[
          {
            name: "John Doe",
            email: "john@example.com",
            address: "123 Main St",
            phone: "123-456-7890",
          },
          {
            name: "John Doe",
            email: "john@example.com",
            address: "123 Main St",
            phone: "123-456-7890",
          },
        ]}
        columns={[
          {
            title: "Name",
            dataIndex: "name",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Address",
            dataIndex: "address",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },
        ]}
      />
    </div>
  );
}
