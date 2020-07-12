import { FunctionComponent } from "react";
import * as React from "react";

export const Container: FunctionComponent<{}> = ({ children }) => (
  <div className="bg-gray-100 p-4 h-screen">{children}</div>
);
