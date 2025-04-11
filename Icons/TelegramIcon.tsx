import { clx } from "@/lib/utils";

export function TelegramIcon({ className = "", ...props }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clx("", className)}
      {...props}
    >
      <g id="SocMed Icon/Telegram" clipPath="url(#clip0_393_1220)">
        <path
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM10.3584 7.38244C9.38571 7.787 7.44178 8.62433 4.52658 9.89443C4.05319 10.0827 3.80521 10.2668 3.78264 10.4469C3.74449 10.7512 4.12559 10.8711 4.64456 11.0343C4.71515 11.0565 4.78829 11.0795 4.86328 11.1038C5.37386 11.2698 6.06069 11.464 6.41774 11.4717C6.74162 11.4787 7.10311 11.3452 7.5022 11.0711C10.226 9.2325 11.632 8.30317 11.7203 8.28314C11.7825 8.26901 11.8688 8.25123 11.9273 8.3032C11.9858 8.35518 11.98 8.4536 11.9738 8.48C11.9361 8.64095 10.4401 10.0317 9.66593 10.7515C9.42459 10.9759 9.25339 11.135 9.2184 11.1714C9.14 11.2528 9.06011 11.3298 8.98332 11.4038C8.50897 11.8611 8.15326 12.204 9.00301 12.764C9.41137 13.0331 9.73814 13.2556 10.0641 13.4776C10.4201 13.7201 10.7752 13.9619 11.2347 14.2631C11.3517 14.3398 11.4635 14.4195 11.5724 14.4971C11.9867 14.7925 12.359 15.0578 12.8188 15.0155C13.086 14.9909 13.3621 14.7397 13.5022 13.9903C13.8335 12.2193 14.4847 8.38205 14.6352 6.80081C14.6484 6.66227 14.6318 6.48498 14.6185 6.40715C14.6051 6.32931 14.5773 6.21842 14.4761 6.13633C14.3563 6.03911 14.1714 6.01861 14.0886 6.02007C13.7125 6.0267 13.1355 6.22735 10.3584 7.38244Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_393_1220">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
