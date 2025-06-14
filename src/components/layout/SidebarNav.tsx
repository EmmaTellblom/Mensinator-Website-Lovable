
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Book, Github, HelpCircle, Home, Users, Code } from "lucide-react";

const navItems = [
  {
    to: "/",
    icon: Home,
    label: "Home",
  },
  {
    to: "/manual",
    icon: Book,
    label: "User Manual",
  },
  {
    to: "/docs",
    icon: Code,
    label: "Development",
  },
  {
    to: "/faq",
    icon: HelpCircle,
    label: "FAQ",
  },
  {
    to: "/about",
    icon: Users,
    label: "About",
  },
];

const SidebarNav: React.FC = () => {
  const location = useLocation();
  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel className="pl-1 pt-4 pb-2 text-xs uppercase tracking-wider text-slate-400">
          Menu
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.to}>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === item.to}
                  variant={location.pathname === item.to ? "outline" : "default"}
                >
                  <Link to={item.to}>
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <div className="flex-1" />
      <SidebarGroup>
        <SidebarGroupContent>
          <a
            href="https://github.com/EmmaTellblom/Mensinator"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-50 text-sm font-medium transition hover-scale px-3 py-2 mt-12"
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
        </SidebarGroupContent>
      </SidebarGroup>
      <div className="text-xs text-muted-foreground pt-4 pb-2 px-3">
        © {new Date().getFullYear()} Mensinator
      </div>
    </SidebarContent>
  );
};

export default SidebarNav;
