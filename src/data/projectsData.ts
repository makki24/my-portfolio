// src/data/projectsData.ts
export interface Project {
    id: string;
    title: string;
    duration: string;
    description: string;
    technologies: string[];
    youtubeUrl?: string;
    clientProject?: boolean;
    images?: string[],
    tasks?: string[];
}
export const projects: Project[] = [
    {
        id: 'my-business',
        title: 'My Business',
        duration: '01/2023 – 04/2024',
        description: `A comprehensive solution for managing a family business.
                  Full-stack project using Spring Boot for the backend and React Native for the mobile app.
                  Currently managing 80+ users, reducing manual transaction processing time by 90%.
                  Integrated email notifications, daily database backups to Google Drive for each environment.
                  Set up CI/CD pipelines using Jenkins and GitHub Actions for automated testing and deployment.`,
        technologies: ['Spring Boot', 'React Native', 'Jenkins', 'GitHub Actions', 'Oracle Cloud'],
        youtubeUrl: "https://www.youtube.com/embed/PWJ5aRLJxDU?rel=0"
    },
    {
        id: 'equity-share',
        title: 'EquiShare',
        duration: '01/2024 – 04/2024',
        description: `Web application for businesses which need to manage partnership percentage detail of their shareholders`,
        technologies: ['Spring Boot', 'Angular', 'Bootstrap'],
    },
    {
        id: 'checklist',
        title: 'Advanced Checklist tool',
        description: 'Project at morgan stanley',
        tasks: [
            "Migrated 5000+ users from a legacy Angular JS app to Angular 17, significantly improving performance and user experience.",
            "Developed dynamic, scalable UI components using RxJS, Reactive Forms, and AG Grid",
            "Automated testing and deployment with Cypress and Jenkins reducing manual testing time by more than 80%, enhancing CI/CD pipeline efficiency"
        ],
        technologies: ['Angular', 'Java', 'Spring', 'CI/CD', 'Cypress E2E'],
        duration: '04/2021 – 06/2023',
        clientProject: true,
    },
    {
        id: 'mind-trade',
        title: 'Mind Trade – Stock Market Simulation',
        duration: '09/2020 – 05/2021',
        description: `A stock market simulation web application for users to buy and sell shares.
                  Backend designed using Node.js, Express, and MySQL; frontend built with React.js.`,
        technologies: ['Node.js', 'Express', 'MySQL', 'React.js']
    }
];
