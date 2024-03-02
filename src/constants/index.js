import {
    javascript,html,css,reactjs,
    hf,bny,holopin,
    crypto,oop,yml,crud,dwld,onetomany,
    trie,ds,cg,
    port_3d, jsp, chitchat, notes, react1,
    be,sql, mini, snl
  } from "../assets";
  import ItalianPasta from "../assets/project/ItalianPasta.png"  
  import malichimp from "../assets/project/malichimp.png"
  import menzila from "../assets/project/menzila.png"
  import weather from "../assets/project/weather.png"
  import Quoto from "../assets/project/Q.png"
  import expense from "../assets/project/Expense.png"
  import jimdo from "../assets/project/jimdo.png"
  import task from "../assets/project/Task.png"
  import cryptomania from "../assets/project/CryptoMania.png"
  import material from "../assets/tech/material.png"
  import clg from "../assets/clg2.png"
  import school from "../assets/Schl.png"
  import github from "../assets/tech/github.svg"
  const profiles = [
    {
      link: "https://auth.geeksforgeeks.org/user/aarti_rathi",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
    },
    {
      link: "https://www.coursera.org/account/accomplishments/specialization/7V2SFZ9YWWRL",
      icon: "https://img.icons8.com/fluency/344/google-cloud.png",
    },
    {
      link: "https://www.qwiklabs.com/public_profiles/48dcd029-03b4-437b-9dd3-ef7d65958eb0",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-qwiklabs-provides-real-cloud-environments-that-help-developers-logo-color-tal-revivo.png",
    },
    {
      link: "https://www.hackerrank.com/_shinchancode",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
    },
    {
      link:"https://dev.to/shinchancode",
      icon: hf,
    },
    {
      link:"https://www.holopin.io/@shinchancode#badges",
      icon: holopin,
    },
  ];

  const achievements = [
    {
      title: "8th Position : Selected for the final round of 12th CSI InApp International Student Project awards 2023.",
    },
    {
      title: "Twice State level Table-Tennis Winner (2021 and 2022)",
    },
    {
      title: "1st Position : Consecutive four times Winner of UdChalo Scholarship (2019 - 2023)",
    },
    {
      title: "Branch Head of Information Technology Department (2021 - 2022)",
    },
    {
      title: "Selected in top 100 candidates for Google Cloud Training among 20k Students.",
    },
    {
      title: "Got Education Scholarship Scheme for Army Personnel(ESSA) Scholarship (2015 - 2023)",
    },
    {
      title: "Played Nationals in Throwball for U-14 category. (2015)",
    },
  ]
  
  const technologies = [
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
      name:"Bootstrap",
      icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Material CSS",
      icon: material,
    },
    {
      name: "GitHub",
      icon: github,
    },
  ];

  const list = [
    {
      id: "HTML & CSS",
      title: "HTML & CSS",
    },
    {
      id: "Java Script",
      title: "Java Script",
    },
    {
      id: "ReactJS",
      title: "ReactJS",
    },
  ];

  export const HTMLCSSProject = [
    {
      name: "Italian Pasta UI",
      description:
      "The Italian Pasta card UI project has been created using HTML and CSS. This project is responsive, meaning it can be easily viewed on different devices. It features a beautiful Italian Pasta card with a simple and attractive design.",
      tags: [
        {
          name: "Italian Pasta UI",
          color: "blue-text-gradient",
        },
        // {
        //   name: "security",
        //   color: "green-text-gradient",
        // },
        {
          name: "HTML & CSS",
          color: "pink-text-gradient",
        },
      ],
      image: ItalianPasta,
      // source_link: "https://chitranshi17.github.io/Italian-Pasta/",
      source_code_link: "https://chitranshi17.github.io/Italian-Pasta/",
    },
    {
      name: "Mailchimp",
      description:
        "The Mailchimp UI is built with HTML and CSS, offering a responsive design that adjusts to different devices. It's user-friendly, accessible, and ensures a smooth experience on desktops, tablets, and mobiles, making it a great example of modern web design.",
      tags: [
        {
          name: "Mailchimp",
          color: "blue-text-gradient",
        },
        {
          name: "HTML & CSS",
          color: "pink-text-gradient",
        },
      ],
      image: malichimp,
      // source_link: "https://github.com/shinchancode/Snake-Yaml-Project",
      source_code_link: "https://chitranshi17.github.io/Mailchimp/",
    },
    {
      name: "JIMDO",
      description:
        "The Jimdo UI is designed with HTML and CSS, making the website work well on all devices like laptops, tablets, and phones. It's simple to use, so you can easily find what you're looking for. This makes visiting the website a smooth and nice experience.",
      tags: [
        {
          name: "JIMDO",
          color: "blue-text-gradient",
        },
        // {
        //   name: "springboot",
        //   color: "green-text-gradient",
        // },
        {
          name: "HTML & CSS",
          color: "pink-text-gradient",
        },
      ],
      image: jimdo,
      // source_link: "https://github.com/shinchancode/CRUD-Operation",
      source_code_link: "https://chitranshi17.github.io/Jimdo/",
    },
  ];
  
  export const ReactJSProject = [
    {
      name: "Expense Tracker",
      description:
        "I've built an expense tracker using React JS and Context API, which keeps track of our income and expenses. The website is responsive across various devices, utilizing CSS and Bootstrap for its design. ",
      tags: [
        {
          name: "Expense Tracker",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "ReactJS",
          color: "pink-text-gradient",
        },
        {
          name: "ReactJS Context",
          color: "pink-text-gradient",
        },
      ],
      image: expense,
      // source_link: "https://github.com/shinchancode/Data-Structure-Algorithms",
      source_code_link: "https://expense-tracker-blush-five.vercel.app/",
    },
    {
      name: "Task Tracker",
      description:
        "I made a Todo app using React JS, where you can easily add, remove, or change tasks. It looks good on any device thanks to CSS and Bootstrap, and you can switch between light and dark mode. It's simple to use and works well.",
      tags: [
        {
          name: "Task Traker",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "ReactJS",
          color: "pink-text-gradient",
        },
      ],
      image: task,
      // source_link: "https://github.com/shinchancode/Data-Structure-Algorithms",
      source_code_link: "https://task-peach-mu.vercel.app/",
    },
    {
      name: "CryptoMania",
      description:
        "I created a crypto app called Cryptomania using React JS and Redux. It shows trending coins, all coins, lets you search for coins, and displays individual coin data with graphs. The app is built with Bootstrap, CSS, and Material UI.",
      tags: [
        {
          name: "CryptoMania",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "green-text-gradient",
        },
        {
          name: "ReactJS",
          color: "pink-text-gradient",
        },
      ],
      image: cryptomania,
      // source_link: "https://github.com/shinchancode/Data-Structure-Algorithms",
      source_code_link: "https://crypto-website-ivory.vercel.app/",
    },
    {
      name: "MenZila",
      description:
        "Menzila is an online clothing shop built with HTML, CSS, JavaScript, and ReactJS, featuring a responsive layout for all devices. It uses React's Context API for data management and an API to display the latest products.",
      tags: [
        {
          name: "MenZila E-commerce",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "ReactJS",
          color: "pink-text-gradient",
        },
      ],
      image: menzila,
      // source_link: "https://github.com/shinchancode/Data-Structure-Algorithms",
      source_code_link: "https://vercel.com/chitranshi17s-projects",
    },
    
  ];
  
  export const JavaScriptProject = [
    {
      name: "Quotation App",
      description:
        "I have developed a responsive quotation app using HTML, CSS, and JavaScript, integrating an API to dynamically fetch and display random quotes. The user interface is designed with a combination of custom CSS and Bootstrap.",
      tags: [
        {
          name: "Quotation App",
          color: "blue-text-gradient",
        },
        {
          name: "HTML5",
          color: "green-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: Quoto,
      // source_link: "https://shinchancode.github.io/3d-react-portfolio/",
      source_code_link: "https://chitranshi17.github.io/Quotation-App/",
    },
    {
      name: "Weather App",
      description:
        "I've crafted a responsive weather app using HTML, CSS, and JavaScript that fetches real-time weather data from an API. This user-friendly application provides instant weather updates with a sleek design.",
      tags: [
        {
          name: "Weather App",
          color: "blue-text-gradient",
        },
        {
          name: "HTML5 & CSS3",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
      ],
      image: weather,
      // source_link: "https://shinchancode.github.io/React-Portfolio/",
      source_code_link: "https://chitranshi17.github.io/Weather-App/",
    },
    // {
    //   name: "30 Days of JavaScript",
    //   description:
    //     "Website made using Nodejs and Express in the BackEnd. A 30 Days Of JavaScript challenge to learn JavaScript by making 30 different projects using some famous JavaScript libraries.",
    //   tags: [
    //     {
    //       name: "JavaScript",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "30dayschallenge",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: jsp,
    //   source_link: "https://rathi-30-days-of-javascript.onrender.com/",
    //   source_code_link: "https://github.com/shinchancode/30-Days-of-Javascript",
    // },
    // {
    //   name: "Chit Chat Application",
    //   description:
    //     "Real-Time, event based communication in Nodejs and browser-based Chat application. Uses Socket.io for implementation for WebSockets protocol. This application built using Node.js, Express, Socket.io and Render (Hosting)",
    //   tags: [
    //     {
    //       name: "Chatting",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "socket.io",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "JavaScript",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: chitchat,
    //   source_link: "https://chit-chat-app.onrender.com/",
    //   source_code_link: "https://github.com/shinchancode/Chit-Chat-Real_time_chat_app",
    // },
    // {
    //   name: "Notes Application",
    //   description:
    //     "A web-based notes app made by using javaScript, This web-based notes app having functionalities like Drag and drop, Search notes etc.",
    //   tags: [
    //     {
    //       name: "notes",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "bootstrap",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: notes,
    //   source_link: "https://shinchancode.github.io/Notes-App/",
    //   source_code_link: "https://github.com/shinchancode/Notes-App",
    // },
  ];
  
  const experiences = [
    {
      title: "Software Devloper",
      company_name: "Bank of New York Mellon",
      icon: bny,
      iconBg: "#383E56",
      date: "Aug 2023 - Present",
      link: "",
      points: [
        "Software build is now used internally in the company and by the company’s clients for operating Netx360 and Netx360+.",
        "Resolved more than 50+ Software Composition Analysis (SCA) and vulnerabilities issues.",
        "Adapted Agile methodologies, CI/CD, and Test-Driven Programming to uphold strong programming practices.",
        "Using technologies like Java, SpringBoot, C#, .NET and AngularJS.",
      ],
      link: "https://drive.google.com/drive/folders/13FK-YewFDv8ALmzKglPBmb6Z3oenuYoP",
    },
    // {
    //   title: "Research Intern",
    //   company_name: "National Security Council Secretriat",
    //   icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-national-security-agency-crowdfunding-flaticons-lineal-color-flat-icons-2.png",
    //   iconBg: "#383E56",
    //   date: "Mar 2022 - Oct 2023",
    //   link: "",
    //   points: [
    //     "Creating a system for secure fine-grained next-generation access control and authorization of digital assets and operations using policy based cryptosystem.",
    //     "Collaborating with cross-functional technologies like spring boot, react etc. to integrate high-quality products.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    //   link: "https://github.com/codewithrathi",
    // },
    // {
    //   title: "DSA Mentor",
    //   company_name: "GeeksforGeeks (Intern)",
    //   icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
    //   iconBg: "#E6DEDD",
    //   date: "May 2022 - Apr 2023",
    //   link: "",
    //   points: [
    //     "Teaching Assistant : Teaching Assistant for online batches of Data Structures, Algorithms, and Competitive programming with an average rating of 4.9*.",
    //     "Responsible for reviewing and writing articles based on Data Structures and Algorithms.",
    //   ],
    //   link: "https://drive.google.com/drive/folders/1efpnfKpRTvtujtSgHwRIJdrMFiWrBFHt",
    // },
    // {
    //   title: "Technical Content Writer",
    //   company_name: "GeeksforGeeks",
    //   icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
    //   iconBg: "#383E56",
    //   date: "Dec 2020 - July 2022",
    //   link: "",
    //   points: [
    //     "Creative and experienced content writer with 2+ years of experience.",
    //     "Attracted over 10000+ visitors to the company website with powerful educational content.",
    //     "Wrote 100+ articles and improved 300+ articles on topics like Data Structures, Algorithms, Mathematics and related engineering topics",
    //   ],
    //   link: "https://auth.geeksforgeeks.org/user/_shinchancode",
    // },
    // {
    //   title: "Google Cloud Training",
    //   company_name: "Google Cloud",
    //   icon: "https://img.icons8.com/fluency/344/google-cloud.png",
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Apr 2021",
    //   link: "",
    //   points: [
    //     "Introduction to GCP and more functionalities with free access to quests, skill badges.",
    //     "Collaborating with cross-functional technologies.",
    //     "Got introduced to Computing, Application Development, Big Data and Machine Learning using Google Cloud's on training platform Qwiklabs",
    //     "Additional self-paced labs were provided to practice on Qwiklabs a platform by Google",
    //   ],
    //   link: "https://www.cloudskillsboost.google/public_profiles/48dcd029-03b4-437b-9dd3-ef7d65958eb0",
    // },
    // {
    //   title: "Hacktoberfest",
    //   company_name: "GitHub",
    //   icon: hf,
    //   iconBg: "#E6DEDD",
    //   date: "Oct (2020 - 2022)",
    //   link: "",
    //   points: [
    //     "Hacktoberfest is an annual worldwide event held during the month of October. The event encourages open source developers to contribute to repositories through pull requests (PR).",
    //     "GitHub hosts many open source repositories that contribute to this event.",
    //   ],
    //   link: "https://dev.to/shinchancode",
    // },
  ];
  
  const educations = [
    {
      degree: "Bachelor of Technology",
      branch:
        "Computer Science",
      marks:
        "CGPA : 8.48 / 10",
      name: "Shri Yogindra Sagar Institute of Technology & Science",
      year: "(2019 - 2023)",
      image: clg,
    },
    {
      degree:
        "12th Grade",
      branch : "Science",
      marks:
        "Percentage : 75 %",
      name: "Govt. School of Excellence Ratlam",
      year: "2018",
      image: school,
    },
    {
      degree:
        "10th Grade",
      branch: "SSC",
      marks:
        "Percentage : 95 %",
      name: "Kendriya Vidyalaya RHE Khadki Pune",
      year: "2016",
      image: school,
    },
  ];
  
  export { list, profiles, technologies, experiences, educations, achievements };


  