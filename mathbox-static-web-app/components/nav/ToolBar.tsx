import { useContext, FunctionComponent } from "react";
import { ToolsContext, Tool } from "../../Context";
import Pen from "../../public/icons/pen.svg";
import Palette from "../../public/icons/palette.svg";
import Eraser from "../../public/icons/eraser.svg";
import Functions from "../../public/icons/functions.svg";
import Omega from "../../public/icons/Omega.svg";
import Drag from "../../public/icons/drag.svg";
import Export from "../../public/icons/download.svg";
import Team from "../../public/icons/team.svg";

interface ToolItemProps {
  Icon: FunctionComponent<React.SVGAttributes<SVGElement>>;
  onClick?: () => void;
  name: Tool;
}

const ToolItem: FunctionComponent<ToolItemProps> = ({ Icon, onClick }) => {
  return (
    <Icon
      className="h-4 w-4 fill-current my-4 cursor-pointer focus:outline-none hover:shadow-outline focus:shadow-outline"
      tabIndex={1}
      onClick={() => (onClick ? onClick() : null)}
    ></Icon>
  );
};

const tools: ToolItemProps[] = [
  { Icon: Pen, name: "pen" },
  { Icon: Palette, name: "palette" },
  { Icon: Eraser, name: "eraser" },
  { Icon: Functions, name: "functions" },
  { Icon: Omega, name: "equations" },
  { Icon: Drag, name: "drag" },
  { Icon: Export, name: "export" },
];

export default function ToolBar() {
  const { currentTool, setCurrentTool } = useContext(ToolsContext);
  return (
    <nav className="ml-4 px-2 my-2 mx-2 flex flex-col items-center text-gray-900 sm:justify-between absolute top-0 left-0 z-10 rounded-lg bg-gray-100 shadow-lg">
      {tools.map((tool) => (
        <ToolItem
          key={tool.name}
          {...tool}
          onClick={() => setCurrentTool(tool.name)}
        />
      ))}
    </nav>
  );
}
