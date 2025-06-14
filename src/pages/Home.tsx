import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Book, Download, Shield, Lock, Smartphone, Github } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi
} from "@/components/ui/carousel";

// Real Mensinator app screenshots
const screenshots = [
  {
    url: "https://github.com/EmmaTellblom/Mensinator/raw/main/fastlane/metadata/android/en-US/images/phoneScreenshots/1.png",
    alt: "Screenshot 1: Calendar overview",
  },
  {
    url: "https://github.com/EmmaTellblom/Mensinator/raw/main/fastlane/metadata/android/en-US/images/phoneScreenshots/3.png",
    alt: "Screenshot 3: Symptom tracking",
  },
  {
    url: "https://github.com/EmmaTellblom/Mensinator/raw/main/fastlane/metadata/android/en-US/images/phoneScreenshots/4.png",
    alt: "Screenshot 4: Add cycle",
  },
  {
    url: "https://github.com/EmmaTellblom/Mensinator/raw/main/fastlane/metadata/android/en-US/images/phoneScreenshots/5.png",
    alt: "Screenshot 5: Cycle history",
  },
  {
    url: "https://github.com/EmmaTellblom/Mensinator/raw/main/fastlane/metadata/android/en-US/images/phoneScreenshots/7.png",
    alt: "Screenshot 7: Settings",
  },
  {
    url: "https://github.com/EmmaTellblom/Mensinator/raw/main/fastlane/metadata/android/en-US/images/phoneScreenshots/8.png",
    alt: "Screenshot 8: Privacy options",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Expose carousel API to sync center slide index
  const handleSetApi = (api: CarouselApi | null) => {
    if (!api) return;
    setCurrentIndex(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-100 dark:bg-slate-900 py-8">
        <div className="container mx-auto px-4 py-8 flex flex-col items-center text-center">
          <img 
            src="/lovable-uploads/c808ea61-0339-480f-bf59-06ee2f0834ce.png" 
            alt="Mensinator Logo" 
            className="h-24 w-24 mb-6 rounded-full"
          />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-white">
            Mensinator
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl">
            We don't track your data - you do. Period.
          </p>
          <p className="text-lg mb-8 max-w-3xl">
            A private period tracking app that keeps all your data on your device.
            No signup, no cloud storage, just privacy-focused period tracking.
          </p>

          {/* "Get Started" Heading matches style of "App Screenshots" */}
          <h2 className="text-3xl font-bold text-center mb-6">
            Get Started with Mensinator
          </h2>

          {/* Button Group: Android, F-Droid, IzzyOnDroid, Manual */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-2xl mx-auto animate-fade-in">
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

      {/* Features Section: Why Choose Mensinator? */}
      <section className="bg-gray-100 dark:bg-slate-900 pt-4 pb-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            Why Choose Mensinator?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background border border-border">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-accent mb-4">
                <Shield className="h-6 w-6 text-burgundy" />
              </div>
              <h3 className="text-xl font-medium mb-2">Complete Privacy</h3>
              <p className="text-muted-foreground">
                All your data stays on your device. No information ever leaves your phone without your explicit consent.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background border border-border">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-accent mb-4">
                <Lock className="h-6 w-6 text-burgundy" />
              </div>
              <h3 className="text-xl font-medium mb-2">No Signup Required</h3>
              <p className="text-muted-foreground">
                Start using the app immediately. No accounts, no emails, no personal information needed.
              </p>
            </div>
            
            {/* Open Source & Transparent card */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background border border-border">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-accent mb-4">
                <Github className="h-6 w-6 text-burgundy" />
              </div>
              <h3 className="text-xl font-medium mb-2">
                Open Source & Transparent
              </h3>
              <p className="text-muted-foreground">
                The code is open source and available for everyone to review. Anyone is welcome to contribute code, suggest improvements, or request new features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Carousel Section */}
      <section className="bg-gray-100 dark:bg-slate-900 py-8">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center mb-6">
            App Screenshots
          </h2>
          <div className="relative flex w-full items-center justify-center gap-6">
            <Carousel
              className="relative w-[650px] max-w-full"
              opts={{
                loop: true,
                align: "center",
                slidesToScroll: 1,
                skipSnaps: false,
                containScroll: false,
              }}
              setApi={handleSetApi}
            >
              <CarouselContent>
                {screenshots.map((shot, idx) => {
                  let offset = idx - currentIndex;
                  if (offset > screenshots.length / 2) offset -= screenshots.length;
                  if (offset < -screenshots.length / 2) offset += screenshots.length;
                  // Only show center and immediate left/right (peek)
                  const isCenter = offset === 0;
                  const isSide = Math.abs(offset) === 1;
                  let style: React.CSSProperties = {
                    transition: 'transform 0.4s, opacity 0.4s',
                    transform: isCenter
                      ? 'scale(1.0)'
                      : isSide
                        ? 'scale(0.92) translateY(10px)' // bigger side images
                        : 'scale(0.75) translateY(40px)', // make distant images slightly bigger so they peek a bit
                    opacity: isCenter ? 1 : isSide ? 0.75 : 0,
                    zIndex: isCenter ? 2 : isSide ? 1 : 0,
                  };
                  return (
                    <CarouselItem
                      key={idx}
                      className="flex flex-col items-center basis-[64%] sm:basis-[48%]" // wider individual items
                      style={{
                        pointerEvents: isCenter || isSide ? undefined : "none",
                        display: isCenter || isSide ? "flex" : "none",
                      }}
                    >
                      <div className="relative w-full flex items-center justify-center">
                        <img
                          src={shot.url}
                          alt={shot.alt}
                          className="w-full h-auto object-contain select-none rounded-xl"
                          style={{
                            maxHeight: '580px', // taller max height
                            ...style,
                          }}
                          loading="lazy"
                          draggable={false}
                        />
                        {/* Gradient overlay for side images */}
                        {isSide && (
                          <div
                            className="absolute top-0 left-0 w-full h-full pointer-events-none"
                            style={{
                              background: `linear-gradient(${
                                offset === -1
                                  ? "90deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.01) 40%"
                                  : "270deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.01) 40%"
                              })`,
                              mixBlendMode: "lighten"
                            }}
                          />
                        )}
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 z-10" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 z-10" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Open Source & Community Section */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12 md:flex-row md:gap-16 items-start justify-center text-left">
            {/* Open Source Block */}
            <div className="flex-1 min-w-[260px] md:pr-8">
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
            {/* Join Our Community Block */}
            <div className="flex-1 min-w-[260px] md:pl-8">
              <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Whether you're a developer, designer, or user with feedback, we'd love to have you as part of our community.
              </p>
              <div className="flex flex-col gap-2">
                <Link 
                  to="/manual"
                  className="text-base text-slate-700 hover:text-slate-800 font-medium"
                >
                  Read User Manual →
                </Link>
                <Link 
                  to="/docs"
                  className="text-base text-slate-700 hover:text-slate-800 font-medium"
                >
                  Read about development &rarr;
                </Link>
                <Link 
                  to="/about"
                  className="text-base text-slate-700 hover:text-slate-800 font-medium"
                >
                  Meet the Team →
                </Link>
                <Link 
                  to="/faq"
                  className="text-base text-slate-700 hover:text-slate-800 font-medium"
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
