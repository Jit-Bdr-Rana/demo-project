interface BreadcrumbProps {
  title: string;
  link: string;
}

export default function Breadcrumb({ data }: { data: BreadcrumbProps[] }) {
  return (
    <div>
      <ul className="flex gap-1">
        {data.map((item, i) => {
          return (
            <li>
              {
                <a href={item.link}>
                  {item.title} {i != data.length - 1 ? ">" : ""}
                </a>
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
}
