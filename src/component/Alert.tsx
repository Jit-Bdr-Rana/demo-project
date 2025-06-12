import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaRegCircleXmark } from "react-icons/fa6";

interface Props {
  message: string;
  type: "success" | "error" | "info" | "warning";
}

const Alert = ({ message, type }: Props) => {
  return (
    <div>
      <p
        className={`${type == "success" && "bg-green-500"} ${
          type == "error" && "bg-red-500"
        } rounded-md p-3 px-8 flex gap-2 items-center`}
      >
        <span>{message}</span>
        {type == "success" && <IoCheckmarkCircleOutline size={20} />}
        {type == "error" && <FaRegCircleXmark size={20} />}
      </p>
    </div>
  );
};

export default Alert;
