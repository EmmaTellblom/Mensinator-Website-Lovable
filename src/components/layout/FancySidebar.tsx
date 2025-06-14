
import React from "react";
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import { Home, Book, Code, HelpCircle, Users, Github, Menu } from "lucide-react";
import clsx from "clsx";

const sidebarCategories = [
  {
    key: "main",
    label: "Main",
    icon: Home,
    items: [
      {
        label: "Home",
        to: "/",
        icon: Home,
      },
      {
        label: "Development",
        to: "/docs",
        icon: Code,
      },
      {
        label: "FAQ",
        to: "/faq",
        icon: HelpCircle,
      },
      {
        label: "About",
        to: "/about",
        icon: Users,
      },
      {
        label: "User Manual",
        to: "/manual",
        icon: Book,
      },
    ],
  },
  {
    key: "community",
    label: "Community",
    icon: Users,
    items: [
      {
        label: "GitHub",
        to: "https://github.com/EmmaTellblom/Mensinator",
        icon: Github,
        external: true,
      },
      {
        label: "Open an Issue",
        to: "https://github.com/EmmaTellblom/Mensinator/issues",
        icon: HelpCircle,
        external: true,
      },
    ],
  },
];

// Neon accent color for bg and border
const neon = "from-fuchsia-500 via-pink-500 to-purple-400";

const GLASS =
  "backdrop-blur-md bg-white/70 dark:bg-slate-900/80 shadow-2xl border border-white/20";

const NEON_BORDER =
  "border-l-4 border-transparent border-gradient-l bg-gradient-to-tr " +
  neon +
  " group-hover:from-pink-600 group-hover:to-fuchsia-500";

export default function FancySidebar() {
  // Track current tab
  const [tab, setTab] = React.useState(sidebarCategories[0].key);
  const [collapsed, setCollapsed] = React.useState(false);

  // Animation for sidebar show/hide
  const sidebarAnim =
    "transition-all duration-300 " +
    (collapsed
      ? "w-14 md:w-16"
      : "w-64 md:w-80");

  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 z-30 h-screen flex">
      {/* Tab Switcher (vertical) */}
      <div className="flex flex-col gap-1 pt-6 pb-6 px-1 items-center bg-gradient-to-b from-slate-700/70 to-slate-600/30 shadow-lg">
        {sidebarCategories.map((cat) => {
          const active = tab === cat.key;
          return (
            <button
              key={cat.key}
              className={clsx(
                "group relative flex items-center justify-center w-10 h-10 rounded-lg my-1 transition-all duration-200",
                active
                  ? "bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-lg scale-110"
                  : "hover:bg-fuchsia-100/30 dark:hover:bg-fuchsia-900/30"
              )}
              onClick={() => setTab(cat.key)}
              aria-label={cat.label}
            >
              <cat.icon
                className={clsx(
                  "h-6 w-6 transition-all",
                  active ? "text-white drop-shadow-neon" : "text-fuchsia-400"
                )}
              />
              <span
                className={clsx(
                  "absolute left-full ml-2 px-2 py-1 rounded bg-fuchsia-700 text-white text-xs shadow-lg whitespace-nowrap pointer-events-none transition-all opacity-0",
                  "group-hover:opacity-100"
                )}
                style={{ top: "50%", transform: "translateY(-50%)" }}
              >
                {cat.label}
              </span>
            </button>
          );
        })}
        {/* Collapse button */}
        <button
          className="mt-auto mb-2 rounded-lg p-2 bg-gradient-to-tr from-pink-500 to-fuchsia-500 shadow-lg hover:scale-110 transition"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <Menu className={clsx("h-6 w-6 text-white", collapsed && "rotate-180")} />
        </button>
      </div>
      {/* Animated main sidebar */}
      <SidebarProvider>
        <Sidebar
          className={clsx(
            "relative h-screen hidden md:flex flex-col items-stretch group/sidebar",
            sidebarAnim,
            GLASS,
            "shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-300"
          )}
          style={{
            minWidth: collapsed ? "56px" : "256px",
            width: collapsed ? "56px" : "320px",
            maxWidth: "90vw",
            borderLeft: "4px solid transparent",
            overflow: "hidden",
          }}
        >
          <SidebarContent className="h-full flex flex-col">
            <SidebarGroup>
              <SidebarGroupLabel className={clsx(
                "pl-2 py-3 uppercase text-xs tracking-wider font-bold text-fuchsia-600 transition-all",
                collapsed && "opacity-0 pointer-events-none"
              )}>
                {sidebarCategories.find((c) => c.key === tab)?.label}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarCategories
                    .find((c) => c.key === tab)
                    ?.items.map((item) => (
                      <SidebarMenuItem key={item.label}>
                        <SidebarMenuButton
                          asChild
                          isActive={location.pathname === item.to}
                          variant={location.pathname === item.to ? "outline" : "default"}
                          className={clsx(
                            "group transition-all duration-200 overflow-hidden rounded-xl my-0.5 px-2",
                            NEON_BORDER,
                            collapsed && "px-1 py-2 justify-center"
                          )}
                        >
                          {item.external ? (
                            <a
                              href={item.to}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3"
                            >
                              <item.icon className="h-5 w-5 text-fuchsia-400 group-hover:text-pink-500" />
                              {!collapsed && <span>{item.label}</span>}
                            </a>
                          ) : (
                            <Link to={item.to} className="flex items-center gap-3">
                              <item.icon className="h-5 w-5 text-fuchsia-400 group-hover:text-pink-500" />
                              {!collapsed && <span>{item.label}</span>}
                            </Link>
                          )}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            {/* Neon glowing bottom logo */}
            <div className={clsx(
              "mt-auto pb-6 flex flex-col items-center justify-center",
              collapsed && "pl-0"
            )}>
              <img
                src="/lovable-uploads/c808ea61-0339-480f-bf59-06ee2f0834ce.png"
                className={clsx(
                  "h-9 w-9 rounded-full shadow-lg mb-2 mt-6 border-2 border-fuchsia-400 transition-all",
                  collapsed ? "mx-auto" : ""
                )}
                alt="logo"
              />
              {!collapsed && (
                <span className="uppercase text-[0.85rem] tracking-widest font-black text-fuchsia-600 drop-shadow-neon animate-fade-in">
                  Mensinator
                </span>
              )}
            </div>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    </div>
  );
}
