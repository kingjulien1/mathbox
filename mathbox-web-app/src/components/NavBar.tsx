import * as React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/img/package.svg";
import { useLoggedInUser } from "../hooks/Firebase/useAuth";

interface NavBarProps {
  title: string;
}

export const NavBar: React.FunctionComponent<NavBarProps> = ({ title }) => {
  const { user } = useLoggedInUser();
  const { push } = useHistory();
  return (
    <div className="bg-gray-900 w-screen">
      <div className="flex p-6 s-center">
        <Logo
          className="h-10 w-10 text-gray-200 fill-current cursor-pointer"
          onClick={() => {
            return user ? push("/boxes") : push("/signUp");
          }}
          tabIndex={1}
        ></Logo>
        <div className="flex flex-auto justify-center items-center sm:justify-start sm:ml-6">
          <h1 className="text-2xl text-gray-200">{title}</h1>
        </div>
        <img
          src={user?.photoURL || ""}
          alt="avatar"
          className="h-10 w-10 object-contain bg-gray-700 font-semibold text-gray-100 rounded-full border-gray-500 border-2 cursor-pointer"
          onClick={() => push("/profile")}
        ></img>
      </div>
    </div>
  );
};
