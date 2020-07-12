import * as React from "react";

export const ButtonDark: React.FunctionComponent = ({ children }) => (
  <button className="bg-gray-800 text-gray-100 text-xl py-2 px-3 rounded-lg shadow-lg font-bold focus:outline-none focus:shadow-outline focus:bg-gray-700 hover:shadow-outline hover:bg-gray-700">
    {children}
  </button>
);

export const ButtonLight: React.FunctionComponent = ({ children }) => (
  <button className="bg-gray-100 border-gray-900 border-2 text-gray-900 text-xl py-2 px-3 rounded-lg shadow-lg font-bold focus:outline-none focus:shadow-outline focus:bg-gray-300  hover:shadow-outline hover:bg-gray-300">
    {children}
  </button>
);
