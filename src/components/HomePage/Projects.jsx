import { Container } from "components/Container";
import Image from "next/image";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

import star from "assets/spaceIllustrations/Star.png";
import github from "assets/social/Github.svg";
import sdjkf from "assets/images/test.png";
import test from "assets/images/tests.png";
import terd from "assets/images/terd.png";

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
          <div className="bg-white shadow-md border p-10 rounded-3xl flex flex-col gap-4 relative max-w-[550px]">
            <div className="block w-auto h-full absolute -top-28 sm:left-8 sm:right-8 left-4 right-4">
              <div className="relative rounded-2xl overflow-hidden max-h-64 object-cover after:content-[''] after:w-full after:h-full after:absolute after:bg-inherit after:bg-[center center] after:-z-[1] after:drop-shadow-2xl after:blur-lg">
                <Image src={test} alt="" layout="responsive" />
              </div>
            </div>
            <div className="pt-4 mt-24 sm:pt-0 sm:mt-28 md:mt-32 flex flex-col gap-4">
              <h1 className="text-3xl sm:text-4xl">Modern Admin Panel</h1>
              <p className="text-slate-700/70">
                Dui porta sit lobortis lorem odio a mi faucibus eget. Ipsum
                pharetra, lacus, posuere aenean lorem faucibus a nisl, nunc.
                Accumsan sed sit lacus, at.
              </p>
              <div className="flex gap-3 items-center">
                <Image src={github} alt="github" width={28} height={28} />
                <button className="border rounded-full px-4 py-1 flex items-center gap-2">
                  <span>Live preview</span>
                  <ArrowNarrowRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md border p-10 rounded-3xl flex flex-col gap-4 relative max-w-[550px]">
            <div className="block w-auto h-full absolute -top-28 sm:left-8 sm:right-8 left-4 right-4">
              <div className="relative rounded-2xl overflow-hidden max-h-64 object-cover after:content-[''] after:w-full after:h-full after:absolute after:bg-inherit after:bg-[center center] after:-z-[1] after:drop-shadow-2xl after:blur-lg">
                <Image src={terd} alt="" layout="responsive" />
              </div>
            </div>
            <div className="pt-4 mt-24 sm:pt-0 sm:mt-28 md:mt-32 flex flex-col gap-4">
              <h1 className="text-3xl sm:text-4xl">Modern Admin Panel</h1>
              <p className="text-slate-700/70">
                Dui porta sit lobortis lorem odio a mi faucibus eget. Ipsum
                pharetra, lacus, posuere aenean lorem faucibus a nisl, nunc.
                Accumsan sed sit lacus, at.
              </p>
              <div className="flex gap-3 items-center">
                <Image src={github} alt="github" width={28} height={28} />
                <button className="border rounded-full px-4 py-1 flex items-center gap-2">
                  <span>Live preview</span>
                  <ArrowNarrowRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md border p-10 rounded-3xl flex flex-col gap-4 relative max-w-[550px]">
            <div className="block w-auto h-full absolute -top-28 sm:left-8 sm:right-8 left-4 right-4">
              <div className="relative rounded-2xl overflow-hidden max-h-64 object-cover after:content-[''] after:w-full after:h-full after:absolute after:bg-inherit after:bg-[center center] after:-z-[1] after:drop-shadow-2xl after:blur-lg">
                <Image src={sdjkf} alt="" layout="responsive" />
              </div>
            </div>
            <div className="pt-4 mt-24 sm:pt-0 sm:mt-28 md:mt-32 flex flex-col gap-4">
              <h1 className="text-3xl sm:text-4xl">Modern Admin Panel</h1>
              <p className="text-slate-700/70">
                Dui porta sit lobortis lorem odio a mi faucibus eget. Ipsum
                pharetra, lacus, posuere aenean lorem faucibus a nisl, nunc.
                Accumsan sed sit lacus, at.
              </p>
              <div className="flex gap-3 items-center">
                <Image src={github} alt="github" width={28} height={28} />
                <button className="border rounded-full px-4 py-1 flex items-center gap-2">
                  <span>Live preview</span>
                  <ArrowNarrowRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
