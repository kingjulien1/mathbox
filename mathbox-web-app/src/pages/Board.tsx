import * as React from "react";
import NavBar from "../components/NavBar";
import { ToolsMenu } from "../components/Menu/ToolMenu";
import { FileMenu } from "../components/Menu/FileMenu";
import { Collaborators } from "../components/Menu/Collaborators";

export default function Board() {
  return (
    <div className="bg-gray-100">
      <NavBar></NavBar>
      <div>
        <div className="static max-w-lg">
          <ToolsMenu></ToolsMenu>
          <FileMenu></FileMenu>
          <Collaborators> </Collaborators>
        </div>
      </div>
    </div>
  );
}
