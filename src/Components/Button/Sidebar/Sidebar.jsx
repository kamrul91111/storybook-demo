import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed top-15 left-0 h-screen w-16 flex flex-col bg-slate-800 flex-wrap">
      <i>A</i>
      <i>B</i>
      <i>C</i>
      <i>D</i>
      <i>E</i>
    </div>
  );
};

// takes an icon
const SidebarIcon = ({icon}) => {
  return <div></div>;
};

export default Sidebar;
