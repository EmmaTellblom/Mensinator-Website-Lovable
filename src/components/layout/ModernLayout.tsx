
import React from "react";
import Navbar from "./Navbar";

const ModernLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-tr from-slate-100/80 via-white/90 to-slate-200/10 dark:from-slate-800/90 dark:via-background dark:to-slate-700/70 transition-colors duration-300">
      <Navbar />
      <main className="flex-1 min-w-0 flex flex-col items-stretch px-2 py-6 sm:px-6 md:px-10 xl:px-16 transition-all">
        {children}
      </main>
    </div>
  );
};

export default ModernLayout;
