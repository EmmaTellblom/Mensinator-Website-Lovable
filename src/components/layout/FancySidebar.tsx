
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
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import { Home, Book, HelpCircle, Users, Github } from "lucide-react";

const sidebarItems = [
  { label: "Home", to: "/", icon: Home },
  { label: "User Manual", to: "/manual", icon: Book },
  { label: "FAQ", to: "/faq", icon: HelpCircle },
  { label: "About", to: "/about", icon: Users },
];

const externalLinks = [
  {
    label: "GitHub",
    to: "https://github.com/EmmaTellblom/Mensinator",
    icon: Github,
  },
];

export default function FancySidebar() {
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarContent>
        {/* Header with logo */}
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

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.to}
                  >
                    <Link to={item.to}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* External Links */}
        <SidebarGroup>
          <SidebarGroupLabel>Community</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {externalLinks.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.to}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer */}
        <div className="mt-auto p-4 text-center text-xs text-muted-foreground border-t">
          <div className="group-data-[collapsible=icon]:hidden">
            © {new Date().getFullYear()} Mensinator
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
