
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Shield, Lock, Smartphone, Github } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-accent to-background py-20">
        <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col items-center text-center">
          <img 
            src="/lovable-uploads/c808ea61-0339-480f-bf59-06ee2f0834ce.png" 
            alt="Cycle Companion Logo" 
            className="h-24 w-24 mb-6"
          />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="gradient-text">Cycle Companion</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            A private period tracking app that keeps all your data on your device.
            No signup, no cloud storage, just privacy-focused period tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-burgundy hover:bg-burgundy-700">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                Download for Android
              </a>
            </Button>
            <Button size="lg" variant="outline">
              <Link to="/docs">Read Documentation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Cycle Companion?
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
                Cycle Companion is an open source project. We believe in transparency and community collaboration.
                Everyone is welcome to contribute to the codebase, documentation, or translations.
              </p>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-burgundy hover:text-burgundy-700 font-medium"
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
                  to="/docs"
                  className="block text-sm text-burgundy hover:text-burgundy-700 font-medium"
                >
                  Read Documentation →
                </Link>
                <Link 
                  to="/about"
                  className="block text-sm text-burgundy hover:text-burgundy-700 font-medium"
                >
                  Meet the Team →
                </Link>
                <Link 
                  to="/faq"
                  className="block text-sm text-burgundy hover:text-burgundy-700 font-medium"
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
