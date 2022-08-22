import { Container } from "components/Container";
import Image from "next/image";

// Assets
import rover from "assets/Rover.png";
import imaee from "assets/aboutImage.png";
import dots from "assets/dots.svg";
import github from "assets/Github.svg";
import linkedIn from "assets/LinkedIn.svg";

export default function About() {
  return (
    <Container>
      <section className="flex flex-col-reverse md:flex-row py-14 sm:py-24">
        <div className="relative mx-auto md:ml-4 mt-8 md:mt-0">
          <Image src={imaee} alt="" layout="fixed" />
          <div className="absolute -top-8 -right-10 -z-10">
            <Image src={dots} alt="" layout="fixed" />
          </div>
        </div>
        <div className="max-w-xl ml-auto grow basis-0">
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
            <p>
              <span className="pl-6">Self</span> Taught UI/UX Designer and
              specialize in IOS Development and Front-End Web Development
              Currently Im persuing my Bachelors Degree in Computer Application
              from Panjab University, Chandigarh Started as a designer
              desigining websites & mobile apps. started coding for fun but then
              fell in love with it from then onwards i just love coverting my
              designs into reality.
            </p>
            <div>
              <div className="mt-6 flex gap-5 items-center">
                <div className="w-12 h-12 bg-white border shadow-sm flex justify-center items-center rounded-xl">
                  <Image src={github} alt="github" width={28} height={28} />
                </div>
                <div className="w-12 h-12 bg-white border shadow-sm flex justify-center items-center rounded-xl">
                  <Image src={linkedIn} alt="github" width={28} height={28} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
