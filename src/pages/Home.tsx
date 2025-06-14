
import React from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Shield, Lock, Smartphone, Eye, DownloadCloud } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Private",
    description:
      "Your cycle data is stored on YOUR device. We never see, store, or analyze any data.",
  },
  {
    icon: Lock,
    title: "No Tracking, Ever",
    description:
      "No trackers. No ads. No analytics. Just privacy-focused period tracking peace of mind.",
  },
  {
    icon: Smartphone,
    title: "For Every Android Device",
    description:
      "Works beautifully across Android devices of all shapes and sizes.",
  },
  {
    icon: Eye,
    title: "Open Source, Open Eyes",
    description:
      "Check our code—nothing is hidden. We're open, transparent, and proud.",
  },
];

const appStoreLinks = [
  {
    label: "Google Play",
    url: "https://play.google.com/store/apps/details?id=com.mensinator.app&hl=en",
    icon: <DownloadCloud className="h-5 w-5" />,
  },
  {
    label: "F-Droid",
    url: "https://f-droid.org/en/packages/com.mensinator.app/",
    icon: <DownloadCloud className="h-5 w-5" />,
  },
  {
    label: "IzzyOnDroid",
    url: "https://apt.izzysoft.de/fdroid/index/apk/com.mensinator.app",
    icon: <DownloadCloud className="h-5 w-5" />,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-playfair bg-white dark:bg-zinc-900 transition-colors duration-300">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-center items-center text-center py-24 px-4 md:px-8 overflow-hidden bg-white dark:bg-zinc-900">
        {/* Removed gradient overlay */}
        <div className="relative z-10">
          <img
            src="/lovable-uploads/c808ea61-0339-480f-bf59-06ee2f0834ce.png"
            alt="Mensinator Logo"
            className="mx-auto h-28 w-28 rounded-full mb-8 shadow-2xl bg-white dark:bg-zinc-950 ring-2 ring-zinc-300"
            draggable={false}
          />
          <h1 className="font-extrabold text-5xl md:text-7xl mb-5 text-black dark:text-zinc-50 tracking-tight drop-shadow-none">
            Mensinator
          </h1>
          <h2 className="text-lg md:text-2xl font-semibold mb-6 text-zinc-800 dark:text-zinc-200 max-w-2xl mx-auto">
            The World’s Most Private Period Tracker
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-200 max-w-2xl mx-auto mb-8">
            <span className="font-semibold text-black dark:text-zinc-50">
              No tracking. No accounts. No B.S.
            </span>
            <br className="hidden sm:inline" />
            All your data stays on your device.<br />
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              We don&apos;t track you. You track your cycle.
            </span>
          </p>
          {/* Download Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-4">
            {appStoreLinks.map((link) => (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                key={link.label}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow text-lg font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-105 transition-all group"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
          {/* Open Source & GitHub */}
          <div className="flex justify-center items-center gap-1 mt-2">
            <a
              href="https://github.com/EmmaTellblom/Mensinator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center group text-zinc-700 dark:text-zinc-100 text-base font-medium hover:text-black dark:hover:text-white transition"
            >
              <Github className="mr-2 h-5 w-5" />
              100% Open Source – See the Code
              <span className="sr-only"> (external link)</span>
            </a>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="py-16 md:py-24 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-white tracking-tight">
            Why Mensinator is Different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {features.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 flex flex-col items-center gap-2 text-center shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="p-4 rounded-full bg-zinc-100 dark:bg-zinc-700 mb-1">
                  <Icon className="h-8 w-8 text-black dark:text-white" />
                </span>
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white">
                  {title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APP SHOWCASE */}
      <section className="relative py-20 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-zinc-900 dark:text-zinc-100 tracking-tight">
            See Mensinator in Action
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="w-[230px] h-[475px] rounded-3xl bg-zinc-100 dark:bg-zinc-800 shadow-lg flex items-center justify-center overflow-hidden ring-2 ring-zinc-300 dark:ring-zinc-700"
                style={{ animationDelay: `${n * 80}ms` }}
              >
                <span className="text-zinc-500 dark:text-zinc-300 text-center px-3 font-mono">
                  App Screenshot
                  <br />
                  <span className="text-xs opacity-70">Placeholder {n}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="text-center text-xs text-zinc-400 dark:text-zinc-500 mt-5">
            Want to see more? <span className="underline">Upload your own screenshots!</span>
          </div>
        </div>
      </section>

      {/* PRIVACY MANIFESTO */}
      <section className="py-20 px-4 bg-white dark:bg-zinc-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-zinc-900 dark:text-white">
            Privacy is Power. Your Body. Your Data.
          </h2>
          <blockquote className="italic text-lg mb-4 text-zinc-700 dark:text-zinc-200">
            &quot;Most period tracking apps treat your cycle like a commodity. We think it&apos;s none of their business.&quot;
          </blockquote>
          <p className="text-base md:text-lg mb-6 text-zinc-600 dark:text-zinc-300">
            Mensinator puts you in control. No cloud uploads, signups, accounts, hidden analytics, or secret trackers. Everything stays on your device &ndash; unless <b>you</b> say otherwise.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              className="rounded-full text-lg px-7 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow font-bold"
            >
              <a
                href="https://f-droid.org/en/packages/com.mensinator.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Mensinator Free
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full text-lg px-7 py-3 font-bold border-zinc-400 text-zinc-800 dark:text-zinc-100 dark:border-zinc-600 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <Link to="/manual">Read User Manual</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* COMMUNITY / FINAL CTA */}
      <section className="bg-black dark:bg-zinc-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            Join the Movement. Own Your Cycle.
          </h2>
          <p className="text-lg md:text-xl mb-7 text-zinc-100">
            We’re building the world’s most transparent, privacy-first period tracker, together.
            Our community is open to feedback, ideas, and contributors of all backgrounds.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="https://github.com/EmmaTellblom/Mensinator"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-lg font-bold shadow hover:bg-zinc-700 dark:hover:bg-zinc-200 hover:scale-105 transition-all hover:ring-2 hover:ring-zinc-400"
            >
              <Github className="h-6 w-6" />
              GitHub Community
            </a>
            <a
              href="https://discord.gg/tHA2k3bFRN"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-700 dark:bg-zinc-700 text-white text-lg font-bold shadow hover:bg-black hover:scale-105 transition-all hover:ring-2 hover:ring-zinc-400"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" fill="#23272A" />
                <ellipse cx="9.5" cy="13.5" rx="1.2" ry="1" fill="#fff" />
                <ellipse cx="14.5" cy="13.5" rx="1.2" ry="1" fill="#fff" />
                <rect x="8" y="8.5" width="8" height="4" rx="2" fill="#fff" opacity=".35" />
              </svg>
              Join Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// This file has reached 221+ lines, consider refactoring into smaller, focused components for maintainability.

