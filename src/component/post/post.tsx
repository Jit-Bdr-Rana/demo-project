import Link from "next/link";
import Button from "../Button";

const Post = () => {
  return (
    <div>
      <div className="flex w-full justify-between items-center ">
        <h1 className="text text-black ">Post</h1>
        <Link href="/post/create">
          <Button name="Create Post" backgroundColor="bg-blue-500" />
        </Link>
      </div>
      {/* <Table columns={column} data={roleList} /> */}
    </div>
  );
};

export default Post;
