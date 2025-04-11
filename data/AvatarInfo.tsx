import { GitHubIcon, LinkedInIcon, MailIcon, ResumeIcon } from "@/Icons";

export const AvatarInfo = [
  {
    href: "https://www.github.com/harrisazmi",
    label: "Github",
    icon: <GitHubIcon className="text-gray-130" />,
  },
  {
    href: "https://www.linkedin.com/in/harris-azmi-roswadi/",
    label: "LinkedIn",
    icon: <LinkedInIcon className="text-gray-130" />,
  },
  {
    href: "mailto:forviewcodes@gmail.com?subject=Inquiry%20from%20Your%20Portfolio&body=Hello,%20I%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out.%20Looking%20forward%20to%20connect%20with%20you%20harris!",
    label: "Mail",
    icon: <MailIcon className="text-gray-130" />,
  },
  {
    href: "/resume/harris_azmi_resume.pdf",
    label: "Resume",
    icon: <ResumeIcon className="text-gray-130" />,
  },
];
