import * as React from "react";
import { ReactComponent as Tool } from "../../assets/img/tools.svg";
import { ReactComponent as Drag } from "../../assets/img/drag.svg";
import { ReactComponent as Pen } from "../../assets/img/pen.svg";
import { ReactComponent as Erase } from "../../assets/img/erase.svg";
import { ReactComponent as Palette } from "../../assets/img/palette.svg";
import { ReactComponent as Cube } from "../../assets/img/cube.svg";
import { ReactComponent as Close } from "../../assets/img/close.svg";

export const ToolsMenu: React.FunctionComponent<{
  className?: string;
}> = function ({ className }) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div className="z-10 top-0 left-0 mt-20 ml-4 inline-block absolute p-2 text-gray-700 cursor-pointer bg-gray-200 rounded-lg shadow-lg">
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
        <Drag className="fill-current h-6 w-6 mb-10 inline-block "></Drag>
        <Pen className="fill-current h-6 w-6 mb-10 inline-block"></Pen>
        <Erase className="fill-current h-6 w-6 mb-10 inline-block"></Erase>
        <Palette className="fill-current h-6 w-6 mb-10 inline-block"></Palette>
        <Cube className="fill-current h-6 w-6 inline-block"></Cube>
      </div>
    </div>
  );
};
