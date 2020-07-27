import Head from "next/head";
import { useState } from "react";
import NavBar from "../components/nav/NavBar";
import ToolBar from "../components/nav/ToolBar";
import { Tool, SetCurrentToolContext, CurrentToolContext } from "../Context";

export default function Box({ props }) {
  const [currentTool, setCurrentTool] = useState<Tool>();
  console.log("from box: " + currentTool);
  return (
    <div>
      <Head>
        <title>Box</title>
      </Head>
      <NavBar></NavBar>
      <CurrentToolContext.Provider value={currentTool}>
        <SetCurrentToolContext.Provider value={setCurrentTool}>
          <ToolBar></ToolBar>
        </SetCurrentToolContext.Provider>
      </CurrentToolContext.Provider>
    </div>
  );
}
