import { useForm } from "react-hook-form";
import { get, post } from "../../../api/rest.api";
import { useRouter } from "next/router";

interface UserForm {
  name: string;
  username: string;
  email: string;
}
const Create = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserForm>();

  const fetchUser = () => {
    const id = router.query.id;
    get(`/users/${id}`).then((res) => {
      alert(JSON.stringify(res));
    });
  };

  const submit = async (payload: UserForm) => {
    post("/users", payload).then((res) => {
      alert(JSON.stringify(res));
    });

    // const {data,error}=await post("/users",payload)
    // if(data&&!error){
    //   alert("Uer created successfully")
    // }
  };
  return (
    <div>
      <h1>{router.query.id ? "Edit User" : "Create User"}</h1>

      <div className=" flex justify-center items-center">
        <form
          className="grid grid-cols-2 gap-4"
          onSubmit={handleSubmit(submit)}
        >
          <div className="flex flex-col">
            <label>Name</label>
            <input
              {...register("name", {
                required: { value: true, message: "Name is required" },
              })}
              className="border border-gray-500 p-1 focus:outline-none"
              type="text"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-500 italic text-sm">Name is required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label>username</label>
            <input
              {...register("username")}
              className="border border-gray-500 p-1 focus:outline-none"
              type="text"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-500 italic text-sm">Name is required</p>
            )}
          </div>{" "}
          <div className="flex flex-col">
            <label>email</label>
            <input
              {...register("email")}
              className="border border-gray-500 p-1 focus:outline-none"
              type="text"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-500 italic text-sm">Email is required</p>
            )}
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
