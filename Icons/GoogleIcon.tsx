import { clx } from "@/lib/utils";

export function GoogleIcon({ className = "", ...props }) {
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
      <g id="SocMed Icon/Google">
        <path
          id="Vector"
          d="M18.8 10.2083C18.8 9.55831 18.7417 8.93331 18.6333 8.33331H10V11.8833H14.9333C14.7167 13.025 14.0667 13.9916 13.0917 14.6416V16.95H16.0667C17.8 15.35 18.8 13 18.8 10.2083Z"
          fill="#4285F4"
        />
        <path
          id="Vector_2"
          d="M9.99998 19.1667C12.475 19.1667 14.55 18.35 16.0667 16.95L13.0917 14.6417C12.275 15.1917 11.2333 15.525 9.99998 15.525C7.61665 15.525 5.59165 13.9167 4.86665 11.75H1.81665V14.1167C3.32498 17.1083 6.41665 19.1667 9.99998 19.1667Z"
          fill="#34A853"
        />
        <path
          id="Vector_3"
          d="M4.86659 11.7417C4.68325 11.1917 4.57492 10.6083 4.57492 10C4.57492 9.39166 4.68325 8.80833 4.86659 8.25833V5.89166H1.81659C1.19159 7.125 0.833252 8.51666 0.833252 10C0.833252 11.4833 1.19159 12.875 1.81659 14.1083L4.19159 12.2583L4.86659 11.7417Z"
          fill="#FBBC05"
        />
        <path
          id="Vector_4"
          d="M9.99998 4.48331C11.35 4.48331 12.55 4.94998 13.5083 5.84998L16.1333 3.22498C14.5417 1.74165 12.475 0.833313 9.99998 0.833313C6.41665 0.833313 3.32498 2.89165 1.81665 5.89165L4.86665 8.25831C5.59165 6.09165 7.61665 4.48331 9.99998 4.48331Z"
          fill="#EA4335"
        />
      </g>
    </svg>
  );
}
