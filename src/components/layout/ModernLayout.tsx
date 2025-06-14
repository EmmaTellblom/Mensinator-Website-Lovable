
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Book, Home, Users, HelpCircle } from "lucide-react";

const navItems = [
  {
    to: "/",
    icon: <Home className="h-5 w-5" />,
    label: "Home",
  },
  {
    to: "/manual",
    icon: <Book className="h-5 w-5" />,
    label: "User Manual",
  },
  {
    to: "/docs",
    icon: <Book className="h-5 w-5" />,
    label: "Development",
  },
  {
    to: "/faq",
    icon: <HelpCircle className="h-5 w-5" />,
    label: "FAQ",
  },
  {
    to: "/about",
    icon: <Users className="h-5 w-5" />,
    label: "About",
  },
];

interface ModernLayoutProps {
  children: React.ReactNode;
}

/**
 * A modern sidebar layout: sidebar on left, main page content on right.
 */
const ModernLayout: React.FC<ModernLayoutProps> = ({ children }) => {
  const location = useLocation();
  return (
    <div className="min-h-screen flex bg-muted">
      {/* Sidebar */}
      <aside className="w-64 bg-background border-r border-border flex flex-col py-8 px-6">
        <Link to="/" className="flex items-center mb-8 gap-3 group">
          <img
            src="/lovable-uploads/c808ea61-0339-480f-bf59-06ee2f0834ce.png"
            alt="Mensinator Logo"
            className="h-9 w-9 rounded"
          />
          <span className="font-extrabold text-2xl tracking-tight group-hover:text-burgundy transition-colors">
            Mensinator
          </span>
        </Link>
        <nav className="flex flex-col gap-1 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 rounded-md px-3 py-2 font-semibold text-sm transition
                ${
                  location.pathname === item.to
                    ? "bg-burgundy text-white shadow"
                    : "text-foreground hover:bg-accent"
                }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-8">
          <a
            href="https://github.com/EmmaTellblom/Mensinator"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-burgundy hover:text-burgundy-800 transition"
          >
            <Github className="h-5 w-5" />
            <span className="font-medium">GitHub</span>
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mensinator
          </p>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 min-w-0 py-10 px-4 md:px-10">
        {children}
      </main>
    </div>
  );
};

export default ModernLayout;
