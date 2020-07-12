import React from "react";
import { Container } from "./components/Layout";
import { ReactComponent as Logo } from "./assets/package.svg";
import { ButtonDark, ButtonLight } from "./components/Button";

function App() {
  return (
    <Container>
      <div className="flex-row align-middle">
        <div className="mt-20 flex-col content-center">
          <div className="flex justify-center">
            <Logo className="m-3 ml-10"></Logo>
          </div>
          <div className="flex justify-center">
            <h1 className=" sm:text-3xl text-gray-800 font-black">
              Mathbox.io
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-gray-500 text-xl m-5 text-center">
              collaborate in realtime on a whiteboard with tools that help you
              solve problems quickly and with delight.
            </p>
          </div>
          <div className="flex justify-center mt-20 align-middle">
            <div className=" w-1/3 flex justify-between">
              <ButtonDark>Sign up</ButtonDark>
              <span className="self-center font-bold text-gray-500">or</span>
              <ButtonLight>Sign in</ButtonLight>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
