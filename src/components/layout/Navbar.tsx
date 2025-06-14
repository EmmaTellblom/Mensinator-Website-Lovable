
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, Book, Code, Home, Users, HelpCircle, Github } from 'lucide-react';

const Navbar = () => {
  const isMobile = useIsMobile();

  return (
    <nav className="bg-white/90 dark:bg-slate-900/85 border-b border-slate-100 dark:border-slate-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2 hover-scale">
          <img
            src="/lovable-uploads/c808ea61-0339-480f-bf59-06ee2f0834ce.png"
            alt="Mensinator Logo"
            className="h-10 w-10 rounded-lg shadow"
            draggable={false}
          />
          <span className="font-extrabold text-2xl tracking-tight text-slate-800 dark:text-white hidden sm:inline">
            Mensinator
          </span>
        </Link>
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="ml-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-white dark:bg-slate-900">
              <nav className="pt-8 px-4 flex flex-col gap-1 min-w-[180px]">
                <Link to="/" className="flex items-center gap-2 text-lg font-medium px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                  <Home className="h-5 w-5" />
                  Home
                </Link>
                <Link to="/manual" className="flex items-center gap-2 text-lg font-medium px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                  <Book className="h-5 w-5" />
                  User Manual
                </Link>
                <Link to="/docs" className="flex items-center gap-2 text-lg font-medium px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                  <Code className="h-5 w-5" />
                  Development
                </Link>
                <Link to="/faq" className="flex items-center gap-2 text-lg font-medium px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                  <HelpCircle className="h-5 w-5" />
                  FAQ
                </Link>
                <Link to="/about" className="flex items-center gap-2 text-lg font-medium px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                  <Users className="h-5 w-5" />
                  About
                </Link>
                <a
                  href="https://github.com/EmmaTellblom/Mensinator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg font-medium px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center gap-5">
            <Link to="/" className="flex items-center gap-1 text-sm font-medium hover:text-slate-700 dark:hover:text-white transition">
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link to="/manual" className="flex items-center gap-1 text-sm font-medium hover:text-slate-700 dark:hover:text-white transition">
              <Book className="h-4 w-4" />
              User Manual
            </Link>
            <Link to="/docs" className="flex items-center gap-1 text-sm font-medium hover:text-slate-700 dark:hover:text-white transition">
              <Code className="h-4 w-4" />
              Development
            </Link>
            <Link to="/faq" className="flex items-center gap-1 text-sm font-medium hover:text-slate-700 dark:hover:text-white transition">
              <HelpCircle className="h-4 w-4" />
              FAQ
            </Link>
            <Link to="/about" className="flex items-center gap-1 text-sm font-medium hover:text-slate-700 dark:hover:text-white transition">
              <Users className="h-4 w-4" />
              About
            </Link>
            <a
              href="https://github.com/EmmaTellblom/Mensinator"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium hover:text-slate-700 dark:hover:text-white transition"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </nav>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
