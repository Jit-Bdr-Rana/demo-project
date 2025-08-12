import Link from "next/link";
import Button from "../Button";
import Table from "../Table";
import { useEffect, useState } from "react";
import { get } from "../../../api/rest.api";

const Post = () => {
  const [post, setPost] = useState([]);
  const fetchPost = () => {
    get("/posts").then(({ data }) => {
      setPost(data?.data);
    });
  };
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Author",
      dataIndex: "username",
    },
    {
      title: "Category",
      dataIndex: "categoryname",
    },
    {
      title: "Images",
      dataIndex: "images",
      render: (data: any, i: number) => {
        return (
          <div className="flex gap-3">
            {data?.images?.map((image: any, index: number) => {
              return (
                <img
                  onClick={() => {
                    const a = document.createElement("a");
                    a.href = image;
                    a.download = "image.png";
                    a.target = "_blank";
                    a.click();
                  }}
                  key={index}
                  src={image}
                  alt="image"
                  className="w-10 h-10"
                />
              );
            })}
            {!data?.images && (
              <div className="text-center text-gray-500">No images</div>
            )}
          </div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (data: any, i: number) => {
        return (
          <div className="flex justify-between">
            <Link href={`/post/${data.id}`}>
              <Button name="View" backgroundColor="bg-blue-500" />
            </Link>
            <Link href={`/post/edit/${data.id}`}>
              <Button name="Edit" backgroundColor="bg-blue-500" />
            </Link>
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div>
      <div className="flex w-full justify-between items-center ">
        <h1 className="text text-black ">Post</h1>
        <Link href="/post/create">
          <Button name="Create Post" backgroundColor="bg-blue-500" />
        </Link>
      </div>
      <Table columns={columns} data={post} />
    </div>
  );
};

export default Post;
