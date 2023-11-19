export interface IAbout {
  img: string;
  paragraphOne: string;
  paragraphTwo: string;
  paragraphThree: string;
  resume: string;
}

export interface IBlogs {
  id: string;
  img: string;
  title: string;
  info: string;
  info2: string;
  url: string;
  repo: string;
}

export interface IProjects {
  id: string;
  img: string;
  title: string;
  info: string;
  info2: string;
  url: string;
  repo: string;
}

export interface ITalks {
  id: string;
  img: string;
  title: string;
  info: string;
  info2: string;
  url: string;
  repo: string;
}

export interface INetwork {
  id: string;
  name: string;
  url: string;
}

export interface IPortfolio {
  title: string;
  name: string;
  subtitle: string;
  email: string;
  about: IAbout;
  blogs: IBlogs[];
  projects: IProjects[];
  talks: ITalks[];
  networks: INetwork[];
}

export let Data: IPortfolio = {
  title: "Hi, I am",
  name: "Gopalakrishnan C",
  subtitle: "Lead Engineer",
  email: "krishnan.gopal34@gmail.com",
  about: {
    img: "/gopal.JPG",
    paragraphOne: `With a solid background in frontend
      development spanning 5+ years, I possess
      a comprehensive understanding of
      backend and infra technologies as well.
      My expertise lies in JavaScript, and I am
      adept at swiftly mastering new
      technologies by delving into official
      documentation. I am driven by a passion
      for continuous learning, which enables me
      to adapt quickly and effectively to new
      challenges in the tech industry.`,
    paragraphTwo: "I am a Pet Lover, PC Enthusiast ❤",
    paragraphThree: "",
    resume:
      "https://drive.google.com/file/d/1k9pd1fOzL2A9_NpFK-yQ2T3NkOCu8Ngq/view?usp=sharing",
  },
  blogs: [
    {
      id: "reflowrepaint",
      img: "/reflow.png",
      title: "Understanding Reflow and Repaint in the browser",
      info: `Recently I came to know about Reflow and Repaint. How
        it's affecting web performance. I am writing this
        post to give insights about reflow and repaint. Before
        Jumping into the topic, let's understand how the
        browser renders the website...`,
      info2: "",
      url: "https://dev.to/gopal1996/understanding-reflow-and-repaint-in-the-browser-1jbg",
      repo: "",
    },
  ],
  projects: [
    {
      id: "pixelart",
      img: "/PixelArt.png",
      title: "PixelArt",
      info: "PixelArt Application created using vannila JavaScript. And used all the important concept to improve the web performance.",
      info2:
        "PixelArt has Undo, Redo, EyeDropper, Draw Mode, Color Spotter Game, eraser, Dynamic Grid, Color Picker, Download as PNG features.",
      url: "https://gopal1996.github.io/PixelArt/",
      repo: "https://github.com/gopal1996/PixelArt",
    },
    {
      id: "resumebuilder",
      img: "/resumebuilder.png",
      title: "Resume Builder",
      info: "Resume Builder is an open source application where one can effectively build a single page professional resume.",
      info2:
        "Features: Customise with templates and themes!, Simple interface that helps you build quicky!, No sign up needed — go straight to building!, Your data never leaves your device",
      url: "https://e-resume.vercel.app/",
      repo: "https://github.com/sadanandpai/resume-builder",
    },
  ],
  talks: [
    {
      id: "eventbubbling",
      img: "/Event.jpg",
      title: "Event Bubbling and Event Capturing",
      info: `We will have a deeper look on events and how events
        works by understanding bubbling, capturing, stopping
        propagation, and more!`,
      info2: "",
      url: "https://www.youtube.com/watch?v=3k__0LmsdWo",
      repo: "",
    },
    {
      id: "microfrontend",
      img: "/microfrontend.png",
      title: "Microfrontend - Module Federation",
      info: `Microfrontend and Module Federation are concepts and architectural patterns in web development that aim to modularize and scale frontend applications, especially in large and complex projects`,
      info2: "",
      url: "https://youtu.be/4ot0ca1yBDU?t=3580",
      repo: "",
    },
    {
      id: "docker",
      img: "/docker.png",
      title: "Docker - Under the hood",
      info: `Lets deep dive into the Docker and under the hood`,
      info2: "",
      url: "https://youtu.be/ryUW-EmRE6E?t=455",
      repo: "",
    },
  ],
  networks: [
    {
      id: "linkedin",
      name: "linkedin",
      url: "https://www.linkedin.com/in/gopal1996",
    },
    {
      id: "github",
      name: "github",
      url: "https://github.com/gopal1996",
    },
  ],
};
