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
        image: "https://skillicons.dev/icons?i=react",
      },

      {
        name: "HTML",
        image: "https://skillicons.dev/icons?i=html",
      },
      {
        name: "CSS",
        image: "https://skillicons.dev/icons?i=css",
      },
      {
        name: "JavaScript",
        image: "https://skillicons.dev/icons?i=js",
      },
      {
        name: "Bootstrap",
        image: "https://skillicons.dev/icons?i=bootstrap",
      },
      {
        name: "Tailwind",
        image: "https://skillicons.dev/icons?i=tailwind",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://skillicons.dev/icons?i=nodejs",
      },
      {
        name: "Express Js",
        image: "https://skillicons.dev/icons?i=expressjs",
      },
      {
        name: "Python",
        image: "https://skillicons.dev/icons?i=python",
      },

      {
        name: "MySQL",
        image: "https://skillicons.dev/icons?i=mysql",
      },

      {
        name: "MongoDB",
        image: "https://skillicons.dev/icons?i=mongodb",
      },
      {
        name: "Firebase",
        image: "https://skillicons.dev/icons?i=firebase",
      },
    ],
  },

  {
    title: "Machine Learning",
    skills: [
      {
        name: "Python",
        image: "https://skillicons.dev/icons?i=python",
      },
      {
        name: "TensorFlow",
        image:
          "https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png",
      },
      {
        name: "Keras",
        image:
          "https://miro.medium.com/v2/resize:fit:600/1*DKu_54iqz6C-p6ndo7rO3g.png",
      },
      {
        name: "Jupyter",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png",
      },
      {
        name: "Kaggle",
        image:
          "https://firebasestorage.googleapis.com/v0/b/portfolio-8e3af.appspot.com/o/kaggle2.png?alt=media&token=754d9f1e-9b06-45ce-af37-a9b1b3c223b8",
      },
      // {
      //   name: "Google Colab",
      //   image:
      //     "https://assets.stickpng.com/images/63c2e4c9c4baad4ce22bf9ef.png",
      // },
      {
        name: "Sk Learn Kit",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png",
      },
      {
        name: "PyTorch",
        image: "https://skillicons.dev/icons?i=pytorch",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: "https://skillicons.dev/icons?i=git",
      },
      {
        name: "GitHub",
        image: "https://skillicons.dev/icons?i=github",
      },

      {
        name: "VS Code",
        image: "https://skillicons.dev/icons?i=vscode",
      },
      {
        name: "Postman",
        image: "https://skillicons.dev/icons?i=postman",
      },
      {
        name: "C",
        image: "https://skillicons.dev/icons?i=c",
      },
      {
        name: "C++",
        image: "https://skillicons.dev/icons?i=cpp",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-8e3af.appspot.com/o/ejust.png?alt=media&token=4cbd9858-4ac8-40dc-869b-bdce770125c0",
    role: "Teaching Assistant",
    company: "Egypt-Japan University of Science and Technology - E-JUST",
    date: "Apr 2024 - Present",
    desc: "In my part-time role as a Teaching Assistant (TA), I navigated the dynamic realm of computer science education with passion and purpose. Guiding students through intricate concepts, from debugging code to exploring algorithmic principles, I fostered an environment where learning thrived. Grading assignments was not just about assessment but about nurturing growth through personalized feedback, ensuring each student's journey was supported and enriched. As a TA, I embraced the opportunity to empower future tech leaders, one classroom session at a time.",
    skills: [
      "Collaboration",
      "Communication",
      "Adaptability",
      "Technical Support",
    ],
  },

  {
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-8e3af.appspot.com/o/digital_egypt_pioneers_initiative_depi_logo.jpg?alt=media&token=b600eb04-7184-4b49-a2ae-5116fb79fb11",
    role: "Generative AI Intern",
    company: "Digital Egypt Pioneers Initiative - DEPI",
    date: "Apr 2024 - Present",
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
    id: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-8e3af.appspot.com/o/NTI.jpg?alt=media&token=99036be3-9737-44c4-8c27-902d50552eb7",
    role: "Frontend Developer Intern",
    company: "NTI - National Telecommunication Institute",
    date: "Oct 2023 - Nov 2023",
    desc: "During this training, I gained practical experience with HTML5, CSS3, and JavaScript, specializing in developing responsive web pages that seamlessly adapt to different devices. Using Bootstrap, I enhanced interactivity and user-friendliness, solidifying my understanding of web development principles and responsive design techniques. This training equipped me with the skills needed to confidently undertake diverse web development projects.",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    id: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-8e3af.appspot.com/o/ALX.jpg?alt=media&token=4699135e-7825-4ac0-b0b8-b4e0e2567609",
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
    id: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-8e3af.appspot.com/o/smart_system_logo.jpg?alt=media&token=abdc8213-96bb-4658-bd43-35271621b738",
    role: "Software Engineer Intern",
    company: "Smart System - IT Company",
    date: "Jul 2022 - Sep 2022",
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
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-8e3af.appspot.com/o/ejust.png?alt=media&token=4cbd9858-4ac8-40dc-869b-bdce770125c0",
    school:
      "Egypt-Japan University of Science and Technology, Alexandria, Egypt",
    date: "Sep 2019 - Feb 2024",
    grade: " 3.02 / 4.00 GPA (Very Good)",
    desc: "I graduated from the Egypt-Japan University of Science and Technology (E-JUST) in Computer Science and Engineering (CSE) in 2024 have a GPA of 3.02 (VeryGood). I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
    degree: "Bachelor of Sciences - B.Sc, Computer Science and Engineering",
  },
  {
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-8e3af.appspot.com/o/victory_college-removebg-preview.png?alt=media&token=12af3636-acca-424c-8ab7-275aac8c0d62",
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
    id: 0,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
