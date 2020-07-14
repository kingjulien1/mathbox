import * as React from "react";
import { ReactComponent as Team } from "../../assets/img/team.svg";

export const Collaborators: React.FunctionComponent<{
  className?: string;
}> = function ({ className }) {
  return (
    <div
      className={`az-10 bottom-0 right-0 mb-4 mr-4 absolute bg-gray-200 rounded-lg p-2 text-gray-700 cursor-pointer shadow ${className}`}
    >
      <div>
        <div className="flex justify-center md:hidden">
          <Team className="fill-current h-6 w-6"></Team>
          <p className="text-gray-500 ml-2">(2)</p>
        </div>
      </div>
    </div>
  );
};
