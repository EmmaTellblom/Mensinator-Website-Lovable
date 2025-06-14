import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Book, Download, Shield, Lock, Smartphone, Github } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-100 dark:bg-slate-900">
        <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col items-center text-center">
          <img 
            src="/lovable-uploads/c808ea61-0339-480f-bf59-06ee2f0834ce.png" 
            alt="Mensinator Logo" 
            className="h-24 w-24 mb-6"
          />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="gradient-text">Mensinator</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl">
            We don't track your data - you do. Period.
          </p>
          <p className="text-lg mb-8 max-w-3xl">
            A private period tracking app that keeps all your data on your device.
            No signup, no cloud storage, just privacy-focused period tracking.
          </p>

          {/* "Get Started" Heading */}
          <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white animate-fade-in">
            Get Started with Mensinator
          </h2>

          {/* Button Group: Android, F-Droid, IzzyOnDroid, Manual */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-2xl mx-auto mb-2 animate-fade-in">
            <Button 
              asChild 
              size="lg"
              className="flex-1 rounded-full bg-gradient-to-r from-slate-700 to-slate-600 text-white shadow transition-all duration-150 hover:from-slate-800 hover:to-slate-700 hover:scale-105"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.mensinator.app&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center"
              >
                <Download className="h-5 w-5" />
                Download from Google Play
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="flex-1 rounded-full bg-gradient-to-r from-slate-700 to-slate-600 text-white shadow transition-all duration-150 hover:from-slate-800 hover:to-slate-700 hover:scale-105"
            >
              <a
                href="https://f-droid.org/en/packages/com.mensinator.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center"
              >
                <Download className="h-5 w-5" />
                Download from F-Droid
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="flex-1 rounded-full bg-gradient-to-r from-slate-700 to-slate-600 text-white shadow transition-all duration-150 hover:from-slate-800 hover:to-slate-700 hover:scale-105"
            >
              <a
                href="https://apt.izzysoft.de/fdroid/index/apk/com.mensinator.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center"
              >
                <Download className="h-5 w-5" />
                Download from IzzyOnDroid
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="flex-1 rounded-full bg-gradient-to-r from-slate-700 to-slate-600 text-white shadow transition-all duration-150 hover:from-slate-800 hover:to-slate-700 hover:scale-105"
            >
              <Link to="/manual" className="flex items-center gap-2 justify-center">
                <Book className="h-5 w-5" />
                Read User Manual
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Mensinator?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-accent mb-4">
                <Shield className="h-6 w-6 text-burgundy" />
              </div>
              <h3 className="text-xl font-medium mb-2">Complete Privacy</h3>
              <p className="text-muted-foreground">
                All your data stays on your device. No information ever leaves your phone without your explicit consent.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-accent mb-4">
                <Lock className="h-6 w-6 text-burgundy" />
              </div>
              <h3 className="text-xl font-medium mb-2">No Signup Required</h3>
              <p className="text-muted-foreground">
                Start using the app immediately. No accounts, no emails, no personal information needed.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-accent mb-4">
                <Smartphone className="h-6 w-6 text-burgundy" />
              </div>
              <h3 className="text-xl font-medium mb-2">Offline Functionality</h3>
              <p className="text-muted-foreground">
                Works completely offline. No internet connection required to use any feature of the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Open Source Project</h2>
              <p className="text-lg mb-6">
                Mensinator is an open source project. We believe in transparency and community collaboration.
                Everyone is welcome to contribute to the codebase, documentation, or translations.
              </p>
              <a 
                href="https://github.com/EmmaTellblom/Mensinator" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-800 font-medium"
              >
                <Github className="h-5 w-5" />
                View on GitHub
              </a>
            </div>
            <div className="p-6 bg-background rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-4">Join Our Community</h3>
              <p className="mb-4 text-muted-foreground">
                Whether you're a developer, designer, or user with feedback, we'd love to have you as part of our community.
              </p>
              <div className="space-y-3">
                <Link 
                  to="/manual"
                  className="block text-sm text-slate-700 hover:text-slate-800 font-medium"
                >
                  Read User Manual →
                </Link>
                <Link 
                  to="/docs"
                  className="block text-sm text-slate-700 hover:text-slate-800 font-medium"
                >
                  Read Documentation →
                </Link>
                <Link 
                  to="/about"
                  className="block text-sm text-slate-700 hover:text-slate-800 font-medium"
                >
                  Meet the Team →
                </Link>
                <Link 
                  to="/faq"
                  className="block text-sm text-slate-700 hover:text-slate-800 font-medium"
                >
                  View FAQ →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
