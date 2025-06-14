
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import FancySidebar from "./FancySidebar";

const ModernLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
        <FancySidebar />
        <main className="flex-1 p-6 ml-14 md:ml-0">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ModernLayout;

