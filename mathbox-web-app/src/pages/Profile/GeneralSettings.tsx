import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLoggedInUser } from "../../hooks/Firebase/useAuth";
import { ReactComponent as Edit } from "../../assets/img/edit.svg";
import { Button } from "../../components/Button";

interface ProfileProps {
  displayName: string;
  email: string;
}

const GeneralSettings: React.FunctionComponent = () => {
  const { handleSubmit, register, errors, setValue } = useForm<ProfileProps>();
  const { user } = useLoggedInUser();

  useEffect(() => {
    console.log("ran effect");
    if (user?.displayName) setValue("displayName", user.displayName);
    if (user?.email) setValue("email", user.email);
  }, [user, setValue]);

  const updateProfile = ({ displayName, email }: ProfileProps) =>
    console.log(email, displayName);
  return (
    <div className="mt-10">
      <div className="lg:flex">
        <div className="lg:w-1/2 lg:px-4">
          <form
            onSubmit={handleSubmit(updateProfile)}
            className="flex flex-col"
          >
            <h3 className="text-gray-900 font-bold text-xl">Name</h3>
            <span className="mb-1 text-center text-red-500">
              {errors?.displayName?.message}
            </span>
            <input
              type="text"
              name="displayName"
              placeholder="display Name"
              className="my-3 text-base text-gray-500 font-normal py-1 px-4 rounded-lg border-2 border-gray-400 shadow-lg focus:outline-none focus:shadow-outline focus:border-opacity-0 hover:border-opacity-0 hover:shadow-outline placeholder-gray-400"
              autoComplete="bg-gray-100 shadow-outline"
              ref={register()}
            />
            <p className="text-gray-500 ">
              Your name may appear around Boxes where you contributed. You can
              remove it at any time.
            </p>
            <h3 className="text-gray-900 font-bold text-xl mt-10">Email</h3>
            <span className="mb-1 text-center text-red-500">
              {errors?.email?.message}
            </span>
            <input
              type="email"
              name="email"
              className="my-3 text-base text-gray-500 font-normal py-1 px-4 rounded-lg border-2 border-gray-400 shadow-lg focus:outline-none focus:shadow-outline focus:border-opacity-0 hover:border-opacity-0 hover:shadow-outline placeholder-gray-400"
              autoComplete="bg-gray-100 shadow-outline"
              ref={register({
                required: "email required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            <p className="text-gray-500 ">
              Just like your name, your email may appear around Boxes where you
              contributed.
            </p>
            <Button className="mt-10 bg-gray-800 text-gray-100">
              Update Profile
            </Button>
          </form>
        </div>
        <div className="lg:w-1/2 lg:flex lg:items-center justify-center">
          <h3 className="text-gray-900 font-bold text-xl mt-10 my-3 lg:mt-0 lg:px-4 lg:hidden">
            Profile Picture
          </h3>
          <div className="flex justify-center">
            <div>
              <img
                src={user?.photoURL || ""}
                alt="avatar"
                className="w-40 h-40 lg:w-64 lg:h-64 rounded-full z-0"
              />
              <button className="flex bg-gray-900 text-gray-200 z-10 rounded-full w-20 justify-center py-1 -mt-4 lg:-mt-8 items-center hover:shadow-outline focus:shadow-outline">
                <Edit className="mr-2 fill-current w-5 h-5"></Edit>
                <span className="text-lg">Edit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GeneralSettings };
