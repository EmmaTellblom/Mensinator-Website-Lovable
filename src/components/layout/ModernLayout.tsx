
import React from "react";
import FancySidebar from "./FancySidebar";

const ModernLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <FancySidebar />
      <main className="flex-1 flex flex-col w-full min-w-0">
        {children}
      </main>
    </div>
  );
};

export default ModernLayout;
