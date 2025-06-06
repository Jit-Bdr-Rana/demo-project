import Link from "next/link";

const Breadcrumb = () => {
  return (
    <nav className="text-gray-700 text-sm mb-4" aria-label="Breadcrumb">
      <ol className="list-reset flex">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <span className="mx-2">/</span>
        </li>
        <li>
          <Link href="/products" className="text-blue-600 hover:underline">
            Products
          </Link>
        </li>
        <li>
          <span className="mx-2">/</span>
        </li>
        <li className="text-gray-500">Product Details</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
