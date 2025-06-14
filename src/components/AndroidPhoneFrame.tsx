import React, { useState } from "react";

interface AndroidPhoneFrameProps {
  imageUrl: string;
  alt?: string;
  className?: string;
}

const AndroidPhoneFrame: React.FC<AndroidPhoneFrameProps> = ({
  imageUrl,
  alt,
  className,
}) => {
  const [hasError, setHasError] = useState(false);

  // Log if imageUrl is missing or falsy
  if (!imageUrl) {
    console.warn("[AndroidPhoneFrame] imageUrl prop is missing or falsy.");
  }

  return (
    <div
      className={`relative w-[220px] aspect-[9/19.5] flex items-center justify-center ${className || ""}`}
      style={{
        maxWidth: "100%",
        minWidth: "180px",
      }}
    >
      {/* The actual app screenshot in the "screen" */}
      <div
        className="absolute left-[18px] top-[28px] w-[184px] h-[421px] rounded-[20px] overflow-hidden z-30 bg-black flex items-center justify-center"
        style={{
          boxShadow: "inset 0 2px 6px 0 #00000060",
        }}
        data-testid="android-phone-screen"
      >
        {imageUrl && !hasError ? (
          <img
            src={imageUrl}
            alt={alt || ""}
            className="w-full h-full object-contain"
            loading="lazy"
            draggable={false}
            style={{ background: "#101010" }}
            onLoad={() => {
              console.log("[AndroidPhoneFrame] Image loaded:", imageUrl);
            }}
            onError={() => {
              console.error("[AndroidPhoneFrame] Image failed to load:", imageUrl);
              setHasError(true);
            }}
          />
        ) : hasError ? (
          <div className="flex flex-col items-center justify-center w-full h-full bg-yellow-100 text-red-700 p-2 z-50">
            <span className="text-base font-semibold">Image failed to load!</span>
            <span className="text-xs text-wrap break-all">{imageUrl || "No imageUrl"}</span>
          </div>
        ) : (
          <span className="text-xs text-gray-800 z-50 bg-white opacity-80 px-2 rounded">
            Image not available (src missing)
          </span>
        )}
      </div>
      {/* SVG: Outer phone with realistic effects */}
      <svg
        viewBox="0 0 220 477"
        width="220"
        height="477"
        className="absolute inset-0 pointer-events-none z-20"
        style={{ width: "100%", height: "100%" }}
      >
        {/* Gradients for highlight and shadow */}
        <defs>
          <linearGradient id="body-gradient" x1="0" y1="0" x2="0" y2="477" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2a3038" />
            <stop offset="70%" stopColor="#191B1E" />
            <stop offset="100%" stopColor="#111215" />
          </linearGradient>
          <radialGradient id="highlight-gradient" cx="50%" cy="10%" r="80%" fx="60%" fy="0%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.28" />
            <stop offset="60%" stopColor="#fff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="bezel-gradient" x1="0" y1="0" x2="220" y2="0">
            <stop offset="0%" stopColor="#3d4550" stopOpacity="0.75" />
            <stop offset="15%" stopColor="#1c1c22" stopOpacity="1" />
            <stop offset="85%" stopColor="#1c1c22" stopOpacity="1" />
            <stop offset="100%" stopColor="#5a5a64" stopOpacity="0.75" />
          </linearGradient>
        </defs>
        {/* Phone body with gradient */}
        <rect
          x="4"
          y="4"
          rx="32"
          ry="32"
          width="212"
          height="469"
          fill="url(#body-gradient)"
          stroke="url(#bezel-gradient)"
          strokeWidth="5"
        />
        {/* Glass reflection overlay */}
        <ellipse
          cx="110"
          cy="40"
          rx="96"
          ry="20"
          fill="url(#highlight-gradient)"
        />
        {/* Subtle glass/sheen effect on the right edge */}
        <rect
          x="195"
          y="25"
          width="5"
          height="427"
          rx="2"
          fill="#fff"
          opacity="0.08"
        />
        {/* Bezel around the screen (adds some depth) */}
        <rect
          x="18"
          y="28"
          width="184"
          height="421"
          rx="20"
          fill="none"
          stroke="#2e2f35"
          strokeWidth="3.5"
          opacity="0.7"
        />
        {/* Softer shadow at the lower edge */}
        <ellipse
          cx="110"
          cy="466"
          rx="92"
          ry="8"
          fill="#000"
          opacity="0.13"
        />
        {/* Side buttons with highlights */}
        <rect x="8" y="90" width="2.5" height="52" rx="1" fill="#5a5e6b" opacity="0.82" />
        <rect x="8" y="160" width="2.5" height="24" rx="1" fill="#8b8e98" opacity="0.7" />
        {/* Top earpiece with subtle edge */}
        <rect x="98" y="20" width="24" height="5" rx="2.5" fill="#222" opacity="0.8" />
        <rect x="100" y="22" width="20" height="1.5" rx="0.75" fill="#66676c" opacity="0.6" />
        {/* Home button with inner shadow and highlight */}
        <circle cx="110" cy="461" r="11" fill="#18181B" stroke="#37373d" strokeWidth="1.5" />
        <ellipse cx="110" cy="462.5" rx="5.5" ry="2" fill="#fff" opacity="0.13" />
        {/* Reflection highlight on upper left */}
        <ellipse
          cx="49"
          cy="35"
          rx="27"
          ry="7"
          fill="#fff"
          opacity="0.065"
        />
      </svg>
    </div>
  );
};

export default AndroidPhoneFrame;
