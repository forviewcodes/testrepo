//add more icon later on
import { MailIcon } from "@/Icons";
export const askMyGovPortfolio = {
  projectName: "AskMyGov",
  projectImage: "/projects/collab/askgov.png",
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
            "**Highlights** exact search term locations within documents, improving **contextual relevance** for users.",
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

export const directoryPortfolio = {
  projectName: "Directory",
  projectImage: "/projects/collab/directory.png",
  overview:
    "Directory.gov.my, a centralized platform for accessing government officers' details and ministry contact information. The platform features a comprehensive staff and office directory, providing verified positions, divisions, contact details, and integrated mapping services (Google Maps). With bilingual support and mobile-responsive design, it streamlines access to government contacts, enhancing efficiency for citizens, employees, and stakeholders",

  techstack: {
    main: [
      { name: "TypeScript", path: "/tools/languages/typescript.png" },
      { name: "NextJs", path: "/tools/fullstack/nextjs.png" },
      { name: "Tailwind CSS", path: "/tools/frontend/tailwind.png" },
      { name: "i18n", path: "/tools/others/i18n.png" },
      { name: "Elasticsearch", path: "/tools/database/elasticsearch.png" },
      { name: "Shadcn UI", path: "/tools/others/shadcn.png" },
      { name: "Radix UI", path: "/tools/others/radix.png" },
      { name: "MYDS UI", path: "/tools/others/myds.png" },
      { name: "Docker", path: "/tools/devops/docker.png" },
      {
        name: "GitHub Actions (GHA)",
        path: "/tools/devops/gha.png",
      },
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
          heading: "Platform Optimization",
          details: [
            "**Resolved critical bugs** and optimized frontend performance for a seamless user experience.",
            "**Improved page load times** and responsiveness through optimized rendering and assets.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Bug Fixes & UX",
          details: [
            "**Fixed critical bugs**, significantly improving platform stability and the overall user experience.",
            "Implemented **i18n (internationalization)** to support multilingual capabilities.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Workflow & Dependencies",
          details: [
            "**Resolved pnpm dependency issues** to ensure a smoother development workflow.",
            "**Removed Payload CMS**, simplifying backend dependencies and reducing complexity.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Search & Code Quality",
          details: [
            "Disabled unnecessary **SEO indexing** to improve search engine optimization.",
            "**Configured Elasticsearch** for faster, more accurate search results.",
            "**Optimized the data table component** and refactored code for better performance and maintainability.",
          ],
        },
      ],
    },

    DevopsDevelopment: {
      title: "DevOps Development",
      items: [
        {
          icon: <MailIcon />,
          heading: "CI/CD and Workflow Automation",
          details: [
            "**Set up GitHub Actions (GHA)** for CI/CD automation.",
            "**Fixed environment variable passing** in GitHub Actions workflows.",
            "**Implemented proper hooks** in GHA for deployment consistency.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Docker and Containerization",
          details: [
            "**Dockerized the Next.js application**, improving containerization for deployment efficiency.",
            "**Reduced Docker image size** and improved Dockerfile and YAML configurations.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Cloud and Infrastructure Management",
          details: [
            "Updated **configurations** for **AWS** deployments.",
            "**Fixed Elastic Load Balancer (ELB) issues** and updated the deployment path for better reliability.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Kubernetes (K8s) Configuration Management",
          details: [
            "**Set up and managed** Kubernetes configuration files **(.kube)** in GitHub",
            "Enabled **streamlined deployment** and environment management",
            "Ensured **proper configuration** for seamless integration with Kubernetes clusters",
          ],
        },
      ],
    },
  },
};

export const mydsPortfolio = {
  projectName: "MYDS",
  projectImage: "/projects/collab/myds.png",
  overview:
    "MYDS is a comprehensive design system created to establish consistent user experience standards across Malaysian government digital services. The system provides a collection of reusable UI components, design patterns, and guidelines that enable teams to build accessible, responsive, and visually cohesive applications efficiently. MyDS aims to reduce redundancy in UI development efforts, accelerate project timelines, and ensure compliance with government digital standards.",

  techstack: {
    main: [
      { name: "TypeScript", path: "/tools/languages/typescript.png" },
      { name: "NextJs", path: "/tools/fullstack/nextjs.png" },
      { name: "Tailwind CSS", path: "/tools/frontend/tailwind.png" },
      { name: "i18n", path: "/tools/others/i18n.png" },
      { name: "Shadcn UI", path: "/tools/others/shadcn.png" },
      { name: "Radix UI", path: "/tools/others/radix.png" },
      //add image later on
      { name: "FumaDocs", path: "/tools/others/radix.png" },
      { name: "Storybook", path: "/tools/others/radix.png" },
    ],
  },

  sections: {
    FrontendDevelopment: {
      title: "Frontend Development",
      items: [
        {
          icon: <MailIcon />,
          heading: "Package Development",
          details: [
            "**Developed** React-based components for the @govtechmy/myds-react package.",
            "Contributed to creating **reusable** and **scalable** UI components for MYDS.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Comprehensive Documentation",
          details: [
            "**Contributed** to the development of **comprehensive documentation** for the MYDS package.",
            "Detailed Docs on usage instructions for **components** and **hooks**",
            "Icon documentation for **seamless** integration",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "MYDS Icon Explorer",
          details: [
            "**Efficient** icon search functionality",
            "One-click **SVG** copy feature",
            "**Filtering** options to enhance user navigation",
            "**Multilingual** capabilities via i18n support",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Core UI Components",
          details: [
            "**Designed**, **implemented**, and **documented** **essential** UI components : Masthead, Navbar, Footer, Callout, Label, Summary List, Checkbox, Toggle, Theme Toggler & Theme Toggler Hook",
            "Spinner for **consistent** loading behavior",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Storybook Integration",
          details: [
            "Utilized **Storybook** to develop, test, and document UI components in isolation.",
            "Ensured **consistency** and **reusability** across applications.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "UI/UX Consistency",
          details: [
            "Contributed to the **development** and **optimization** of MYDS, ensuring UI/UX consistency across multiple applications for a cohesive user experience.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Collaborative Development",
          details: [
            "Worked **closely** with both **development and design teams** to integrate design and functionality.",
            "Focused on delivering a **user-centered** experience, aligning design vision with technical feasibility.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Cross-Functional Collaboration",
          details: [
            "**Collaborated** effectively with stakeholders across departments.",
            "Ensured components adhered to **industry standards** for scalability, maintainability, and consistency, while meeting accessibility and user interface design guidelines.",
          ],
        },
      ],
    },
  },
};
