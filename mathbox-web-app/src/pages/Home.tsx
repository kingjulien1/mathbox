import React from "react";
import { ReactComponent as Logo } from "../assets/img/package.svg";
import { ReactComponent as Add } from "../assets/img/add.svg";
import { Button } from "../components/Button";
import { useHistory, Link } from "react-router-dom";

function Home() {
  const { push } = useHistory();
  return (
    <div className=" p-4 h-screen flex">
      <div className="flex flex-col w-full">
        <div className="m-auto text-gray-500">
          <div className="flex justify-center">
            <span>
              <Link to="/board">
                <Add className="text-gray-900 fill-current w-10 h-10 hover:shadow-outline focus:shadow-outline"></Add>
              </Link>
            </span>
          </div>
          <div className="flex justify-center">
            <Logo className="m-3  h-32 w-32 text-gray-900 fill-current"></Logo>
          </div>
          <div className="flex justify-center">
            <h1 className="text-5xl text-gray-800 font-black">Mathbox.io</h1>
          </div>
          <div className="flex justify-center">
            <p className="text-gray-500 text-xl m-1 text-center">
              collaborate in realtime on a whiteboard with tools that help you
              solve problems quickly and with delight.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="mt-20 px-4 w-full flex flex-col sm:flex-row sm: justify-between sm:w-1/2">
              <Button
                className="bg-gray-800 text-gray-100"
                onClick={() => push("/signup")}
              >
                Sign Up
              </Button>
              <span className="self-center font-bold text-gray-500">or</span>
              <Button
                className="bg-gray-100 text-gray-800"
                onClick={() => push("/signin")}
              >
                Sign in
              </Button>
            </div>
          </div>
        </div>
        <div className="p-5 mt-20 flex justify-center align-bottom">
          <span className="mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              width="18px"
              height="18px"
            >
              <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
            </svg>
          </span>
          <p className="ml-2 text-center text-gray-900 text-lg underline cursor-pointer">
            see how it works
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
