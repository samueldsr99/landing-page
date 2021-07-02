// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "samueldsr",
  middleName: "👋 Hi there",
  lastName: "",
  message: "I'm a passionate about changing the world with technology.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/samueldsr99",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/samueldavid.suarezrodriguez",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/samueldsr8/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/samuel-suarez-2979b5189/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/samueldsr8",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile.jpg"),
  imageSize: 375,
  message:
    "My name is Samuel David Suárez Rodríguez. I'm a Computer Scientist from Universidad de la Habana. I'm most passionate about Software Development & I love Machine Learning and how is changing the world for better. In my spare time I usually work on open source projects, listen to music and hang out with my family and friends.",
  resume: "https://drive.google.com/file/d/1nB0CPEJVzyfjzm-2Sdx_fs-wZaZlIvNt/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "samueldsr99", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/profile.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/profile.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTIONF
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Typescript", value: 90 },
    { name: "Javascript", value: 90 },
    { name: "HTML / CSS / SCSS", value: 70 },
    { name: "JavaScript", value: 90 },
    { name: "Node", value: 65 },
    { name: "React", value: 75 },
    { name: "Express", value: 50 },
    { name: "Django", value: 70 },
    { name: "Firebase", value: 40 },
    { name: "material-ui", value: 60 },
    { name: "django-rest-framework", value: 70 },
    { name: "C#: dotnet", value: 64 },
    { name: "C / C++", value: 34 },
    { name: "MySQL", value: 40 },
    { name: "MongoDB", value: 60 },
  ],
  softSkills: [
    { name: "Git / Github", value: 80 },
    { name: "Scrum (Certificated)", value: 90 },
    { name: "Data Structures & Algorithms", value: 85 },
    { name: "MVC Pattern", value: 100 },
    { name: "MVVM Pattern", value: 100 },
    { name: "Mediator Pattern", value: 100 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Full-Stack Developer or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "samueldsr8@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'React Front-End Developer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: true,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
