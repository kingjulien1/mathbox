import { useContext, FunctionComponent } from "react";
import { ToolsContext, Tools, Palette } from "../../Context";
import Pen from "../../public/icons/pen.svg";
import PaletteIcon from "../../public/icons/palette.svg";
import Eraser from "../../public/icons/eraser.svg";
import Functions from "../../public/icons/functions.svg";
import Omega from "../../public/icons/omega.svg";
import Drag from "../../public/icons/drag.svg";
import Export from "../../public/icons/download.svg";
import { defaultLineConfig } from "../canvas/usePen";

interface ToolItemProps {
  tool: Tools;
  Icon: FunctionComponent<React.SVGAttributes<SVGElement>>;
  onClick?: () => void;
  active?: boolean;
}

const ToolItem: FunctionComponent<ToolItemProps> = ({
  Icon,
  onClick,
  active,
}) => {
  return (
    <Icon
      className={`h-4 w-4 fill-current my-4 cursor-pointer focus:outline-none hover:text-blue-700 focus:text-blue-700 ${
        active ? "text-blue-500" : ""
      }`}
      tabIndex={1}
      onClick={() => (onClick ? onClick() : null)}
    ></Icon>
  );
};

const tools: ToolItemProps[] = [
  {
    Icon: Pen,
    //default options for pen
    tool: { name: "pen", options: { ...defaultLineConfig } },
    active: true,
  },
  { Icon: PaletteIcon, tool: { name: "palette" } },
  { Icon: Eraser, tool: { name: "eraser", options: { strokeWidth: 5 } } },
  { Icon: Functions, tool: { name: "functions" } },
  { Icon: Omega, tool: { name: "equations" } },
  { Icon: Drag, tool: { name: "drag" } },
  { Icon: Export, tool: { name: "export" } },
];

export default function ToolBar() {
  const { setCurrentTool } = useContext(ToolsContext);
  return (
    <nav className="ml-4 px-2 my-2 mx-2 flex flex-col items-center text-gray-900 sm:justify-between absolute top-0 left-0 z-10 rounded-lg bg-gray-100 shadow-lg">
      {tools.map((toolItem) => (
        <ToolItem
          key={toolItem.tool.name}
          {...toolItem}
          onClick={() => {
            //set all to false
            tools.map((t) => (t.active = false));
            //set this to active
            toolItem.active = true;
            setCurrentTool(toolItem.tool);
          }}
        />
      ))}
    </nav>
  );
}
