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
    paragraphOne:
      "Having 3+ years of experience in Frontend development with some knowledge of backend Technology. I have proficient knowledge in JavaScript and able to learn any technology within less time by exploring official documentation.",
    paragraphTwo: "I am a Pet Lover, Traveler, PC Enthusiast ❤",
    paragraphThree: "",
    resume:
      "https://drive.google.com/uc?export=download&id=1fFD4a6B50K29KafZlT1ZxRmhYilIuEYT",
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
  ],
  talks: [
    {
      id: "eventbubbling",
      img: "/Event.jpg",
      title: "Event Bubbling and Event Capturing",
      info: ` We will have a deeper look on events and how events
        works by understanding bubbling, capturing, stopping
        propagation, and more!`,
      info2: "",
      url: "https://www.youtube.com/watch?v=3k__0LmsdWo",
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
