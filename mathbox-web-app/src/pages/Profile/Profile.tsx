import * as React from "react";
import { NavBar } from "../../components/NavBar";
import { GeneralSettings } from "./GeneralSettings";
import { SecuritySettings } from "./SecuritySettings";
import { DangerZone } from "./DangerZone";

export default () => (
  <div>
    <NavBar title="Profile"></NavBar>
    <div className="flex justify-center overflow-auto  ">
      <div className="p-10 max-w-screen-xl flex w-full flex-col">
        <div className="py-4">
          <h2 className="text-gray-500 text-lg border-b-2 border-gray-300 pb-4">
            Your Profile
          </h2>
          <GeneralSettings></GeneralSettings>
        </div>
        <div className="py-4">
          <h2 className="text-gray-500 text-lg border-b-2 border-gray-300 pb-4">
            Security
          </h2>
          <SecuritySettings></SecuritySettings>
        </div>
        <div className="py-4">
          <h2 className="text-gray-500 text-lg border-b-2 border-gray-300 pb-4">
            Danger Zone
          </h2>
          <DangerZone></DangerZone>
        </div>
      </div>
    </div>
  </div>
);
