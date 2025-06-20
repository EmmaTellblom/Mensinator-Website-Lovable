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
import { useIsMobile } from "@/hooks/use-mobile";

// Import Lucide icons
import {
  Home,
  Book,
  Code,
  HelpCircle,
  Users,
  Github,
  Menu as MenuIcon,
  MessageCircle,
} from "lucide-react";
import { DiscordIcon } from "@/components/icons/DiscordIcon";

// Sidebar navigation items with icon references
const sidebarItems = [
  { label: "Home", to: "/", icon: Home },
  { label: "User Manual", to: "/manual", icon: Book },
  { label: "Development", to: "/docs", icon: Code },
  { label: "FAQ", to: "/faq", icon: HelpCircle },
  { label: "The Team", to: "/about", icon: Users },
];

const externalLinks = [
  {
    label: "GitHub",
    to: "https://github.com/EmmaTellblom/Mensinator",
    icon: Github,
  },
  {
    label: "Discord",
    to: "https://discord.gg/tHA2k3bFRN",
    icon: null, // Handled separately
  },
];

const iconsMap: Record<string, React.ComponentType<any>> = {
  Home,
  "User Manual": Book,
  Development: Code,
  FAQ: HelpCircle,
  "The Team": Users,
  GitHub: Github,
  Discord: DiscordIcon, // Use our new unified Discord icon
};

export default function FancySidebar() {
  const location = useLocation();
  const isMobile = useIsMobile();

  // Sheet (overlay/sidebar) state for mobile
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  if (isMobile) {
    return (
      <>
        {/* Mobile icon bar */}
        <nav className="fixed z-30 top-0 left-0 w-14 h-screen bg-sidebar border-r flex flex-col justify-between items-center">
          <div className="flex flex-col items-center py-4">
            {/* Removed logo here */}
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
              {/* GitHub icon for mobile */}
              <a
                href="https://github.com/EmmaTellblom/Mensinator"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              {/* Discord icon for mobile */}
              <a
                href="https://discord.gg/tHA2k3bFRN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground"
                aria-label="Discord"
              >
                <DiscordIcon width={20} height={20} />
              </a>
            </div>
          </div>
          <button
            className="mb-4 w-10 h-10 flex items-center justify-center rounded-md bg-accent/60 hover:bg-accent transition"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar menu"
          >
            <MenuIcon size={24} />
          </button>
        </nav>
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setSidebarOpen(false)}>
            <aside
              className="absolute top-0 left-0 h-full w-64 bg-sidebar shadow-xl transition-transform"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Removed logo & app name here */}
              {/* Full nav remains the same */}
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
                      {/* GitHub */}
                      <SidebarMenuItem key="github">
                        <SidebarMenuButton asChild>
                          <a
                            href="https://github.com/EmmaTellblom/Mensinator"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sidebar-foreground"
                          >
                            <Github className="h-4 w-4" />
                            <span>GitHub</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      {/* Discord */}
                      <SidebarMenuItem key="discord">
                        <SidebarMenuButton asChild>
                          <a
                            href="https://discord.gg/tHA2k3bFRN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sidebar-foreground"
                          >
                            <DiscordIcon className="h-4 w-4" />
                            <span>Discord</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
                <div className="mt-auto p-4 text-center text-xs text-muted-foreground border-t">
                  © {new Date().getFullYear()} Mensinator
                </div>
              </SidebarContent>
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
        <div className="w-14"></div>
      </>
    );
  }

  // Desktop: behavior as before, but logo and name removed
  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarContent>
        {/* Removed logo and app name here */}
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
              {/* GitHub */}
              <SidebarMenuItem key="github">
                <SidebarMenuButton asChild>
                  <a
                    href="https://github.com/EmmaTellblom/Mensinator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sidebar-foreground"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* Discord */}
              <SidebarMenuItem key="discord">
                <SidebarMenuButton asChild>
                  <a
                    href="https://discord.gg/tHA2k3bFRN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sidebar-foreground"
                  >
                    <DiscordIcon className="h-4 w-4" />
                    <span>Discord</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
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
