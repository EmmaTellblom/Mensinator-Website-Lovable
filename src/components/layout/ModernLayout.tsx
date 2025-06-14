
import React from "react";
import { Sidebar, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SidebarNav from "./SidebarNav";
import { Link } from "react-router-dom";

const ModernLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-gradient-to-tr from-slate-100/80 via-white/90 to-slate-200/10 dark:from-slate-800/90 dark:via-background dark:to-slate-700/70">
        {/* Sidebar (glassmorphism effect, neutral accents) */}
        <Sidebar
          className="relative shadow-lg backdrop-blur-xl bg-white/90 dark:bg-slate-900/80 border-none"
        >
          <div className="flex flex-col items-center py-6 px-2">
            <Link to="/" className="flex items-center gap-2 mb-7 hover-scale focus:outline-none">
              <img
                src="/lovable-uploads/c808ea61-0339-480f-bf59-06ee2f0834ce.png"
                alt="Mensinator Logo"
                className="h-11 w-11 rounded-xl shadow"
                draggable={false}
              />
              <span className="font-extrabold text-2xl tracking-tight text-slate-800 dark:text-white hidden md:inline">
                Mensinator
              </span>
            </Link>
          </div>
          <SidebarNav />
        </Sidebar>
        {/* Collapse trigger as a floating fab on mobile */}
        <SidebarTrigger className="fixed top-3 left-3 z-40 md:hidden shadow-lg bg-white/80 dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-700" />
        {/* Main Content */}
        <main className="flex-1 min-w-0 flex flex-col items-stretch px-2 py-6 sm:px-6 md:px-10 xl:px-16 transition-all">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ModernLayout;
