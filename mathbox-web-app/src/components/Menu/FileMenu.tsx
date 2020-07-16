import * as React from "react";
import { ReactComponent as FolderOpen } from "../../assets/img/folder-open.svg";
import { ReactComponent as Close } from "../../assets/img/close.svg";
import { ReactComponent as Export } from "../../assets/img/export.svg";
import { ReactComponent as Grid } from "../../assets/img/grid.svg";
import { ReactComponent as Brightness } from "../../assets/img/brightness.svg";

const menuItemClass =
  "fill-current h-6 w-6 mb-10 inline-block hover:shadow-outline focus:shadow-outline ";

export const FileMenu: React.FunctionComponent<{}> = function () {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div className="z-10 top-0 right-0 mt-24 mr-4 inline-block absolute p-2 text-gray-700 cursor-pointer bg-gray-200 rounded-lg shadow-lg">
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
        } sm:inline-block`}
      >
        <Export tabIndex={2} className={menuItemClass}></Export>
        <Grid tabIndex={2} className={menuItemClass}></Grid>
        <Brightness tabIndex={2} className={menuItemClass}></Brightness>
      </div>
    </div>
  );
};
