
import React from "react";
import FancySidebar from "./FancySidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

const ModernLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  return (
    <div className="min-h-screen w-full flex bg-gradient-to-tr from-slate-100/80 via-white/90 to-slate-200/10 dark:from-slate-800/90 dark:via-background dark:to-slate-700/70 transition-colors duration-300">
      <FancySidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      <main className="flex-1 flex flex-col">
        {/* Header with sidebar trigger */}
        <div className="flex items-center gap-4 p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <SidebarTrigger />
          <h1 className="font-semibold">Mensinator</h1>
        </div>
        
        {/* Main content */}
        <div className="flex-1 p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default ModernLayout;
