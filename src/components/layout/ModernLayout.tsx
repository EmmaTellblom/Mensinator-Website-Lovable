
import React from "react";
import FancySidebar from "./FancySidebar";

const ModernLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full flex bg-gradient-to-tr from-slate-100/80 via-white/90 to-slate-200/10 dark:from-slate-800/90 dark:via-background dark:to-slate-700/70 transition-colors duration-300">
      <FancySidebar />
      {/* NOTE: px-2/py-6/etc moved here to not hide content under the sidebar */}
      <main className="flex-1 min-w-0 flex flex-col items-stretch px-2 py-6 sm:px-6 md:px-10 xl:px-16 transition-all ml-0 md:ml-20">
        {children}
      </main>
    </div>
  );
};

export default ModernLayout;
