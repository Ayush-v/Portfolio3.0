import { Container } from "components/Container";
import Image from "next/image";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef } from "react";
import Icons from "components/Icons";

const projectArray = [
  {
    image: "/images/projects/easypaper.png",
    title: "EasyPaper",
    description: "One Stop education platform built for simplicity.",
    previewLink: "https://easypaper-ashy.vercel.app",
    githubLink: "",
  },
  {
    image: "/images/projects/dashboard.png",
    title: "Modern AdminPanel",
    description:
      "Modern Admin Panel is beautiful admin panel dashboard for scalable companies with backend of Nodejs and MongoDB. Were companies are able to manage all aspects of the website, from content to design.",
    previewLink: "https://modern-admin-panel.vercel.app",
    githubLink: "",
  },
  {
    image: "/images/projects/blockChain.png",
    title: "BlockChain App",
    description: "Want to know about BlockChain Hop on coz u gonna love it.",
    previewLink: "https://blockchain-dun.vercel.app/",
    githubLink: "https://github.com/Ayush-v/Blockchain-Webapp.git",
  },
  {
    image: "/images/projects/vishrut.png",
    title: "culinary management student",
    description: "Dear Friend of mine. A Chef in The Heart of Canada",
    previewLink: "https://vishrut-portfolio.vercel.app/",
    githubLink: "https://github.com/Ayush-v/Vishrut-Portfolio",
  },
];

export function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export default function Projects() {
  const options = {
    scale: 1.05,
    speed: 1000,
    max: 8,
  };

  return (
    <Container id="projects">
      <section className="py-14 sm:py-24">
        <div className="relative w-fit">
          <h1 className="text-6xl sm:text-7xl font-semibold">Projects</h1>
          <div className="absolute -top-14 -right-20 object-cover">
            <Image
              src="/images/spaceIcons/star.png"
              alt=""
              width={88}
              height={88}
            />
          </div>
        </div>

        <div className="mt-36 sm:mt-40 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-36 place-items-center md:place-items-stretch items-stretch">
          {projectArray.map((project, id) => (
            // <Tilt key={id} options={options}>
            <div
              key={id}
              className="bg-white shadow-md border p-10 rounded-3xl flex flex-col gap-4 relative max-w-[550px] w-full h-full"
            >
              <div className="block w-auto h-full absolute -top-20 sm:left-8 sm:right-8 left-4 right-4">
                <div className="relative rounded-2xl overflow-hidden h-72 w-auto object-contain after:content-[''] after:w-full after:h-full after:absolute after:bg-inherit after:bg-[center center] after:-z-[1] after:drop-shadow-2xl after:blur-lg -mt-8 md:-mt-5">
                  <Image src={project.image} alt="" layout="fill" />
                </div>
              </div>
              <div className="pt-4 mt-32 sm:pt-0 sm:mt-36 md:mt-44 flex flex-col gap-4">
                <h1 className="text-3xl sm:text-4xl capitalize trans">
                  {project.title}
                </h1>
                <p className="text-slate-700/70 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-3 items-center">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:-translate-y-2 transition duration-200"
                    >
                      {/* <Image
                          src={github}
                          alt="github"
                          width={28}
                          height={28}
                        /> */}
                      <Icons.GithubIcon className="w-7 h-7" />
                    </a>
                  )}
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noreferrer"
                    className="border rounded-full px-4 py-1 flex items-center gap-2 hover:bottom-1 hover:border-black group transition-all duration-200"
                  >
                    <span>Live preview</span>
                    <ArrowNarrowRightIcon className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:translate-x-2" />
                  </a>
                </div>
              </div>
            </div>
            // </Tilt>
          ))}
        </div>
      </section>
    </Container>
  );
}
