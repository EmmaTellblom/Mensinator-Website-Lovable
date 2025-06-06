
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, Book } from 'lucide-react';

const Navbar = () => {
  const isMobile = useIsMobile();
  
  return (
    <nav className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/c808ea61-0339-480f-bf59-06ee2f0834ce.png" 
              alt="Mensinator Logo" 
              className="h-8 w-8" 
            />
            <span className="font-bold text-xl">Mensinator</span>
          </Link>
          
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <Link to="/" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-accent">Home</Link>
                  <Link to="/manual" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-accent flex items-center gap-2">
                    <Book className="h-4 w-4" />
                    User Manual
                  </Link>
                  <Link to="/docs" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-accent">Development</Link>
                  <Link to="/faq" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-accent">FAQ</Link>
                  <Link to="/about" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-accent">About</Link>
                  <a 
                    href="https://github.com/EmmaTellblom/Mensinator" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-medium px-4 py-2 rounded-md hover:bg-accent"
                  >
                    GitHub
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-sm font-medium hover:text-slate-700">Home</Link>
              <Link to="/manual" className="text-sm font-medium hover:text-slate-700 flex items-center gap-1">
                <Book className="h-3.5 w-3.5" />
                User Manual
              </Link>
              <Link to="/docs" className="text-sm font-medium hover:text-slate-700">Development</Link>
              <Link to="/faq" className="text-sm font-medium hover:text-slate-700">FAQ</Link>
              <Link to="/about" className="text-sm font-medium hover:text-slate-700">About</Link>
              <a 
                href="https://github.com/EmmaTellblom/Mensinator" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-slate-700"
              >
                GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
