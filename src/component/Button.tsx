//props
interface Props {
  name: string;
  backgroundColor?: string;
  onClick?: () => void;
  type?: "submit" | "button";
}

export default function Button({
  name,
  onClick,
  backgroundColor,
  type,
}: Props) {
  return (
    <button
      type={type || "button"}
      onClick={() => onClick && onClick()}
      className={`${
        backgroundColor || "bg-green-500"
      } text-xs px-3 p-2 rounded-md m-2`}
    >
      {name}
    </button>
  );
}
