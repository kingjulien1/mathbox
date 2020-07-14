import * as React from "react";
import { ReactComponent as FolderOpen } from "../../assets/img/folder-open.svg";
import { ReactComponent as Close } from "../../assets/img/close.svg";
import { ReactComponent as Export } from "../../assets/img/export.svg";
import { ReactComponent as Grid } from "../../assets/img/grid.svg";

export const FileMenu: React.FunctionComponent<{
  className?: string;
}> = function ({ className }) {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  return (
    <div
      className={`z-10 top-0 right-0 mt-20 mr-4 inline-block absolute p-2 text-gray-700 cursor-pointer ${className}`}
    >
      <Close
        className={`top-0 fill-current h-6 w-6 mb-10 ${
          isOpen ? "block" : "hidden"
        } sm:hidden`}
        onClick={() => setIsOpen((isopen) => !isopen)}
      ></Close>
      <FolderOpen
        className={`top-0 fill-current h-6 w-6 ${
          isOpen ? "hidden" : "block"
        } sm:hidden `}
        onClick={() => setIsOpen((isopen) => !isopen)}
      ></FolderOpen>
      <div
        className={`fill-current h-6 w-6 ${
          isOpen ? "inline-block" : "hidden"
        } sm:block`}
      >
        <Export className="fill-current h-6 w-6 mb-10 "></Export>
        <Grid className="fill-current h-6 w-6 mb-10"></Grid>
      </div>
    </div>
  );
};
