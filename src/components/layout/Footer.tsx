
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/c808ea61-0339-480f-bf59-06ee2f0834ce.png" alt="Mensinator Logo" className="h-8 w-8" />
              <span className="font-bold text-xl">Mensinator</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              We don't track your data - you do. Period.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-sm">Navigation</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
                <li><Link to="/docs" className="text-muted-foreground hover:text-primary">Documentation</Link></li>
                <li><Link to="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              </ul>
            </div>
            
            {/* <div>
              <h3 className="font-semibold text-sm">Resources</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="https://github.com/EmmaTellblom/Mensinator/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">GitHub</a></li>
                <li><a href="https://github.com/EmmaTellblom/Mensinator//issues" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">Issues</a></li>
                <li><a href="https://github.com/contributing" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">Contributing</a></li>
                <li><a href="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              </ul>
            </div> */}
          </div>
          
          <div>
            <h3 className="font-semibold text-sm">Open Source</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Mensinator is open source and available on GitHub. Everyone is welcome to contribute.
            </p>
            <a 
              href="https://github.com/EmmaTellblom/Mensinator/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-sm font-medium text-burgundy hover:text-burgundy-800"
            >
              View on GitHub
            </a>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mensinator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
