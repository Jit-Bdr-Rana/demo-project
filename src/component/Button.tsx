//props
interface Props {
  name: string;
  backgroundColor?: string;
  onClick?: () => void;
}

export default function Button({ name, onClick, backgroundColor }: Props) {
  return (
    <button
      onClick={() => onClick && onClick()}
      className={`${backgroundColor || "bg-amber-500"}  p-3 rounded-md m-3`}
    >
      {name}
    </button>
  );
}

export function Button2({ name, backgroundColor }: Props) {
  return (
    <button
      className={`${backgroundColor || "bg-amber-500"}  p-3 rounded-md m-3`}
    >
      {name}
    </button>
  );
}
