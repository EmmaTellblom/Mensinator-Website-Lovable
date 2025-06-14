
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
        className="absolute left-[18px] top-[28px] w-[184px] h-[421px] rounded-[20px] overflow-hidden bg-black z-10 shadow-inner flex items-center justify-center"
        style={{
          boxShadow: "inset 0 2px 6px 0 #00000060",
        }}
        data-testid="android-phone-screen"
      >
        {imageUrl && !hasError ? (
          <img
            src={imageUrl}
            alt={alt || ""}
            className="w-full h-full object-contain bg-black border-4 border-red-400"
            loading="lazy"
            draggable={false}
            style={{ background: "#fff" }}
            onLoad={() => {
              console.log("[AndroidPhoneFrame] Image loaded:", imageUrl);
            }}
            onError={() => {
              console.error("[AndroidPhoneFrame] Image failed to load:", imageUrl);
              setHasError(true);
            }}
          />
        ) : hasError ? (
          <div className="flex flex-col items-center justify-center w-full h-full bg-yellow-100 text-red-700 p-2">
            <span className="text-sm font-semibold">Image failed to load!</span>
            <span className="text-xs break-all">{imageUrl}</span>
          </div>
        ) : (
          <span className="text-xs text-gray-400">Image not available</span>
        )}
      </div>
      {/* SVG: Outer phone with screen mask */}
      <svg
        viewBox="0 0 220 477"
        width="220"
        height="477"
        className="absolute inset-0 pointer-events-none z-20"
        style={{ width: "100%", height: "100%" }}
      >
        {/* Phone body */}
        <rect
          x="4"
          y="4"
          rx="32"
          ry="32"
          width="212"
          height="469"
          fill="#18181B"
          stroke="#333"
          strokeWidth="4"
        />
        {/* Side buttons */}
        <rect x="8" y="90" width="2" height="52" rx="1" fill="#444" />
        <rect x="8" y="160" width="2" height="24" rx="1" fill="#444" />
        {/* Top earpiece */}
        <rect x="98" y="20" width="24" height="4" rx="2" fill="#222" />
        {/* Home button (bottom center) */}
        <circle cx="110" cy="461" r="9" fill="#282828" />
      </svg>
    </div>
  );
};

export default AndroidPhoneFrame;
