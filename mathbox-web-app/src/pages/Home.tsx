import React from "react";
import { Container } from "../components/Layout";
import { ReactComponent as Logo } from "../assets/package.svg";
import { ButtonDark, ButtonLight } from "../components/Button";

function Home() {
  return (
    <Container>
      <div className="flex flex-col w-full">
        <div className="m-auto">
          <div className="flex justify-center">
            <Logo className="m-3 ml-10"></Logo>
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
          <div className="flex justify-center mt-20 align-middle">
            <div className=" sm:w-1/3 px-4 w-full flex justify-between">
              <ButtonDark>Sign up</ButtonDark>
              <span className="self-center font-bold text-gray-500">or</span>
              <ButtonLight>Sign in</ButtonLight>
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
    </Container>
  );
}

export default Home;
