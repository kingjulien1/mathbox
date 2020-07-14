import * as React from "react";
import { ReactComponent as Team } from "../../assets/img/team.svg";
import { ReactComponent as PersonAdd } from "../../assets/img/person-add.svg";
import Avatar from "../Avatar";

export const Collaborators: React.FunctionComponent<{
  className?: string;
}> = function ({ className }) {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  return (
    <div
      className={`z-10 bottom-0 right-0 mb-4 mr-4 md:mr-40 absolute p-2 text-gray-700 cursor-pointer ${className}`}
    >
      <div
        className={`fill-current h-6 w-6 ${
          isOpen ? "inline-block" : "hidden"
        } sm:inline-block`}
      >
        <div>
          <PersonAdd className="h-6 w-6 mb-4 relative inline-block"></PersonAdd>

          <div className="flex ">
            <Avatar className="h-6 w-6 mb-4 relative inline-block "></Avatar>
            <p className="hidden md:block ml-2 text-gray-500 text-base italic">
              You
            </p>
          </div>
          <Avatar className="h-6 w-6 mb-4 relative inline-block"></Avatar>
          <Avatar className="h-6 w-6 mb-4 relative inline-block"></Avatar>
        </div>
      </div>
      <Team
        className={`top-0 fill-current h-6 w-6 md:hidden mt-2`}
        onClick={() => setIsOpen((isopen) => !isopen)}
      ></Team>
    </div>
  );
};
