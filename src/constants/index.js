const navLinks = [
  // {
  //   name: "Work",
  //   link: "#work",
  // },
  {
    name: "Experience",
    link: "#experience",
  },
  {name: "About",
    link: "#about"
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Plan", imgPath: "/3d-portfolio/images/ideas.svg" },
  { text: "Design", imgPath: "/3d-portfolio/images/designs.svg" },
  { text: "Code", imgPath: "/3d-portfolio//images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const hobbyIcons = [
  {
    name: "Running",
    modelPath: "/3d-portfolio/models/nike-shoe.glb",
    scale: .03,
    rotation: [0, 0, 0],
  },
  {
    name: "Surfing",
    modelPath: "/3d-portfolio/models/surfboard3.glb",
    scale: 1.4,
    rotation: [6, -Math.PI/7, 5],
  },
  // {
  //   name: "Backend Developer",
  //   modelPath: "/3d-portfolio/models/warrior_running_shoe.glb",
  //   scale: 5,
  //   rotation: [0, -Math.PI / 2, 0],
  // },
  // {
  //   name: "Interactive Developer",
  //   modelPath: "/3d-portfolio/models/three.js-transformed.glb",
  //   scale: 0.05,
  //   rotation: [0, 0, 0],
  // },
  {
    name: "Ice Hockey",
    modelPath: "/3d-portfolio/models/ice-skate3.glb",
    scale: .6,
    rotation: [-Math.PI/20, -Math.PI/8, 1],
  },
];

const expCards = [
  {
    review:
      "Joe’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/3d-portfolio/images/exp2.png",
    logoPath: "/3d-portfolio/images/logo2.png",
    title: "Freelance Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Worked 1+ year with a Private Equity Firm providing technical services and digital products",
      "Teamed up with a local marketing agency for code debugging and design solutions",
      "Worked with various AI start-ups to consult and design front-end architecture solutions",
    ],
  },
  {
    review:
      "Joe brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/3d-portfolio/images/exp1.png",
    logoPath: "/3d-portfolio/images/logo1.png",
    title: "Dallas Software Developers Spring Cohort",
    date: "January 2025 - April 2025",
    responsibilities: [
      "Worked Hard",
      "22 Enterprise Level github commits",
      "Presentation to 200 live and remote audience of 1500",
    ],
  },
  {
    review:
    "Joe’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/3d-portfolio/images/exp3.png",
    logoPath: "/3d-portfolio/images/logo3.png",
    title: "Dev Mountain Web Development Bootcamp",
    date: "August 2023 - December 2023",
    responsibilities: [
      "Learned Core Web Develpment Concepts and Programming Principals",
      "Collaborated closely with Instructors and Peers to build full stack applications",
      "Coordinated and Presented Project Demo to peers, faculty members and recruit",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Joe. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/3d-portfolio/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Joe was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/3d-portfolio/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Joe was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Joe's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Joe is the ideal partner.",
    imgPath: "/3d-portfolio/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Joe was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/3d-portfolio/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Joe’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/3d-portfolio/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Joe was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/3d-portfolio/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/3d-portfolio/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/3d-portfolio/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/3d-portfolio/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/3d-portfolio/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  hobbyIcons,
  techStackImgs,
  navLinks,
};
