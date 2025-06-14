import React from "react";
import FancySidebar from "./FancySidebar";

const ModernLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  // Width of the tab switcher part of the FancySidebar
  const tabSwitcherWidth = 48; // px, from w-10 (40px) + px-1 (4px*2)
  // Width of the main sidebar panel (md and up)
  const mainPanelCollapsedWidth = 64; // px, from md:w-16
  const mainPanelExpandedWidth = 320; // px, from md:w-80

  let mainContentPaddingLeftClass = "";

  if (sidebarCollapsed) {
    // Small screens: only tab switcher visible
    // md+ screens: tab switcher + collapsed main panel
    mainContentPaddingLeftClass = `pl-[${tabSwitcherWidth}px] md:pl-[${tabSwitcherWidth + mainPanelCollapsedWidth}px]`; // e.g., pl-[48px] md:pl-[112px]
  } else {
    // Small screens: only tab switcher visible
    // md+ screens: tab switcher + expanded main panel
    mainContentPaddingLeftClass = `pl-[${tabSwitcherWidth}px] md:pl-[${tabSwitcherWidth + mainPanelExpandedWidth}px]`; // e.g., pl-[48px] md:pl-[368px]
  }

  return (
    <div className="relative min-h-screen w-full flex bg-gradient-to-tr from-slate-100/80 via-white/90 to-slate-200/10 dark:from-slate-800/90 dark:via-background dark:to-slate-700/70 transition-colors duration-300">
      <FancySidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      {/* NOTE: px-2/py-6/etc moved here to not hide content under the sidebar */}
      {/* Existing horizontal paddings are kept, only left padding for sidebar is changed */}
      <main
        className={`flex-1 min-w-0 flex flex-col items-stretch py-6 sm:px-6 md:px-10 xl:px-16 transition-all ${mainContentPaddingLeftClass} pr-2 sm:pr-6 md:pr-10 xl:pr-16`}
      >
        {children}
      </main>
    </div>
  );
};

export default ModernLayout;
