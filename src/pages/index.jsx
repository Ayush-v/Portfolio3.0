import About from "components/HomePage/About";
import Hero from "components/HomePage/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ayush | Creative Developer</title>
        <meta name="description" content="Creative Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}
