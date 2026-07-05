import type { NavIconName } from "@/lib/site";

type NavIconProps = {
  name: NavIconName;
  className?: string;
};

const iconProps = {
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
};

export default function NavIcon({ name, className }: NavIconProps) {
  switch (name) {
    case "home":
      return (
        <svg className={className} {...iconProps}>
          <path
            d="M3.5 7.25 8 3.5l4.5 3.75V12a1 1 0 0 1-1 1h-2.25V10h-2.5v3H4.5a1 1 0 0 1-1-1V7.25Z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
          <path
            d="M8 6.25v1.5"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      );
    case "music":
      return (
        <svg className={className} {...iconProps}>
          <path
            d="M6.25 11.25V5.1l5.5-1.35v6.15"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="4.75" cy="11.25" r="1.5" stroke="currentColor" strokeWidth="1.25" />
          <circle cx="9.75" cy="9.9" r="1.5" stroke="currentColor" strokeWidth="1.25" />
        </svg>
      );
    case "world":
      return (
        <svg className={className} {...iconProps}>
          <circle cx="8" cy="8" r="5.25" stroke="currentColor" strokeWidth="1.25" />
          <path
            d="M2.75 8h10.5M8 2.75c1.5 1.65 2.25 3.45 2.25 5.25S9.5 11.6 8 13.25M8 2.75C6.5 4.4 5.75 6.2 5.75 8s.75 3.6 2.25 5.25"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      );
    case "vault":
      return (
        <svg className={className} {...iconProps}>
          <rect
            x="4.25"
            y="7"
            width="7.5"
            height="5.75"
            rx="1"
            stroke="currentColor"
            strokeWidth="1.25"
          />
          <path
            d="M5.75 7V5.5a2.25 2.25 0 0 1 4.5 0V7"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <circle cx="8" cy="10" r="0.75" fill="currentColor" />
        </svg>
      );
    case "live":
      return (
        <svg className={className} {...iconProps}>
          <path
            d="M8 3.5 12.5 5.75v4.5L8 12.5 3.5 10.25v-4.5L8 3.5Z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
          <path
            d="M8 6.25v3.5M6.25 8H9.75"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      );
    case "about":
      return (
        <svg className={className} {...iconProps}>
          <circle cx="8" cy="8" r="5.25" stroke="currentColor" strokeWidth="1.25" />
          <path
            d="M8 7.1V11M8 5.25v.15"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
          />
        </svg>
      );
    case "merch":
      return (
        <svg className={className} {...iconProps}>
          <path
            d="M4.5 5.25h7l-.75 7.5H5.25L4.5 5.25Z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
          <path
            d="M6.25 5.25c0-1.25 1.1-2.25 1.75-2.25S9.75 4 9.75 5.25"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
