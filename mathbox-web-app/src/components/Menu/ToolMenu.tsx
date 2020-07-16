import * as React from "react";
import { ReactComponent as Tool } from "../../assets/img/tools.svg";
import { ReactComponent as Drag } from "../../assets/img/drag.svg";
import { ReactComponent as Pen } from "../../assets/img/pen.svg";
import { ReactComponent as Erase } from "../../assets/img/erase.svg";
import { ReactComponent as Palette } from "../../assets/img/palette.svg";
import { ReactComponent as Cube } from "../../assets/img/cube.svg";
import { ReactComponent as Close } from "../../assets/img/close.svg";

const menuItemClass =
  "fill-current h-6 w-6 mb-10 inline-block hover:shadow-outline focus:shadow-outline ";

export const ToolsMenu: React.FunctionComponent<{
  className?: string;
}> = function ({ className }) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div className="z-10 top-0 left-0 mt-24 ml-4 inline-block absolute p-2 text-gray-700 cursor-pointer bg-gray-200 rounded-lg shadow-lg">
      <Close
        className={`top-0 fill-current h-6 w-6 mb-10 ${
          isOpen ? "block" : "hidden"
        } sm:hidden`}
        onClick={() => setIsOpen((isopen) => !isopen)}
      ></Close>
      <Tool
        className={`top-0 fill-current h-6 w-6 ${
          isOpen ? "hidden" : "block"
        } sm:hidden `}
        onClick={() => setIsOpen((isopen) => !isopen)}
      ></Tool>
      <div
        className={`fill-current h-6 w-6 ${
          isOpen ? "inline-block" : "hidden"
        } sm:inline-block`}
      >
        <Drag tabIndex={2} className={menuItemClass}></Drag>
        <Pen tabIndex={2} className={menuItemClass}></Pen>
        <Erase tabIndex={2} className={menuItemClass}></Erase>
        <Palette tabIndex={2} className={menuItemClass}></Palette>
        <Cube tabIndex={2} className={menuItemClass}></Cube>
      </div>
    </div>
  );
};
