
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  useSidebar,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Sidebar navigation items
const sidebarItems = [
  { label: "Home", to: "/", icon: "menu" }, // Placeholder, see below
  { label: "User Manual", to: "/manual", icon: "menu" },
  { label: "Development", to: "/docs", icon: "menu" },
  { label: "FAQ", to: "/faq", icon: "menu" },
  { label: "About", to: "/about", icon: "menu" },
];

const externalLinks = [
  {
    label: "GitHub",
    to: "https://github.com/EmmaTellblom/Mensinator",
    icon: "menu",
  },
];

// Importing only allowed icons
import { Menu as MenuIcon } from "lucide-react"; // for the toggle button

// Map nav to Lucide icon, fallback to "Menu" if missing
const iconsMap = {
  Home: MenuIcon,
  "User Manual": MenuIcon,
  Development: MenuIcon,
  FAQ: MenuIcon,
  About: MenuIcon,
  GitHub: MenuIcon,
};

export default function FancySidebar() {
  const location = useLocation();
  const isMobile = useIsMobile();

  // Sheet (overlay/sidebar) state for mobile
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  if (isMobile) {
    // On mobile: render icon bar with a menu toggle,
    // show full sidebar in overlay/sheet only if sidebarOpen is true
    return (
      <>
        {/* Mobile icon bar */}
        <nav className="fixed z-30 top-0 left-0 w-14 h-screen bg-sidebar border-r flex flex-col justify-between items-center">
          {/* Logo */}
          <div className="flex flex-col items-center py-4">
            <img
              src="/lovable-uploads/c808ea61-0339-480f-bf59-06ee2f0834ce.png"
              className="h-8 w-8 rounded-full mb-3"
              alt="Mensinator logo"
            />
            {/* Sidebar nav icons only */}
            <div className="flex flex-col gap-2">
              {sidebarItems.map((item) => {
                const Icon = iconsMap[item.label] || MenuIcon;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`flex items-center justify-center w-10 h-10 rounded-md
                      ${location.pathname === item.to
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground"}`}
                  >
                    <Icon size={20} />
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Menu button to expand full sidebar */}
          <button
            className="mb-4 w-10 h-10 flex items-center justify-center rounded-md bg-accent/60 hover:bg-accent transition"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar menu"
          >
            <MenuIcon size={24} />
          </button>
        </nav>
        {/* Overlay full sidebar when expanded */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setSidebarOpen(false)}>
            <aside
              className="absolute top-0 left-0 h-full w-64 bg-sidebar shadow-xl transition-transform"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 p-4 border-b">
                <img
                  src="/lovable-uploads/c808ea61-0339-480f-bf59-06ee2f0834ce.png"
                  className="h-8 w-8 rounded-full"
                  alt="Mensinator logo"
                />
                <span className="font-bold text-lg">Mensinator</span>
              </div>
              {/* Full nav */}
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {sidebarItems.map((item) => {
                        const Icon = iconsMap[item.label] || MenuIcon;
                        return (
                          <SidebarMenuItem key={item.to}>
                            <SidebarMenuButton
                              asChild
                              isActive={location.pathname === item.to}
                              onClick={() => setSidebarOpen(false)}
                            >
                              <Link to={item.to}>
                                <Icon className="h-4 w-4" />
                                <span>{item.label}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        );
                      })}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                  <SidebarGroupLabel>Community</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {externalLinks.map((item) => {
                        const Icon = iconsMap[item.label] || MenuIcon;
                        return (
                          <SidebarMenuItem key={item.to}>
                            <SidebarMenuButton asChild>
                              <a
                                href={item.to}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Icon className="h-4 w-4" />
                                <span>{item.label}</span>
                              </a>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        );
                      })}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
                <div className="mt-auto p-4 text-center text-xs text-muted-foreground border-t">
                  © {new Date().getFullYear()} Mensinator
                </div>
              </SidebarContent>
              {/* Close button top-right (visible only on full sidebar) */}
              <button
                className="absolute top-4 right-4 bg-accent hover:bg-accent/80 rounded-full p-2"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close sidebar menu"
              >
                <MenuIcon size={20} />
              </button>
            </aside>
          </div>
        )}
        {/* Spacer for sidebar width, so page doesn't go under the fixed nav */}
        <div className="w-14"></div>
      </>
    );
  }

  // Desktop: behavior as before (sidebar can be expanded/collapsed)
  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarContent>
        <div className="flex items-center gap-2 p-4 border-b">
          <img
            src="/lovable-uploads/c808ea61-0339-480f-bf59-06ee2f0834ce.png"
            className="h-8 w-8 rounded-full"
            alt="Mensinator logo"
          />
          <span className="font-bold text-lg group-data-[collapsible=icon]:hidden">
            Mensinator
          </span>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => {
                const Icon = iconsMap[item.label] || MenuIcon;
                return (
                  <SidebarMenuItem key={item.to}>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname === item.to}
                    >
                      <Link to={item.to}>
                        <Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Community</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {externalLinks.map((item) => {
                const Icon = iconsMap[item.label] || MenuIcon;
                return (
                  <SidebarMenuItem key={item.to}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.to}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="mt-auto p-4 text-center text-xs text-muted-foreground border-t">
          <div className="group-data-[collapsible=icon]:hidden">
            © {new Date().getFullYear()} Mensinator
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
