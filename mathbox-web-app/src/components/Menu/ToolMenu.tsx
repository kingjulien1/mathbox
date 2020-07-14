import * as React from "react";
import { ReactComponent as Tool } from "../../assets/img/tools.svg";
import { ReactComponent as Drag } from "../../assets/img/drag.svg";
import { ReactComponent as Pen } from "../../assets/img/pen.svg";
import { ReactComponent as Erase } from "../../assets/img/erase.svg";
import { ReactComponent as Palette } from "../../assets/img/palette.svg";
import { ReactComponent as Cube } from "../../assets/img/cube.svg";
import { ReactComponent as Help } from "../../assets/img/help.svg";

export const ToolsMenu: React.FunctionComponent<{
  className?: string;
}> = function ({ className }) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div
      className={`az-10 top-0 left-0 mt-20 ml-4 absolute bg-gray-200 rounded-lg p-2 text-gray-700 cursor-pointer shadow ${className}`}
    >
      <div>
        <Tool
          className={`fill-current h-6 w-6 ${
            isOpen ? "hidden" : "block"
          } sm:hidden`}
          onClick={() => setIsOpen((isopen) => !isopen)}
        ></Tool>
        <div
          className={`fill-current h-6 w-6 ${
            isOpen ? "block" : "hidden"
          } sm:block`}
        >
          <Drag className="fill-current h-6 w-6 mb-10"></Drag>
          <Pen className="fill-current h-6 w-6 mb-10"></Pen>
          <Erase className="fill-current h-6 w-6 mb-10"></Erase>
          <Palette className="fill-current h-6 w-6 mb-10"></Palette>
          <Cube className="fill-current h-6 w-6 mb-10"></Cube>
          <Help className="fill-current h-6 w-6 mt-10"></Help>
        </div>
      </div>
    </div>
  );
};
