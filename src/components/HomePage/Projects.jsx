import { Container } from "components/Container";
import Image from "next/image";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

import star from "assets/spaceIllustrations/Star.png";
import github from "assets/social/Github.svg";
import easypaper from "assets/images/projects/Easypaper.png";
import blockChain from "assets/images/projects/BlockChain.png";
import dashBoard from "assets/images/projects/DashBoard.png";

const projectArray = [
  {
    image: easypaper,
    title: "EasyPaper",
    description: "One Stop education platform built for simplicity",
    previewLink: "https://easypaper-ashy.vercel.app",
    githubLink: "",
  },
  {
    image: dashBoard,
    title: "Modern AdminPanel",
    description:
      "Modern Admin Panel is beautiful admin panel dashboard for scalable companies with backend of Nodejs and MongoDB. Were companies are able to manage all aspects of the website, from content to design.",
    previewLink: "https://modern-admin-panel.vercel.app",
    githubLink: "",
  },
  {
    image: blockChain,
    title: "BlockChain App",
    description: "Want to know about BlockChain Hop on coz u gonna love it.",
    previewLink: "https://blockchain-dun.vercel.app/",
    githubLink: "https://github.com/Ayush-v/Blockchain-Webapp.git",
  },
];

export default function Projects() {
  return (
    <Container id="projects">
      <section className="py-14 sm:py-24">
        <div className="relative w-fit">
          <h1 className="text-6xl sm:text-7xl font-semibold">Projects</h1>
          <div className="absolute -top-14 -right-20 object-cover">
            <Image src={star} alt="" layout="fixed" />
          </div>
        </div>

        <div className="mt-36 sm:mt-40 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-36 place-items-center">
          {projectArray.map((project, id) => (
            <div
              key={id}
              className="bg-white shadow-md border p-10 rounded-3xl flex flex-col gap-4 relative max-w-[550px] w-full h-auto"
            >
              <div className="block w-auto h-full absolute -top-28 sm:left-8 sm:right-8 left-4 right-4">
                <div className="relative rounded-2xl overflow-hidden max-h-64 object-cover after:content-[''] after:w-full after:h-full after:absolute after:bg-inherit after:bg-[center center] after:-z-[1] after:drop-shadow-2xl after:blur-lg">
                  <Image src={project.image} alt="" layout="responsive" />
                </div>
              </div>
              <div className="pt-4 mt-24 sm:pt-0 sm:mt-28 md:mt-32 flex flex-col gap-4">
                <h1 className="text-3xl sm:text-4xl">{project.title}</h1>
                <p className="text-slate-700/70">{project.description}</p>
                <div className="flex gap-3 items-center">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:-translate-y-2 transition duration-200"
                    >
                      <Image src={github} alt="github" width={28} height={28} />
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
          ))}
        </div>
      </section>
    </Container>
  );
}
