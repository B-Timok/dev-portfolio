const baseUrl = "https://b-timok.github.io/dev-portfolio";

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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  unlv,
  shopify,
  lessi,
  tictactoe,
  roadwatch,
  speedcubedb,
  pokemon,
  nbascores,
  sortingalgs,
  threejs,
  csharp,
  cpp,
  elephant,
  microsoft,
  python,
  linkedin,
  githublink,
  cv,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "resume",
    title: "Resume",
    url: `${baseUrl}/BTimokResume24.pdf`,
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "Back-End Developer",
    icon: mobile,
  },
  {
    title: "IT Specialist",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "CSharp",
    icon: csharp,
  },
  {
    name: "Elephant",
    icon: elephant,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Microsoft",
    icon: microsoft,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "E-commerce Business Owner",
    company_name: "Self-Employed",
    icon: shopify,
    iconBg: "#383E56",
    date: "February 2017 - January 2021",
    points: [
      "Scaled e-commerce business from solo operation to managing 100+ contractors",
      "Developed Shopify-based website, integrated payment systems and order management",
      "Implemented data-driven marketing strategies, resulting in significant growth",
      "Recruited over 100 highly skilled contractors, managed payroll, and took care of all customer relations",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "UNLV Office of Economic Development",
    icon: unlv,
    iconBg: "#fffdff",
    date: "November 2023 - March 2024",
    points: [
      "Collaborated with clients on website improvements using HTML, CSS, and JavaScript",
      "Assisted small business clients with SEO and website design",
      "Learned and utilized various web building platforms",
      "Enhanced user interfaces (UI) for better user experience",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Lessi AI",
    icon: lessi,
    iconBg: "#ee5321",
    date: "June 2024 - Present",
    points: [
      "Develop AI-based lesson planning tools for K-12 educators using C#",
      "Work with APIs, PostgreSQL, Docker, and GitHub for application development",
      "Implement new features and improve existing ones",
    ],
  },
];

const projects = [
  {
    name: "Roadwatch",
    description: "A Progressive Web App designed for real-time road condition reporting, hazard alerts, and community input on local infrastructure. This project won first place in a UNLV College of Engineering software design competition, showcasing its effectiveness in improving road safety and community engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "black-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      }
    ],
    image: roadwatch,
    source_code_link: "https://github.com/UNLV-CS472-672/2024-S-GROUP1-Roadwatch",
  },
  {
    name: "Tic Tac Toe Web App",
    description: "An interactive Tic Tac Toe web application featuring responsive design, dynamic gameplay, and a computer opponent. This project showcases front-end development skills with a focus on user interaction and basic AI implementation.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: tictactoe,
    source_code_link: "https://github.com/B-Timok/TicTacToe",
    play_game_link: "https://b-timok.github.io/TicTacToe/",
  },
  {
    name: "Speedcube Database",
    description: "A MySQL database project for tracking and analyzing a speedcube collection. It includes tables for detailed cube information and time statistics, allowing in-depth analysis of performance, solve times, and trends. Features capabilities for sorting and querying data to enhance understanding of speedcubing progress and efficiency.",
    tags: [
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "database",
        color: "pink-text-gradient",
      },
    ],
    image: speedcubedb,
    source_code_link: "https://github.com/yourusername/speedcube-database",
  },
  {
    name: "Pokemon Egg Hatching",
    description: "This project uses a Pokemon dataset to predict egg hatch times and Pokemon types. It employs libraries like pandas, numpy, and sklearn for data analysis and predictions, offering insights into Pokemon characteristics and behavior.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "numpy",
        color: "yellow-text-gradient",
      },
      {
        name: "sklearn",
        color: "red-text-gradient",
      }
    ],
    image: pokemon,
    source_code_link: "https://github.com/nickhouses/ML/tree/main/Project",
    report_link: "/PokemonML.pdf",
  },
  {
    name: "NBA Scoreboard Analysis",
    description: "Real-time NBA game score and statistic analysis in CLI and GUI versions. Uses the NBA API to display data on ongoing and completed games, including scores, team stats, and leaders in points, rebounds, and assists. Developed with Python, using libraries such as requests, pandas, and tkinter.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "requests",
        color: "purple-text-gradient",
      },
      {
        name: "pandas",
        color: "orange-text-gradient",
      },
      {
        name: "tkinter",
        color: "pink-text-gradient",
      }
    ],
    image: nbascores,
    source_code_link: "https://github.com/yourusername/nba-scoreboard-analysis",
  },
  {
    name: "Sorting Algorithms with Pygame",
    description: "An interactive graphical app for visualizing sorting algorithms like QuickSort, BubbleSort, InsertionSort, SelectionSort, and MergeSort. Uses pygame for interactive visualization and includes a Play/Pause feature with the spacebar.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pygame",
        color: "green-text-gradient",
      },
      {
        name: "sorting-algorithms",
        color: "red-text-gradient",
      }
    ],
    image: sortingalgs,
    source_code_link: "https://github.com/B-Timok/SideProjects/tree/main/pyProjects/sorting_anime",
  },
];

const socialMediaLinks = [
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/brandon-timok-589765253/",
    icon: linkedin, 
  },
  {
    id: "cv",
    title: "Resume",
    url: `${baseUrl}/BTimokResume24.pdf`,
    icon: cv,
  },
  {
    id: "githublink",
    title: "GitHub",
    url: "https://github.com/B-Timok",
    icon: githublink,
  },
];

export { services, technologies, experiences, projects, socialMediaLinks, };
