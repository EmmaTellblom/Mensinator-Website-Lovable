
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import FancySidebar from "./FancySidebar";

const ModernLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 transition-colors duration-300">
        <FancySidebar />
        {/* On mobile, add left margin to prevent overlap with fixed sidebar icon rail */}
        <main className="flex-1 p-6 ml-14 md:ml-0">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ModernLayout;
