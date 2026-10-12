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
  threads: string;
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
  twitter: "https://x.com/Samy_M0stafa",
  threads: "https://www.threads.com/@samyshaawat",
  insta: "https://www.instagram.com/samyshaawat/",
  facebook: "https://www.facebook.com/samyshaawat/",
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
        image: "/img/skills/tensorflow.svg",
      },
      {
        name: "Keras",
        image: "/img/skills/keras.svg",
      },
      {
        name: "Jupyter",
        image: "/img/skills/jupyter.svg",
      },
      {
        name: "Kaggle",
        image: "/img/logos/kaggle2.png",
      },
      // {
      //   name: "Google Colab",
      //   image:
      //     "https://assets.stickpng.com/images/63c2e4c9c4baad4ce22bf9ef.png",
      // },
      {
        name: "Sk Learn Kit",
        image: "/img/skills/sklearn.svg",
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
      {
        name: "LaTeX",
        image: "/img/skills/latex.svg",
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
    skills: ["Prisma", "NestJS", "TypeScript", "React Js", "PostgreSQL"],
  },
  {
    id: 2,
    img: "/img/logos/diwan.jpeg",
    role: "Odoo Developer",
    company: "Diwan for Scientific Solutions",
    date: "Aug 2025 - Present",
    desc: "Developing and customizing Odoo modules for business clients at Diwan for Scientific Solutions, after starting there as an Odoo Developer Intern.",
    skills: ["Odoo", "Python", "OOP", "XML", "Odoo OWL"],
  },
  {
    id: 3,
    img: "/img/logos/diwan.jpeg",
    role: "Odoo Developer Intern",
    company: "Diwan for Scientific Solutions",
    date: "Mar 2025 - Jul 2025",
    desc: "Internship focused on Odoo development at Diwan for Scientific Solutions, which led to a full-time Odoo Developer role.",
    skills: ["Odoo", "Python", "OOP", "XML", "Odoo OWL"],
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
    img: "/img/logos/self-emplyed.jpeg",
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
    title: "FlowDesk",
    description:
      "Custom Odoo 19 module built from real client needs. It covers business operations from lead to paid invoice across CRM, Sales, Purchase, Inventory, Accounting, HR, Helpdesk and Fleet.",
    image: "/img/projects/flowdesk.png",
    tags: ["Odoo 19", "Python", "XML", "OOP"],
    github: "https://github.com/SamyShaawat/flowdesk",
    webapp: "",
    date: "Jul 2026",
    category: "Odoo Modules",
  },
  {
    id: 2,
    title: "Hospital Management System",
    description:
      "A custom Odoo module for managing hospital operations, including patient records, appointments, and medical history.",
    image: "/img/projects/my_hospital.png",
    tags: ["Odoo", "Python", "XML", "OOP"],
    github: "https://github.com/SamyShaawat/my_hospital",
    webapp: "",
    date: "Aug 2025",
    category: "Odoo Modules",
  },
  {
    id: 3,
    title: "CuraLink Dashboard",
    description:
      "A modern, responsive React application that provides a clean and intuitive interface for a healthcare network management system.",
    image: "/img/projects/curalink.png",
    tags: ["React JS", "TypeScript", "Dashboard"],
    github: "https://github.com/SamyShaawat/curalink",
    webapp: "https://samyshaawat.github.io/curalink/",
    date: "Mar 2026",
    category: "Web App",
  },
  {
    id: 4,
    title: "Class Tracker",
    description:
      "A simple and responsive Student List application built with React and TypeScript. Easily manage and display student records with a clean UI and modular code structure.",
    image: "/img/projects/Class-Tracker.png",
    tags: ["React JS", "TypeScript"],
    github: "https://github.com/SamyShaawat/Class-Tracker",
    webapp: "",
    date: "May 2025",
    category: "Web App",
  },
  {
    id: 5,
    title: "BCME - Marine Electronics Platform",
    description:
      "Platform for BC Marine Electronics Inc., providing GMDSS & NAVCOM services for the maritime industry, as required by ships' classification societies, recognized organizations, and flag states.",
    image: "/img/projects/BCME.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SamyShaawat/BCME",
    webapp: "https://www.img-bcme.com/",
    date: "Mar 2024",
    category: "Company Website",
  },
  {
    id: 6,
    title: "Nofa Egypt",
    description:
      "Website for Nofa Egypt, a wood flooring company founded in 1950 in Downtown Alexandria that emphasizes the artistry of wood flooring.",
    image: "/img/projects/Nofa-Egypt.png",
    tags: ["JavaScript", "Web Development"],
    github: "https://github.com/SamyShaawat/Nofa-Egypt",
    webapp: "https://nofaegypt.rowad.com/",
    date: "Jul 2024",
    category: "Company Website",
  },
  {
    id: 7,
    title: "URL Phishing Detection Using LLaMA-2",
    description:
      "A URL phishing detection model built on Meta AI's LLaMA-2 large language model, identifying malicious links disguised as legitimate websites.",
    image: "/img/projects/URL-Phishing-Detection-Using-LLaMA-2.png",
    tags: ["Python", "LLaMA-2", "Machine Learning", "Jupyter"],
    github:
      "https://github.com/SamyShaawat/URL-Phishing-Detection-Using-LLaMA-2",
    webapp: "",
    date: "Dec 2023",
    category: "Machine Learning",
  },
  {
    id: 8,
    title: "Network Analysis of the Egyptian Reddit Community",
    description:
      "Analyzes the network structure and dynamics of Reddit users who follow Egyptian subreddits, using a network built from 23,185 usernames and 105 subreddits.",
    image:
      "/img/projects/Network-Analysis-of-the-Egyptian-Reddit-Community.png",
    tags: ["Python", "Network Analysis", "Data Science", "Jupyter"],
    github:
      "https://github.com/SamyShaawat/Network-Analysis-of-the-Egyptian-Reddit-Community",
    webapp: "",
    date: "May 2023",
    category: "Machine Learning",
  },
  {
    id: 9,
    title: "Saraha - Anonymous Messaging",
    description:
      "An anonymous messaging platform for honest feedback and private communication. Full-stack Nx monorepo with NestJS, React, Prisma and PostgreSQL.",
    image: "/img/projects/Saraha.png",
    tags: ["NestJS", "React JS", "Prisma", "PostgreSQL", "Nx"],
    github: "https://github.com/SamyShaawat/Saraha",
    webapp: "",
    date: "Apr 2026",
    category: "Web App",
  },
  {
    id: 10,
    title: "Intertek Group Website",
    description:
      "Website for Intertek Group, built in an Nx workspace with TypeScript.",
    image: "/img/projects/Intertek.png",
    tags: ["TypeScript", "Nx", "React JS"],
    github: "https://github.com/SamyShaawat/Intertek",
    webapp: "https://intertekgroup.org/",
    date: "Jun 2026",
    category: "Company Website",
  },
  {
    id: 11,
    title: "Rowad for Software Development",
    description:
      "Website for Rowad Tech Company, which offers reliable and secure website hosting, development and deployment of responsive websites, and digital marketing strategies.",
    image: "/img/projects/rowad-for-software-development.png",
    tags: ["TypeScript", "Web Development"],
    github: "https://github.com/SamyShaawat/rowad-for-software-development",
    webapp: "https://rowad.com/",
    date: "Jun 2024",
    category: "Company Website",
  },
  {
    id: 12,
    title: "ClassCraft - Education Management",
    description:
      "An Odoo module for schools and training centers, covering enrollment to graduation in one place. Built from practice tasks written like real client requests.",
    image: "/img/projects/classcraft.png",
    tags: ["Odoo", "Python", "XML", "OOP"],
    github: "https://github.com/SamyShaawat/classcraft",
    webapp: "",
    date: "Jul 2026",
    category: "Odoo Modules",
  },
  {
    id: 13,
    title: "CarePulse - Clinic Management",
    description:
      "An Odoo module for clinics and hospitals, from patient to payment. Built from practice tasks written like real client requests.",
    image: "/img/projects/carepulse.png",
    tags: ["Odoo", "Python", "XML", "OOP"],
    github: "https://github.com/SamyShaawat/carepulse",
    webapp: "",
    date: "Jul 2026",
    category: "Odoo Modules",
  },
  {
    id: 14,
    title: "KeyNest - Real Estate Management",
    description:
      "An Odoo module for real estate agencies, from listing to closed deal. Built from practice tasks written like real client requests.",
    image: "/img/projects/keynest.png",
    tags: ["Odoo", "Python", "XML", "OOP"],
    github: "https://github.com/SamyShaawat/keynest",
    webapp: "",
    date: "Jul 2026",
    category: "Odoo Modules",
  },
  {
    id: 15,
    title: "Optical Shop Management System",
    description: "An optical shop management system built with Python.",
    image: "/img/projects/Optical-Shop-Management-System.png",
    tags: ["Python"],
    github: "https://github.com/SamyShaawat/Optical-Shop-Management-System",
    webapp: "",
    date: "Jun 2024",
    category: "Desktop App",
  },
  {
    id: 16,
    title: "Pharmacy Management System",
    description:
      "A pharmacy management system built with Python and a Tkinter GUI.",
    image: "/img/projects/Pharmacy-Management-System.png",
    tags: ["Python", "Tkinter"],
    github: "https://github.com/SamyShaawat/Pharmacy-Management-System",
    webapp: "",
    date: "Dec 2022",
    category: "Desktop App",
  },
];

export const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];
