
import React from "react";
import FancySidebar from "./FancySidebar";

const ModernLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
      <FancySidebar />
      <main className="flex-1 flex flex-col w-full min-w-0">
        {children}
      </main>
    </div>
  );
};

export default ModernLayout;

