import * as React from "react";
import Avatar from "./Avatar";
import { ReactComponent as Logo } from "../assets/img/package.svg";
import { ReactComponent as Star } from "../assets/img/star.svg";

export default function NavBar() {
  return (
    <div className="bg-gray-100 w-screen">
      <div className="flex p-4 items-center">
        <Logo className="h-8 w-8 text-gray-900 fill-current"></Logo>
        <div className="flex flex-auto justify-center items-center sm:justify-start sm:ml-10">
          <p className="text-lg  text-gray-900 cursor-pointer">
            Untitled Document
          </p>
          <Star className="w-5 h-5 ml-2 text-gray-600 fill-current hidden sm:block"></Star>
        </div>
        <Avatar
          className="h-8 w-8"
          url="https://vignette.wikia.nocookie.net/house-of-cards/images/1/17/Francis_Underwood.jpg/revision/latest/top-crop/width/360/height/450?cb=20170625143104&path-prefix=de"
        ></Avatar>
      </div>
    </div>
  );
}

export const BoxesNavBar: React.FunctionComponent = () => {
  return (
    <div className="bg-gray-100 w-screen">
      <div className="flex p-6 s-center">
        <Logo className="h-10 w-10 text-gray-900 fill-current cursor-pointer  "></Logo>
        <div className="flex flex-auto justify-center items-center sm:justify-start sm:ml-6">
          <p className="text-2xl text-gray-900 cursor-pointer">Mathbox</p>
        </div>
        <Avatar
          className="h-8 w-8"
          url="https://vignette.wikia.nocookie.net/house-of-cards/images/1/17/Francis_Underwood.jpg/revision/latest/top-crop/width/360/height/450?cb=20170625143104&path-prefix=de"
        ></Avatar>
      </div>
    </div>
  );
};
