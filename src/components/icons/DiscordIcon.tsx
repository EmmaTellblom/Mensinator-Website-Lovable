
import * as React from "react";

// Discord SVG, styled similar to Lucide icons (stroke, fill, width, height)
const DiscordIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className = "", ...props }, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      width={props.width || 20}
      height={props.height || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-discord ${className}`.trim()}
      {...props}
    >
      <path d="M21 20c-1.38-1.17-2.5-2.017-3.44-2.6M3 20V7.5C3 5.015 4.338 4 6.781 4h10.438C19.662 4 21 5.015 21 7.5V20m0 0c-1.38-1.17-2.5-2.017-3.44-2.6M3 20c1.38-1.17 2.5-2.017 3.44-2.6m0 0A19.66 19.66 0 0 0 8 18.5c1.2.4 2.348.5 4 .5s2.8-.1 4-.5c.64-.233 1.244-.491 1.56-.7m-11.12.7C5.5 17.983 4.38 17.13 3 16m3.44 1.4C6.5 17.983 5.5 17.13 3 16m18 0c-2.5 1.13-3.5 1.983-3.44 2.4M9.5 10.5h.01m5-.002h.01" />
      <circle cx="9.5" cy="10.5" r="1" fill="currentColor"/>
      <circle cx="14.51" cy="10.498" r="1" fill="currentColor"/>
    </svg>
  ),
);

DiscordIcon.displayName = "DiscordIcon";

export { DiscordIcon };
