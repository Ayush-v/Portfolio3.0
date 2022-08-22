import About from "components/HomePage/About";
import Contact from "components/HomePage/Contact";
import Hero from "components/HomePage/Hero";
import Projects from "components/HomePage/Projects";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ayush | Creative Developer</title>
        <meta name="description" content="Creative Web Developer" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
