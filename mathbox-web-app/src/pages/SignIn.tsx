import * as React from "react";
import { Button } from "../components/Button";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function SignIn() {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values: any) => console.log(values);
  return (
    <div className="bg-gray-100 p-4 pt-40 h-screen justify-center align-middle flex">
      <div className="flex flex-col w-full max-w-md">
        <h1 className="text-5xl text-gray-800 font-bold text-center">
          Sign In To Mathbox
        </h1>
        <div className="flex flex-col justify-center mt-10">
          <form
            className="m-auto flex flex-col w-full p-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <span className="mb-1 text-center text-red-500">
              {errors.email && errors.email.message}
            </span>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="mb-3 text-base font-normal py-1 px-4 rounded-lg border-2 border-gray-400 shadow-lg focus:outline-none focus:shadow-outline focus:border-opacity-0 hover:border-opacity-0 hover:shadow-outline placeholder-gray-400"
              ref={register({
                required: "email required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            <span className="mb-1 text-center text-red-500">
              {errors.password && errors.password.message}
            </span>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="mb-3 text-base font-normal py-1 px-4 rounded-lg border-2 border-gray-400 shadow-lg focus:outline-none focus:shadow-outline focus:border-opacity-0 hover:border-opacity-0 hover:shadow-outline placeholder-gray-400"
              ref={register({
                required: "password required",
              })}
            />
            <Button className="mt-3 bg-gray-800 text-gray-100">Sign In</Button>
            <label className="mt-1 text-gray-500 text-center">
              don`t have an account yet?
              <Link className="underline text-gray-700" to="/signup">
                Sign Up here.
              </Link>
            </label>
          </form>
          <span className="text-center text-gray-500">or</span>
          <div className="m-auto flex flex-col w-full p-4">
            <Button className="flex flex-row justify-center">
              <span className="ml-4">
                <svg className="w-5 h-5 mt-2 mr-4" viewBox="0 0 533.5 544.3">
                  <path
                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                    fill="#4285f4"
                  />
                  <path
                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                    fill="#34a853"
                  />
                  <path
                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                    fill="#fbbc04"
                  />
                  <path
                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                    fill="#ea4335"
                  />
                </svg>
              </span>
              <span>Sign In With Google</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
