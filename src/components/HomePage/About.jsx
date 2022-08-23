import { Container } from "components/Container";
import Image from "next/image";

import rover from "assets/spaceIllustrations/Rover.png";
import AboutImage from "assets/images/aboutImage.png";
import dots from "assets/dots.svg";
import github from "assets/social/Github.svg";
import linkedIn from "assets/social/LinkedIn.svg";

export default function About() {
  return (
    <Container id="about">
      <section className="flex flex-col-reverse md:flex-row py-14 sm:py-24 gap-5">
        <div className="relative mx-auto md:ml-4 mt-8 md:mt-0">
          <Image src={AboutImage} alt="" layout="fixed" />
          <div className="absolute -top-8 -right-10 -z-10">
            <Image src={dots} alt="" layout="fixed" />
          </div>
        </div>
        <div className="max-w-xl mx-auto grow basis-0">
          <div className="relative w-fit">
            <h1 className="text-6xl sm:text-7xl font-semibold">About</h1>
            <div className="absolute -top-8 -right-20">
              <Image src={rover} alt="" layout="fixed" />
            </div>
          </div>
          <div className="relative mt-10">
            <span className="dd text-8xl absolute -top-6 -left-4 text-[#d2d2d2]/60">
              &#8220;
            </span>
            <p className="text-slate-700/90">
              <span className="pl-6">Self</span> Motivated UI/UX Designer and
              specialize in Web Development. Bachelors Degree in Computer
              Application from Panjab University, Chandigarh.
              <br />
              <br />
              Started my journey as a designer desigining websites & mobile
              apps. started coding for fun but then fell in love with it from
              then onwards i just love coverting my designs into reality.
            </p>
            <div>
              <div className="mt-6 flex gap-5 items-center">
                <a
                  href="https://github.com/Ayush-v"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:-translate-y-1 transition duration-200"
                >
                  <div className="w-12 h-12 bg-white border shadow-sm flex justify-center items-center rounded-xl">
                    <Image src={github} alt="github" width={28} height={28} />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/ayush2711"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:-translate-y-1 transition duration-200"
                >
                  <div className="w-12 h-12 bg-white border shadow-sm flex justify-center items-center rounded-xl">
                    <Image src={linkedIn} alt="github" width={28} height={28} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
