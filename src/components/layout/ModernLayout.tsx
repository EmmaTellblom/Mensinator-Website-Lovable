
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import FancySidebar from "./FancySidebar";

const ModernLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-gradient-to-tr from-slate-100/80 via-white/90 to-slate-200/10 dark:from-slate-800/90 dark:via-background dark:to-slate-700/70 transition-colors duration-300">
        <FancySidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ModernLayout;
