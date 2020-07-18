import React, { FunctionComponent } from "react";
import { Button } from "../../components/Button";

const DangerZone: FunctionComponent = () => {
  return (
    <div className="mt-10 lg:px-4 lg:flex">
      <div className="flex flex-col lg:w-1/2 lg:px-4">
        <h3 className="text-gray-900 font-bold text-xl">Sign out</h3>
        <p className="text-gray-500 mt-10">
          Make sure it's at least 15 characters OR at least 8 characters
          including a number and a lowercase letter.
        </p>
        <Button className="mt-4 bg-gray-200 text-gray-900">Sign Out</Button>
      </div>
      <div className="flex flex-col mt-10 lg:w-1/2 lg:mt-0 lg:px-4">
        <h3 className="text-red-700 font-bold text-xl">Delete Account</h3>
        <p className="text-gray-500 mt-10">
          Attention! Once your Account is deleted, there is no going back - all
          your Boxes will be lost. Your collaborations will <b>not</b> be
          deleted.
        </p>
        <Button className="mt-4 bg-red-700 text-gray-200 border-none">
          Delete Account
        </Button>
      </div>
    </div>
  );
};

export { DangerZone };
