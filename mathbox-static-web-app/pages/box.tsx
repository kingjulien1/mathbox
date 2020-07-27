import Head from "next/head";
import { useState } from "react";
import NavBar from "../components/nav/NavBar";
import ToolBar from "../components/nav/ToolBar";
import Canvas from "../components/canvas/Canvas";
import { Tool, ToolsContext } from "../Context";

export default function Box({ props }) {
  const [currentTool, setCurrentTool] = useState<Tool>("pen");
  return (
    <div className="h-screen flex flex-col">
      <Head>
        <title>Box</title>
      </Head>
      <ToolsContext.Provider value={{ currentTool, setCurrentTool }}>
        <ToolBar></ToolBar>
      </ToolsContext.Provider>
      <ToolsContext.Provider value={{ currentTool }}>
        <Canvas></Canvas>
      </ToolsContext.Provider>
    </div>
  );
}
