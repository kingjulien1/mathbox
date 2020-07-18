import * as React from "react";
import Canvas from "../components/Canvas";
import { NavBar } from "../components/NavBar";
import { ToolsMenu } from "../components/Menu/ToolMenu";
import { FileMenu } from "../components/Menu/FileMenu";
import { Collaborators } from "../components/Menu/Collaborators";

export default function Board() {
  return (
    <div className="static flex flex-col h-screen">
      <div>
        <NavBar title="Untitled Box"></NavBar>
        <ToolsMenu></ToolsMenu>
        <FileMenu></FileMenu>
        <Collaborators></Collaborators>
      </div>
      <Canvas></Canvas>
    </div>
  );
}
