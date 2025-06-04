//props
interface Props {
  name: string;
}

export default function Button(props: Props) {
  return (
    <button className="bg-amber-500 p-3 rounded-md m-3">{props.name}</button>
  );
}
