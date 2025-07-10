import { useForm } from "react-hook-form";
import { get, patch, post } from "../../../api/rest.api";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface RoleForm {
  name: string;
  id: number;
  description: string;
}
const RoleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<RoleForm>();

  const router = useRouter();

  const onSubmit = async (value: RoleForm) => {
    if (router?.query?.id) {
      //update
      await patch(`/role/${router?.query?.id}}`, value);
    } else {
      //create
      await post("/role", value);
    }
    alert(`Role ${router?.query?.id ? "updated" : "created"} sucessfully`);
    router.push("/role");
  };
  const fetchRoleById = async (id: number) => {
    const { data, error } = await get(`/role/${id}`);
    if (data && !error) {
      setValue("description", data?.data?.description);
      setValue("name", data?.data?.name);
      // setValue("id", data?.data?.id);
    }
  };

  useEffect(() => {
    const id = parseInt(router?.query?.id as string);
    if (id) {
      fetchRoleById(id);
    }
  }, [router?.isReady]);
  return (
    <div>
      <h1 className="text-black">
        {router.query?.id ? "Update" : "Create"} role
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label className="block text-black mb-2 text-sm font-medium ">
            name
          </label>
          {/* <input {...register("id")} className="hidden" /> */}
          <input
            {...register("name", {
              required: { value: true, message: "Role name is required" },
            })}
            type="text"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors?.name && (
            <span className="text-red-600 italic">{errors?.name?.message}</span>
          )}
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Description
          </label>
          <input
            {...register("description", {
              required: {
                value: true,
                message: "Role description is required",
              },
            })}
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors?.description && (
            <span className="text-red-600 italic">
              {errors?.description.message}
            </span>
          )}
        </div>
        <button className="bg-amber-500  p-3 rounded-md m-3">
          {router?.query?.id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default RoleForm;
