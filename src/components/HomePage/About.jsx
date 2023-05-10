import { Container } from "components/Container";
import Image from "next/image";
import Icons from "components/Icons";

export default function About() {
  return (
    <Container id="about">
      <section className="flex flex-col-reverse md:flex-row py-14 sm:py-24 gap-5">
        <div className="relative mx-auto md:ml-4 mt-8 md:mt-0 w-full max-w-[280px] h-auto">
          <Image src="/images/aboutImage.png" alt="" layout="fill" />
          <div className="absolute -top-8 -right-10 -z-10">
            <Icons.Dots />
          </div>
        </div>
        <div className="max-w-xl mx-auto grow basis-0">
          <div className="relative w-fit">
            <h1 className="text-6xl sm:text-7xl font-semibold">About</h1>
            <div className="absolute -top-8 -right-20">
              <Image
                src="/images/spaceIcons/rover.png"
                alt=""
                width={75}
                height={75}
              />
            </div>
          </div>
          <div className="relative mt-10">
            <span className="dd text-8xl absolute -top-6 -left-4 text-[#d2d2d2]/60">
              &#8220;
            </span>
            <p className="text-slate-700/90">
              <span className="pl-6">I</span> am a self-motivated UI/UX Designer
              who specializes in Web Development. I hold a Bachelor&#39;s Degree
              in Computer Applications from Panjab University, Chandigarh.
              <br />
              <br />I started my journey as a designer by designing websites and
              mobile apps. I began coding for fun, but soon fell in love with
              it. Since then, I have enjoyed converting my designs into reality.
            </p>
            <div>
              <div className="mt-6 flex gap-5 items-center">
                <a
                  href="https://github.com/Ayush-v"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                  className="hover:-translate-y-1 transition duration-200"
                >
                  <div className="w-12 h-12 bg-white border shadow-sm flex justify-center items-center rounded-xl">
                    <Icons.GithubIcon className="w-7 h-7" />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/ayush2711"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedIn"
                  className="hover:-translate-y-1 transition duration-200"
                >
                  <div className="w-12 h-12 bg-white border shadow-sm flex justify-center items-center rounded-xl">
                    <Icons.LinkedIn className="w-7 h-7" />
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
