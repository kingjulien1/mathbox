import * as React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/img/package.svg";
import { useLoggedInUser } from "../hooks/Firebase/useAuth";
import Avatar from "./Avatar";

interface NavBarProps {
  title: string;
}

export const NavBar: React.FunctionComponent<NavBarProps> = ({ title }) => {
  const { user } = useLoggedInUser();
  const { push } = useHistory();
  return (
    <div className="bg-gray-100 w-screen">
      <div className="flex p-6 s-center">
        <Logo
          className="h-10 w-10 text-gray-900 fill-current cursor-pointer"
          onClick={() => {
            return user ? push("/boxes") : push("/signUp");
          }}
          tabIndex={1}
        ></Logo>
        <div className="flex flex-auto justify-center items-center sm:justify-start sm:ml-6">
          <p className="text-2xl text-gray-900">{title}</p>
        </div>
        <Avatar
          className="h-8 w-8"
          url="https://vignette.wikia.nocookie.net/house-of-cards/images/1/17/Francis_Underwood.jpg/revision/latest/top-crop/width/360/height/450?cb=20170625143104&path-prefix=de"
        ></Avatar>
      </div>
    </div>
  );
};
