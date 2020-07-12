import * as React from "react";

export const Button: React.FunctionComponent<{
  className: string;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}> = ({ children, className, onClick }) => (
  <button
    className={`text-xl py-1 px-4 rounded-lg  border-2 border-gray-800 shadow-lg font-medium focus:outline-none focus:shadow-outline focus:border-opacity-0 hover:border-opacity-0 hover:shadow-outline ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);
