import { About } from "@/components/About";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { PublicTalks } from "@/components/Talks";
import { Data, IPortfolio } from "@/data/data";
import Head from "next/head";

export default function Home(props: IPortfolio) {
  const {
    title,
    name,
    subtitle,
    email,
    about,
    blogs,
    projects,
    talks,
    networks,
  } = props;

  return (
    <>
      <Head>
        <title>Gopalakrishnan | Portfolio</title>
        <meta
          name="description"
          content="Gopalakrishnan C | Lead Engineer | React | JavaScript"
        />
      </Head>

      <main>
        <Hero title={title} name={name} subtitle={subtitle} />
        <About about={about} />
        <Projects projects={projects} />
        <Blog blogs={blogs} />
        <PublicTalks talks={talks} />
        <Contact email={email} />
        <Footer networks={networks} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      ...Data,
    },
  };
}
