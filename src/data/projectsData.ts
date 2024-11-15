// src/data/projectsData.ts

export const projects = [
    {
        id: 'my-business',
        title: 'My Business',
        duration: '01/2023 – 04/2024',
        description: `A comprehensive solution for managing a family business.
                  Full-stack project using Spring Boot for the backend and React Native for the mobile app.
                  Currently managing 70+ users, reducing manual transaction processing time by 90%.
                  Integrated email notifications, daily database backups to Google Drive for each environment.
                  Set up CI/CD pipelines using Jenkins and GitHub Actions for automated testing and deployment.`,
        technologies: ['Spring Boot', 'React Native', 'Jenkins', 'GitHub Actions', 'Oracle Cloud']
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
