import { useContext, FunctionComponent, MouseEvent } from "react";
import Pen from "../../public/icons/pen.svg";
import Palette from "../../public/icons/palette.svg";
import Eraser from "../../public/icons/eraser.svg";
import Functions from "../../public/icons/functions.svg";
import Omega from "../../public/icons/Omega.svg";
import Drag from "../../public/icons/drag.svg";
import Export from "../../public/icons/download.svg";
import Team from "../../public/icons/team.svg";
import { CurrentToolContext, SetCurrentToolContext, Tool } from "../../Context";

interface ToolItemProps {
  Icon: FunctionComponent<React.SVGAttributes<SVGElement>>;
  onClick?: (name: string) => void;
  name: Tool;
}

const ToolItem: FunctionComponent<ToolItemProps> = ({
  Icon,
  onClick,
  name,
}) => {
  return (
    <Icon
      className="h-4 w-4 fill-current mr-8 my-2 cursor-pointer focus:outline-none hover:shadow-outline focus:shadow-outline"
      tabIndex={1}
      onClick={() => onClick(name)}
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
  const setCurrentTool = useContext(SetCurrentToolContext);
  const currentTool = useContext(CurrentToolContext);
  console.log("from toolbox" + currentTool);

  return (
    <nav className="px-6 py-1 bg-gray-300 flex items-center text-gray-900 sm:justify-between">
      <div className="flex flex-wrap justify-center">
        {tools.map((tool) => (
          <ToolItem {...tool} onClick={() => setCurrentTool(tool.name)} />
        ))}
      </div>
      <div className="hidden sm:flex items-center">
        <ToolItem Icon={Team} name="team"></ToolItem>
        <span className="ml-2 text-gray-600 uppercase font-light">(2)</span>
      </div>
    </nav>
  );
}
