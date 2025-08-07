import { useForm } from "react-hook-form";
import { post } from "../../api/rest.api";
import { setToken } from "@/utils/token";
import { useRouter } from "next/router";

interface ILogin {
  email: string;
  password: string;
}
const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  const onsubmit = async (value: ILogin) => {
    const { data, error } = await post("/auth/login", value);
    if (data && !error) {
      alert("Login Successfully");
      setToken(data?.token);
      router.push("/dashboard");
    }
  };
  return (
    <div className="flex  min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onsubmit)} className="space-y-6">
          <div>
            <label className="block text-sm/6 font-medium text-gray-500">
              Email address
            </label>
            <div className="mt-2">
              <input
                {...register("email", { required: true })}
                id="email"
                type="email"
                name="email"
                required
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm/6 font-medium text-gray-500">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                {...register("password", { required: true })}
                id="password"
                type="password"
                required
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
              {errors.password && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
