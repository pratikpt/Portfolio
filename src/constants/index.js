export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const reviews = [
  {
    id: 3,
    name: 'Adikeshav',
    position: 'Product Manager at Happyfox',
    img: 'assets/review1.png',
    review:
      'Working with Pratik was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Dipankar',
    position: 'Lead Engineer at Freshworks',
    img: 'assets/review2.png',
    review:
      'Pratik’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 1,
    name: 'Hirak Chatterji',
    position: 'Engineering Manager at Swiggy ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Pratik. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Vathulan',
    position: 'Staff Engineer at Freshworks',
    img: 'assets/review4.png',
    review:
      'Pratik was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Swiggy Partner App',
    desc: 'An application designed to empower restaurant partners by providing tools for self-management and optimization.',
    subdesc:
      'Key features include Self-Serve Ads and Discounts, Authentication module, app optimizations, and internal dashboards for restaurant management.',
    href: '',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/swiggy.svg',
    logoStyle: {
      backgroundColor: '#F2C94C',
      border: '0.2px solid #E5B639',
      boxShadow: '0px 0px 60px 0px #FFD7004D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: '/assets/node.svg',
      },
      {
        id: 3,
        name: 'Angular',
        path: '/assets/angular.png',
      },
    ],
  },
  {
    title: 'Swiggy Consumer App',
    desc: 'A user-facing application that enhances the dining experience with advanced features and seamless design.',
    subdesc:
      'Contributions include building the Design Language System (DLS), Occasions web pages, and implementing Restaurant-led Gratifications.',
    href: '',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/swiggy.svg',
    logoStyle: {
      backgroundColor: '#27AE60',
      border: '0.2px solid #219653',
      boxShadow: '0px 0px 60px 0px #6FCF974D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'GraphQL',
        path: '/assets/graphql.png',
      },
    ],
  },
  {
    title: 'Freshworks: Asset Management',
    desc: 'Track and manage hardware and software assets.',
    subdesc:
      'Contributed to scaling Freshservice and Freshmarketer with a focus on UI performance and IT Asset Management (ITAM) enhancements.',
    href: 'https://www.freshworks.com/freshservice/itam/',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/freshworks.png',
    logoStyle: {
      backgroundColor: '#27AE60',
      border: '0.2px solid #219653',
      boxShadow: '0px 0px 60px 0px #6FCF974D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Ruby on Rails',
        path: '/assets/ror.png',
      },
      {
        id: 2,
        name: 'Ember',
        path: 'assets/ember.svg',
      },
    ],
  },
  {
    title: 'Freshworks: FreshMarketer',
    desc: 'Modern ITAM for efficient service operations',
    subdesc: 'Implemented TypeScript support for Ember to improve codebase robustness and maintainability.',
    href: 'https://www.freshworks.com/crm/marketing/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/freshworks.png',
    logoStyle: {
      backgroundColor: '#9B59B6',
      border: '0.2px solid #8E44AD',
      boxShadow: '0px 0px 60px 0px #D2B4DE4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Ember',
        path: 'assets/ember.svg',
      },
    ],
  },
  {
    title: 'HappyFox Asset Manager',
    desc: 'Track and manage hardware and software assets seamlessly with HappyFox Asset Manager.',
    subdesc: 'This application simplifies asset management for businesses of all sizes.',
    href: 'https://apps.apple.com/us/app/happyfox-asset-manager/id1439911160',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/happyfox.svg',
    logoStyle: {
      backgroundColor: '#34495E',
      border: '0.2px solid #2C3E50',
      boxShadow: '0px 0px 60px 0px #7F8C8D4D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React Native',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'GraphQL',
        path: '/assets/graphql.png',
      },
    ],
  },
  {
    title: 'HappyFox Chat/Chatbot',
    desc: 'A mobile app that enables live chat and chatbot support for businesses on the go.',
    subdesc: 'Designed for real-time customer engagement, ensuring seamless communication anytime, anywhere.',
    href: 'https://apps.apple.com/us/app/happyfox-chat-2-0/id1488919909',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/happyfox.svg',
    logoStyle: {
      backgroundColor: '#F21C3C',
      border: '0.2px solid #C0392B',
      boxShadow: '0px 0px 60px 0px #F1948A4D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React Native',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'HappyFox HelpDesk',
    desc: 'A cloud-based customer support platform with an enterprise-grade help desk ticketing system.',
    subdesc: 'Offers a comprehensive solution for managing support tickets and knowledge bases.',
    href: 'https://apps.apple.com/us/app/happyfox-help-desk-2-0/id1511874864',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/happyfox.svg',
    logoStyle: {
      backgroundColor: '#9B59B6',
      border: '0.2px solid #8E44AD',
      boxShadow: '0px 0px 60px 0px #D2B4DE4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React Native',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'GraphQL',
        path: '/assets/graphql.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Freshworks',
    pos: 'Lead Software Engineer',
    duration: '05/2024 - Present',
    title: [
      'Contributed to scaling Freshservice and Freshmarketer with a focus on UI performance and IT Asset Management (ITAM) enhancements.',
      'Implemented TypeScript support for Ember to improve codebase robustness and maintainability.',
      'Led frontend development teams to deliver projects on time while reviewing code changes and optimizing application performance.',
      'Directed integration of software applications, ensuring seamless UI and system compatibility.',
    ],
    icon: '/assets/freshworks.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Swiggy',
    pos: 'Senior Software Engineer',
    duration: '02/2022 - 03/2024',
    title: [
      'Initiated Micro Frontend Architecture: Leveraged React Native for Web/Mobile to pioneer code reusability, reducing development and testing time by over 50% and synchronizing task delivery for faster product cycles.',
      'Developed Self-Serve Ads and Discounts: Created modules enabling businesses to promote and manage promotions autonomously, boosting revenue and customer engagement on Swiggy.',
      "Enhanced Authentication Security: Directed the creation of a secure, user-friendly authentication module for Swiggy's vendor interfaces.",
      'Design Language System (DLS) Contribution: Designed the Discount coupon feature, enhancing UI consistency and brand design standards.',
      'Optimized User Experiences: Developed features for Swiggy Occasions and Restaurant-led gratifications using Next.js, significantly improving consumer engagement.',
      'Built Customer Complaint Resolution Process (CCRP): Created a direct customer feedback process for restaurants, reducing complaints by 8.5% and improving refund and compensation cycles.',
      'Launched New Ads Experience for Partners: Enabled 111k restaurant partners to customize ads, driving a 1% increase in VAM orders and adding ₹1.35 Cr in revenue with a 30p incremental RPO.',
    ],
    icon: '/assets/swiggy.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Happyfox',
    pos: 'Software Engineer',
    duration: '05/2018 - 02/2022',
    title: [
      'Developed Mobile Helpdesk Tool: Built using HappyFox Mobile Help Desk, enabling support agents to manage customer queries seamlessly on iOS and Android.',
      'Implemented Real-Time Chat Support: Added HF-Chat and Chatbot features for in-app customer assistance, integrating SDKs for a smooth user experience without leaving the app.',
      'Established Asset Manager: Created HappyFox Asset Management to track hardware and software assets, linking multiple assets to a single end-user support ticket.',
      'Optimized System Performance: Reduced load times by 20% through React optimization strategies such as memoization and code-splitting, improving overall app responsiveness.',
    ],
    icon: '/assets/happyfox.svg',
    animation: 'salute',
  },
];
