import * as React from "react";
import { BoxesNavBar } from "../components/NavBar";
import { BoxCard } from "../components/BoxCard";

const Boxes: React.FunctionComponent = () => {
  return (
    <div>
      <BoxesNavBar></BoxesNavBar>
      <div className="flex justify-center overflow-auto  ">
        <div className="p-10 max-w-screen-xl flex w-full flex-col">
          <div className="py-4">
            <h2 className="text-gray-500 text-lg border-b-2 border-gray-300 pb-4 ">
              Your Boxes
            </h2>
            <div className="mt-10 flex flex-row flex-wrap">
              {[1, 1, 1, 1, 1, 1].map(() => (
                <BoxCard
                  _id="asödflkjas"
                  title="Untitled Box"
                  lastEdited="12.04.2020"
                ></BoxCard>
              ))}
            </div>
          </div>
          <div className="py-4">
            <h2 className="text-gray-500 text-lg border-b-2 border-gray-300 pb-4 ">
              Boxes You are collaborating on
            </h2>
            <div className="mt-10 flex flex-row flex-wrap">
              {[1, 1, 1, 1, 1, 1].map(() => (
                <BoxCard
                  _id="asödflkjas"
                  title="Untitled Box"
                  lastEdited="12.04.2020"
                  owner={{
                    displayName: "Claire Underwood",
                    photoUrl: "sadfkljl",
                  }}
                ></BoxCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
