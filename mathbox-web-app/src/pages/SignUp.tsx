import * as React from "react";
import { ReactComponent as Logo } from "../assets/package.svg";

export default function SignUp() {
  return (
    <div className="bg-gray-100 p-4 pt-40 h-screen flex">
      <div className="flex flex-col w-full">
        <h1 className="text-5xl text-gray-800 font-bold text-center">
          Create your Account
        </h1>
        <div title="form"></div>
      </div>
    </div>
  );
}
