import * as React from "react";
import { ReactComponent as HamburgerMenu } from "../../assets/img/hamburger-menu.svg";

export const FileMenu: React.FunctionComponent<{
  className?: string;
}> = function ({ className }) {
  return (
    <div
      className={`absolute z-10 top-0 right-0 mt-20 mr-4 bg-gray-200 rounded-lg p-2 text-gray-700 cursor-pointer shadow ${className}`}
    >
      <div>
        <HamburgerMenu className="fill-current h-6 w-6"></HamburgerMenu>
      </div>
    </div>
  );
};
