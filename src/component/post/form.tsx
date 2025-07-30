import { useEffect, useState } from "react";
import Button from "../Button";
import { get } from "../../../api/rest.api";

const PostForm = () => {
  const [userList, setUserList] = useState<any[]>([]);
  const [categoryList, setCategoryList] = useState<any[]>([]);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<FileList | null>();
  const [category, setCategory] = useState("");
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");

  const fetchUser = async () => {
    const { data, error } = await get("/user");
    if (data && !error) {
      setUserList(data?.data);
      //   alert(JSON.stringify(data.data));
    }
  };
  const fetchCategory = async () => {
    const { data, error } = await get("/category");
    if (data && !error) {
      setCategoryList(data?.data);
      //   alert(JSON.stringify(data.data));
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <form className="w-1/2 mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Upload Post</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        >
          <option disabled value="">
            Select category
          </option>
          {categoryList.map((data, index) => {
            return (
              <option key={index} value={data.id}>
                {data?.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">User</label>
        <select
          onChange={(e) => setUser(e.target.value)}
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        >
          <option disabled value="">
            Select user
          </option>
          {userList.map((data, index) => {
            return <option value={data.id}>{data?.username}</option>;
          })}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          //   value={description}
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
          rows={4}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Images
        </label>
        <input
          onChange={(e) => setImages(e.target.files)}
          type="file"
          multiple
          accept="image/*"
          className="mt-1 block w-full text-sm text-gray-600
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-xl file:border-0
                     file:text-sm file:font-semibold
                     file:bg-blue-50 file:text-green-700
                     hover:file:bg-blue-100"
        />
      </div>
      <Button name="Upload" type="submit" />
    </form>
  );
};

export default PostForm;
