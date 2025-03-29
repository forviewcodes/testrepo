import { MailIcon } from "@/Icons";
export const askMyGovPortfolio = {
  projectName: "AskMyGov",
  overview:
    "AskMyGov is a centralized platform designed to streamline communication between citizens and government agencies by providing a single, reliable source for frequently asked questions. It consolidates scattered information from multiple agency websites, ensuring accessibility and consistency while enhancing the efficiency of citizen-government interactions.",

  techstack: {
    main: [
      { name: "TypeScript", path: "/tools/languages/typescript.png" },
      { name: "NextJs", path: "/tools/fullstack/nextjs.png" },
      { name: "Tailwind CSS", path: "/tools/frontend/tailwind.png" },
      { name: "i18n", path: "/tools/others/i18n.png" },
      { name: "Elasticsearch", path: "/tools/database/elasticsearch.png" },
      { name: "ESLint", path: "/tools/others/eslint.png" },
      { name: "Shadcn UI", path: "/tools/others/shadcn.png" },
      { name: "Radix UI", path: "/tools/others/radix.png" },
      { name: "MYDS UI", path: "/tools/others/myds.png" },
      { name: "Docker", path: "/tools/devops/docker.png" },
      {
        name: "GitHub Actions (GHA)",
        path: "/tools/devops/gha.png",
      },
      { name: "AWS S3", path: "/tools/others/awss3.png" },
      { name: "AWS ECR", path: "/tools/others/awsecr.png" },
      { name: "AWS EKS", path: "/tools/others/awseks.png" },
      { name: "Kubernetes", path: "/tools/devops/k8s.png" },
      { name: "Spinnaker", path: "/tools/devops/spinnaker.png" },
    ],
  },

  sections: {
    FrontendDevelopment: {
      title: "Frontend Development",
      items: [
        {
          icon: <MailIcon />,
          heading: "Architecture & Performance",
          details: [
            "Built a **modular** Next.js frontend optimized for scalability.",
            "Used **SSR (Server-Side Rendering)** and **SSG (Static Site Generation)** for improved load times.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Internationalization",
          details: [
            "Integrated **i18n** for **multilingual support**, ensuring **accessibility** for diverse users.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Component Consistency",
          details: [
            "Standardized UI elements with **ShadCN, Radix UI, and MyDS** to maintain a **cohesive** design.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Search Optimization",
          details: [
            "Implemented **Elasticsearch** for **fast** and **efficient** search functionality.",
            "Improved **user experience** with **Elasticsearch-powered** search functionality",
          ],
        },
      ],
    },

    DevopsDevelopment: {
      title: "DevOps & Infrastructure",
      items: [
        {
          icon: <MailIcon />,
          heading: "CI/CD Efficiency",
          details: [
            "Automated **deployment pipelines** using **GitHub Actions** and **Spinnaker**, ensuring smooth updates.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Security & Access Controls",
          details: [
            "Implemented **secure AWS authentication** and **infrastructure access controls** to protect data and resources.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "CICD Optimization",
          details: [
            "Streamlined image management by **automating Docker builds** and **ECR pushes**.",
          ],
        },

        {
          icon: <MailIcon />,
          heading: "Cloud & Infra Optimization",
          details: [
            "Managed containerized applications in **k8s**, hosted on **AWS EKS**, image on **ECR**",
            "Optimized **resource allocation** to ensure **high availability** and **performance**.",
          ],
        },
      ],
    },
  },
};
