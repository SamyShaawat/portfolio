import githubdetLogo from "../assets/work_logo/cm.png";
import csprepLogo from "../assets/work_logo/cs_prep.png";
import movierecLogo from "../assets/work_logo/movie_rec.png";
import taskremLogo from "../assets/work_logo/task_rem.png";
import npmLogo from "../assets/work_logo/npm.png";
import webverLogo from "../assets/work_logo/web_dig.png";
import cmLogo from "../assets/work_logo/cm.png";
import imagesearchLogo from "../assets/work_logo/image_search.png";
import removebgLogo from "../assets/work_logo/remove_bg.png";
export interface Skill {
  name: string;
  image: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface Experience {
  id: number;
  img: string;
  role: string;
  company: string;
  date: string;
  desc: string;
  skills: string[];
}

export interface Education {
  id: number;
  img: string;
  school: string;
  date: string;
  grade: string;
  desc: string;
  degree: string;
}

export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  webapp: string;
  member?: { img: string }[];
}

export interface BioType {
  name: string;
  roles: string[];
  description: string;
  github: string;
  resume: string;
  linkedin: string;
  twitter: string;
  insta: string;
  facebook: string;
  whatsapp: string;
  email: string;
}
export const Bio = {
  name: "Samy Mostafa",
  roles: [
    "Teaching Assistant at EJUST",
    "Odoo Developer",
    "Full Stack Engineer",
    "Web Developer",
    "Computer Engineer",
    "Programmer",
  ],
  description:
    "I graduated from the Egypt-Japan University of Science and Technology (E-JUST) in Computer Science and Engineering (CSE) in 2024, passionate about technology and innovation. With experience in Software Engineering, Web Development, Machine Learning, and Research, I've worked on impactful projects. I am excited to contribute to the tech industry's advancement.",
  github: "https://github.com/SamyShaawat",
  resume:
    "https://drive.google.com/file/d/1GgOxu1bm541_Ku9lUqDWfHPF9fRyq2o8/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/samyshaawat/",
  twitter: "https://twitter.com/SamyShaawat",
  insta: "https://www.instagram.com/samy_m0stafa/",
  facebook: "https://www.facebook.com/SamyM0stafa",
  whatsapp: "https://wa.me/201091539396",
  email: "mailto:samyshaawat@gmail.com",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image: "/img/skills/react.svg",
      },

      {
        name: "HTML",
        image: "/img/skills/html.svg",
      },
      {
        name: "CSS",
        image: "/img/skills/css.svg",
      },
      {
        name: "JavaScript",
        image: "/img/skills/js.svg",
      },
      {
        name: "TypeScript",
        image: "/img/skills/typescript.svg",
      },
      {
        name: "Bootstrap",
        image: "/img/skills/bootstrap.svg",
      },
      {
        name: "Tailwind",
        image: "/img/skills/tailwind.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "/img/skills/nodejs.svg",
      },
      {
        name: "Express Js",
        image: "/img/skills/expressjs.svg",
      },
      {
        name: "NestJS",
        image: "/img/skills/nestjs.svg",
      },
      {
        name: "Python",
        image: "/img/skills/python.svg",
      },

      {
        name: "MySQL",
        image: "/img/skills/mysql.svg",
      },
      {
        name: "PostgreSQL",
        image: "/img/skills/postgresql.svg",
      },
      {
        name: "Prisma",
        image: "/img/skills/prisma.svg",
      },
      {
        name: "Odoo",
        image: "/img/skills/odoo.svg",
      },
      {
        name: "SQLite",
        image: "/img/skills/sqlite.svg",
      },

      {
        name: "MongoDB",
        image: "/img/skills/mongodb.svg",
      },
      {
        name: "Firebase",
        image: "/img/skills/firebase.svg",
      },
    ],
  },

  {
    title: "Machine Learning",
    skills: [
      {
        name: "Python",
        image: "/img/skills/python.svg",
      },
      {
        name: "TensorFlow",
        image:
          "/img/skills/tensorflow.svg",
      },
      {
        name: "Keras",
        image:
          "/img/skills/keras.svg",
      },
      {
        name: "Jupyter",
        image:
          "/img/skills/jupyter.svg",
      },
      {
        name: "Kaggle",
        image:
          "/img/logos/kaggle2.png",
      },
      // {
      //   name: "Google Colab",
      //   image:
      //     "https://assets.stickpng.com/images/63c2e4c9c4baad4ce22bf9ef.png",
      // },
      {
        name: "Sk Learn Kit",
        image:
          "/img/skills/sklearn.svg",
      },
      {
        name: "Pandas",
        image: "/img/skills/pandas.svg",
      },
      {
        name: "PyTorch",
        image: "/img/skills/pytorch.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: "/img/skills/git.svg",
      },
      {
        name: "GitHub",
        image: "/img/skills/github.svg",
      },

      {
        name: "VS Code",
        image: "/img/skills/vscode.svg",
      },
      {
        name: "Postman",
        image: "/img/skills/postman.svg",
      },
      {
        name: "Linux",
        image: "/img/skills/linux.svg",
      },
      {
        name: "C",
        image: "/img/skills/c.svg",
      },
      {
        name: "C++",
        image: "/img/skills/cpp.svg",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "/img/logos/ejust.png",
    role: "Teaching Assistant (Full-time)",
    company: "Egypt-Japan University of Science and Technology - E-JUST",
    date: "Oct 2025 - Present",
    desc: "Full-time Teaching Assistant at E-JUST, supporting computer science courses by guiding students, running labs and tutorials, and grading assignments with personalized feedback.",
    skills: ["Collaboration", "Communication", "Teaching", "Technical Support"],
  },
  {
    id: 1,
    img: "/img/logos/gamiviz.jpeg",
    role: "Full Stack Engineer",
    company: "Gamivize",
    date: "Oct 2025 - Aug 2026",
    desc: "Worked as a Full Stack Engineer at Gamivize, building and maintaining web application features across the frontend and backend.",
    skills: ["Full Stack Development", "Software Development", "Prisma ORM"],
  },
  {
    id: 2,
    img: "/img/logos/diwan.jpeg",
    role: "Odoo Developer",
    company: "Diwan for Scientific Solutions",
    date: "Aug 2025 - Present",
    desc: "Developing and customizing Odoo modules for business clients at Diwan for Scientific Solutions, after starting there as an Odoo Developer Intern.",
    skills: ["Odoo", "Python", "PostgreSQL", "CRM"],
  },
  {
    id: 3,
    img: "/img/logos/diwan.jpeg",
    role: "Odoo Developer Intern",
    company: "Diwan for Scientific Solutions",
    date: "Mar 2025 - Jul 2025",
    desc: "Internship focused on Odoo development at Diwan for Scientific Solutions, which led to a full-time Odoo Developer role.",
    skills: ["Odoo", "Python", "PostgreSQL"],
  },
  {
    id: 4,
    img: "/img/logos/route.jpeg",
    role: "Backend Developer Trainee",
    company: "Route",
    date: "Oct 2024 - Mar 2025",
    desc: "Backend development training at Route, covering server-side programming, APIs and databases.",
    skills: ["Backend Development", "Node Js", "Databases"],
  },
  {
    id: 5,
    img: "/img/logos/itida.jpeg",
    role: "Cyber Security Trainee",
    company: "ITIDA - Information Technology Industry Development Agency",
    date: "Jul 2024 - Aug 2024",
    desc: "Cyber security training program run by the Information Technology Industry Development Agency (ITIDA).",
    skills: ["Cyber Security"],
  },
  {
    id: 6,
    img: "/img/Samy%20Shaawat.png",
    role: "Web Developer",
    company: "Freelancer - Self employed",
    date: "Apr 2024 - Nov 2024",
    desc: "Worked as a self-employed web developer, building websites and web applications for clients.",
    skills: ["Web Development", "React Js", "JavaScript"],
  },
  {
    id: 7,
    img: "/img/logos/ejust.png",
    role: "Teaching Assistant (Part-time)",
    company: "Egypt-Japan University of Science and Technology - E-JUST",
    date: "Apr 2024 - Sep 2025",
    desc: "In my part-time role as a Teaching Assistant (TA), I navigated the dynamic realm of computer science education with passion and purpose. Guiding students through intricate concepts, from debugging code to exploring algorithmic principles, I fostered an environment where learning thrived. Grading assignments was not just about assessment but about nurturing growth through personalized feedback, ensuring each student's journey was supported and enriched. As a TA, I embraced the opportunity to empower future tech leaders, one classroom session at a time.",
    skills: [
      "Collaboration",
      "Communication",
      "Adaptability",
      "Technical Support",
    ],
  },

  {
    id: 8,
    img: "/img/logos/digital_egypt_pioneers_initiative_depi_logo.jpg",
    role: "Machine Learning Trainee",
    company: "Digital Egypt Pioneers Initiative - DEPI",
    date: "Apr 2024 - Oct 2024",
    desc: "In this training, I dove into machine learning, deep learning, and generative AI models. I learned to use tools like MLflow and Hugging Face for managing machine learning operations. Hands-on projects included building Generative Adversarial Networks (GANs) and working with attention models for natural language processing. It was a practical journey that deepened my understanding and skills in cutting-edge data science techniques.",
    skills: [
      "Generative Neural Networks",
      "TensorFlow",
      "Machine Learning",
      "Deep Learning",
      "Neural Networks and Deep Learning",
      "Kaggle",
      "Keras",
    ],
  },
  {
    id: 9,
    img: "/img/logos/NTI.jpg",
    role: "Frontend Developer Intern",
    company: "NTI - National Telecommunication Institute",
    date: "Oct 2023 - Nov 2023",
    desc: "During this training, I gained practical experience with HTML5, CSS3, and JavaScript, specializing in developing responsive web pages that seamlessly adapt to different devices. Using Bootstrap, I enhanced interactivity and user-friendliness, solidifying my understanding of web development principles and responsive design techniques. This training equipped me with the skills needed to confidently undertake diverse web development projects.",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    id: 10,
    img: "/img/logos/ALX.jpg",
    role: "Machine Learning Intern",
    company:
      "Summer Training at Alexandria University - Under Supervision of Prof. Marwan Torki",
    date: "Jul 2023 - Sep 2023",
    desc: "During this internship, I completed the Deep Learning Specialization on Coursera, mastering fundamental concepts, neural networks, and practical machine learning applications across five comprehensive courses. Additionally, I applied this knowledge in the Ultrasound Nerve Segmentation competition on Kaggle, successfully identifying nerve structures in ultrasound images of the neck. This experience not only enhanced my deep learning skills but also demonstrated my ability to solve real-world medical imaging challenges, showcasing proficiency in both learning and applying advanced AI techniques.",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Kaggle",
      "Keras",
      "Machine Learning",
      "Deep Learning",
    ],
  },
  {
    id: 11,
    img: "/img/logos/smart_system_logo.jpg",
    role: "Software Engineer Intern",
    company: "Smart System - IT Company",
    date: "Jul 2022 - Oct 2022",
    desc: "During this internship, I gained hands-on expertise in designing Entity-Relationship Diagrams (ERD) using IBM Cognos Framework Manager, implementing IBM Maximo for Enterprise Asset Management (EAM), and crafting SQL-based queries with IBM Cognos Analytics 11.0. I contributed to the HCWW project by developing analytics reports that enhanced operational efficiencies and provided actionable insights, showcasing my ability to apply theoretical knowledge to real-world challenges in data management and analytics.",
    skills: [
      "IBM Cognos Analytics",
      "IBM Maximo",
      "Database Management",
      "SQL",
      "Entity-Relationship Diagrams - ERD",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "/img/logos/ejust.png",
    school:
      "Egypt-Japan University of Science and Technology, Alexandria, Egypt",
    date: "Sep 2025 - Present",
    grade: " In progress",
    desc: "Master's studies in Computer Science and Engineering at the Egypt-Japan University of Science and Technology (E-JUST).",
    degree: "Master's degree, Computer Science and Engineering",
  },
  {
    id: 1,
    img: "/img/logos/ejust.png",
    school:
      "Egypt-Japan University of Science and Technology, Alexandria, Egypt",
    date: "Sep 2019 - Feb 2024",
    grade: " 3.02 / 4.00 GPA (Very Good)",
    desc: "I graduated from the Egypt-Japan University of Science and Technology (E-JUST) in Computer Science and Engineering (CSE) in 2024 have a GPA of 3.02 (VeryGood). I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
    degree: "Bachelor of Sciences - B.Sc, Computer Science and Engineering",
  },
  {
    id: 2,
    img: "/img/logos/victory_college-removebg-preview.png",
    school: "Victoria College, Alexandria, Egypt",
    date: "Sep 2005 - Aug 2019",
    grade: " 93.9%",
    desc: "I completed my high school education at Victoria College in Alexandria, Egypt, where I concentrated on Mathematics, finishing my entire school journey at this school. I graduated with grade of 93.9%.",
    degree:
      "General Certificate of Secondary Education -GCSE, Mathematics Division",
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];

export const projects = [
  {
    id: 1,
    title: "GitHub Profile Detective",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github:
      "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    webapp: "https://githubprofiledetective.netlify.app/",
    date: "Jan 2024",
    category: "Web App",
  },
  {
    id: 2,
    title: "CS Prep",
    description:
      "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests.",
    image: csprepLogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://csprep.netlify.app/",
    date: "Feb 2024",
    category: "EdTech",
  },
  {
    id: 3,
    title: "Movie Recommendation App",
    description:
      "A React-based web app that provides movie recommendations based on genres, user preferences, and popular trends.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
    date: "Dec 2023",
    category: "Entertainment",
  },
  {
    id: 4,
    title: "Email Validator NPM Package",
    description:
      "An efficient and customizable NPM package for validating email addresses, built using React.js and Node.js.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/codingmastr/cmtk-email-validator",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    date: "Nov 2023",
    category: "Developer Tools",
  },
  {
    id: 5,
    title: "Task Reminder Chrome Extension Tool",
    description:
      "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks.",
    image: taskremLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/codingmastr/Task-Reminder-Tool",
    webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    date: "Oct 2023",
    category: "Productivity",
  },
  {
    id: 6,
    title: "Webverse Digital",
    description:
      "The official website for Webverse Digital, a creative digital marketing agency, featuring clean design and animations.",
    image: webverLogo,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/codingmastr/Webverse-Digital",
    webapp: "https://webversedigital.com/",
    date: "Sep 2023",
    category: "Company Website",
  },
  {
    id: 7,
    title: "Coding Master",
    description:
      "An ed-tech platform offering tech blogs, notes, interview questions, and premium content with payment integration.",
    image: cmLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    github: "https://codingmasterweb.in/",
    webapp: "https://codingmasterweb.in/",
    date: "Aug 2023",
    category: "EdTech",
  },
  {
    id: 8,
    title: "Image Search App",
    description:
      "A React.js-based image search app that lets users find and download high-quality images from the web using APIs.",
    image: imagesearchLogo,
    tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Search-App",
    webapp: "https://imagsearch.netlify.app/",
    date: "Jul 2023",
    category: "WEB APP'S",
  },
  {
    id: 9,
    title: "Image Background Remover",
    description:
      "An image processing app that allows users to remove image backgrounds and download transparent versions.",
    image: removebgLogo,
    tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Background-Remover",
    webapp: "https://removeyourbg.netlify.app/",
    date: "Jun 2023",
    category: "WEB APP'S",
  },
];

export const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  // { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];
