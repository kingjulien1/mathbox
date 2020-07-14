import * as React from "react";
import { ReactComponent as Logo } from "../assets/img/package.svg";
import { ReactComponent as Star } from "../assets/img/star.svg";
import Avatar from "./Avatar";

export default function NavBar() {
  return (
    <div className="border-b-2 border-gray-300">
      <div className="flex p-4 items-center">
        <Logo className="h-8 w-8"></Logo>
        <div className="flex flex-auto justify-center items-center sm:justify-start sm:ml-10">
          <p className="text-lg  text-gray-600 cursor-pointer">
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
