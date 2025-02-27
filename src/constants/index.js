import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  csharp,
  tailwind,
  nodejs,
  couchDB,
  git,
  angular,
  mssql,
  wcbs,
  istore,
  tbc,
  tictactoe,
  uwc,
  officeProject,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'DevOps Specialist',
    icon: web,
  },
  {
    title: 'Full Stack Developer',
    icon: mobile,
  },
  {
    title: 'API Developer',
    icon: backend,
  },
  {
    title: 'Machine Learning Enthusiast',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'C#',
    icon: csharp,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'CouchDB',
    icon: couchDB,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Angular',
    icon: angular,
  },
  {
    name: 'MS SQL',
    icon: mssql,
  },
];

const experiences = [
  {
    title: 'Sales Person',
    company_name: 'iStore',
    icon: istore,
    iconBg: '#383E56',
    date: 'November 2020 – April 2021',
    points: [
      'Achieved sales targets consistently, contributing to overall store performance.',
      'Demonstrated strong communication and interpersonal skills by effectively interacting with a diverse customer base.',
      'Provided excellent customer service, assisting clients with product selection and troubleshooting.',
    ],
  },
  {
    title: 'Academic Tutor',
    company_name: 'University of The Western Cape',
    icon: uwc,
    iconBg: '#383E56',
    date: 'January 2023 - December 2024',
    points: [
      'Tutored students in Information Systems, teaching them the fundamentals of software, hardware, and web development technologies such as HTML, CSS, and JavaScript.',
      'Enhanced student learning experiences by fostering a collaborative learning environment.',
      'Implemented tailored teaching methods and provided individualised support.',
    ],
  },
  {
    title: 'Intern Software Developer',
    company_name: 'Western Cape Blood Services',
    icon: wcbs,
    iconBg: '#383E56',
    date: 'January 2024 – March 2025',
    points: [
      'Develop and maintain software applications using C#/.NET and Angular, ensuring robust and scalable solutions.',
      'Collaborate with cross-functional teams to design, develop, and implement new features',
      'Engage in DevOps practices to streamline development workflows and ensure efficient deployment pipelines.',
      'Utilize CouchDB for database management, optimizing data retrieval and storage processes.',
    ],
  },
  {
    title: 'Software Developer',
    company_name: 'Western Cape Blood Services',
    icon: wcbs,
    iconBg: '#383E56',
    date: 'March 2025 – Present',
    points: [
      'Develop and maintain software applications using C#/.NET and Angular, ensuring robust and scalable solutions',
      'Design, implement, and maintain RESTful APIs to enable seamless integration between internal and external systems',
      'Actively contribute to CI/CD pipeline development and deployment, ensuring smooth and efficient release cycles',
      'Test APIs for expected results and troubleshoot issues',
      'ollaborate with cross-functional teams for sprint planning and implementation, utilizing DevOps boards to track progress in Agile workflows',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Tic Tac Toe (React.js) ',
    description:
      'A simple, interactive Tic-Tac-Toe game built using React.js. This project showcases the use of React hooks, component-based design, and state management to create a fun and challenging two-player game. The interface is sleek and responsive, with the logic ensuring a fair play experience.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'green-text-gradient',
      },
      {
        name: 'GameDevelopment',
        color: 'pink-text-gradient',
      },
    ],
    image: tictactoe,
    source_code_link: 'https://github.com/Raeezadams',
    live_website_link: 'https://tic-tac-toe-adba6.web.app/',
  },
  {
    name: 'Office Managment System',
    description:
      'The Office Management Application allows users to efficiently manage offices and their employees. Key features include, Add, view, update, and delete offices and employees. Real-time employee search within offices. Responsive design for mobile-first usage.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'C#',
        color: 'green-text-gradient',
      },
      {
        name: 'SQL',
        color: 'pink-text-gradient',
      },
      {
        name: 'AWS',
        color: 'orange-text-gradient',
      },
      {
        name: 'MobileDevelopment',
        color: 'blue-text-gradient',
      },
    ],
    image: officeProject,
    source_code_link: 'https://github.com/Raeezadams/office-management-project',
    live_website_link: 'http://13.51.70.13:8080/',
  },
  {
    name: 'Project 3 (Coming Soon)',
    description: 'A placeholder for my next project. Stay tuned!',
    tags: [
      {
        name: 'tbc',
        color: 'blue-text-gradient',
      },
      {
        name: 'tbc',
        color: 'green-text-gradient',
      },
      {
        name: 'tbc',
        color: 'pink-text-gradient',
      },
    ],
    image: tbc,
    source_code_link: '#',
  },
];

export { services, technologies, experiences, testimonials, projects };
