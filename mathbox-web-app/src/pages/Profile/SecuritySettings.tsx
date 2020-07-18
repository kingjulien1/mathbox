import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";

interface ChangePasswordProps {
  oldpass: string;
  newpass: string;
  confirmpass: string;
}

const SecuritySettings: React.FunctionComponent = () => {
  const { handleSubmit, register, errors, watch } = useForm<
    ChangePasswordProps
  >();
  const changePassword = (values: ChangePasswordProps) => console.log("submit");
  return (
    <div className="mt-10">
      <div className="lg:flex">
        <div className="lg:px-4 w-full">
          <form
            onSubmit={handleSubmit(changePassword)}
            className="flex flex-col"
          >
            <div className="w-full flex flex-col lg:flex-row">
              <div className="flex flex-col lg:w-1/3">
                <h3 className="text-gray-900 text-xl">Old Password</h3>
                <span className="mb-1 text-center text-red-500">
                  {errors?.oldpass?.message}
                </span>
                <input
                  type="password"
                  name="oldpass"
                  placeholder="Old Password"
                  className="my-3 text-base text-gray-500 font-normal py-1 px-4 rounded-lg border-2 border-gray-400 shadow-lg focus:outline-none focus:shadow-outline focus:border-opacity-0 hover:border-opacity-0 hover:shadow-outline placeholder-gray-400"
                  autoComplete="bg-gray-100 shadow-outline"
                  ref={register({
                    required: "please enter your old password",
                  })}
                />
              </div>
              <div className="flex flex-col lg:w-1/3 lg:ml-4">
                <h3 className="text-gray-900 text-xl">New Password</h3>
                <span className="mb-1 text-center text-red-500">
                  {errors?.newpass?.message}
                </span>
                <input
                  type="password"
                  name="newpass"
                  placeholder="New Password"
                  className="my-3 text-base text-gray-500 font-normal py-1 px-4 rounded-lg border-2 border-gray-400 shadow-lg focus:outline-none focus:shadow-outline focus:border-opacity-0 hover:border-opacity-0 hover:shadow-outline placeholder-gray-400"
                  autoComplete="bg-gray-100 shadow-outline"
                  ref={register({
                    minLength: {
                      value: 5,
                      message: "please enter at least 5 characters",
                    },
                    required: "please enter your new password",
                  })}
                />
              </div>
              <div className="flex flex-col lg:w-1/3 lg:ml-4">
                <h3 className="text-gray-900 text-xl">Confirm New Password</h3>
                <span className="mb-1 text-center text-red-500">
                  {errors?.confirmpass?.message}
                </span>
                <input
                  type="password"
                  name="confirmpass"
                  placeholder="Confirm Password"
                  className="my-3 text-base text-gray-500 font-normal py-1 px-4 rounded-lg border-2 border-gray-400 shadow-lg focus:outline-none focus:shadow-outline focus:border-opacity-0 hover:border-opacity-0 hover:shadow-outline placeholder-gray-400"
                  autoComplete="bg-gray-100 shadow-outline"
                  ref={register({
                    validate: (value) =>
                      value === watch("newpass") || "passwords must match",
                  })}
                />
              </div>
            </div>
            <div className="flex flex-col lg:w-1/2">
              <p className="text-gray-500 mt-10">
                Make sure it's at least 15 characters OR at least 8 characters
                including a number and a lowercase letter.
              </p>
              <Button className="mt-4 bg-gray-800 text-gray-100">
                Update Passwords
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { SecuritySettings };
