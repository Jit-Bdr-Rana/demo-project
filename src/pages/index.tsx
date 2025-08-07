import Button from "@/component/Button";
import Login from "@/component/Login";
import Modal from "@/component/Modal";
import { useState } from "react";

export default function Home() {
  const [open, setIsOpen] = useState(false);
  return <Login />;
}

export async function getServerSideProps() {
  return {
    props: {
      loginPage: true,
    },
  };
}
