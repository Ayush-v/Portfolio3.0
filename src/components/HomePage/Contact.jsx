import { Container } from "components/Container";
import Image from "next/image";

import comet from "assets/spaceIllustrations/Comet.png";
// import contact from "assets/contact.png";

export default function Contact() {
  return (
    <Container>
      <section className="py-14 sm:py-24">
        <div className="relative w-fit">
          <h1 className="text-5xl sm:text-7xl font-semibold">
            Dont forget to hit me up
            <div className="inline-block translate-y-2">
              <span className="block w-12 h-12 sm:w-20 sm:h-20 rotate-45">
                <Image src={comet} alt="" layout="responsive" />
              </span>
            </div>
          </h1>
        </div>

        <div className="bg-white shadow-md p-6 rounded-2xl flex flex-col md:flex-row justify-between md:mt-24 mt-10 border w-fit ml-auto">
          {/* <div className="block w-[351px] h-[351px] mx-auto">
            <Image src={contact} alt="" layout="responsive" />
          </div> */}

          <div className="flex flex-col gap-6 max-w-md h-fit">
            <p className="text-slate-700/70">
              Im also interested in freelance opportunities-especially ambitious
              on large projects. However, if you have other request or question,
              dont hesitate to use the form
            </p>
            <div className="flex items-center gap-3">
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7032 5.88462C14.2601 6.86519 14.2601 9.13481 12.7032 10.1154L4.83234 15.0727C3.16755 16.1213 0.999996 14.9248 0.999996 12.9573V3.04266C0.999996 1.07517 3.16755 -0.121275 4.83234 0.927275L12.7032 5.88462Z"
                  stroke="#8261FF"
                />
              </svg>
              <span className="hover:border-b-2 hover:border-black hover:border-dotted hover:cursor-pointer">
                ayushverma1194@gmail.com
              </span>
            </div>

            <form>
              <input
                type="text"
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </form>
          </div>
        </div>
      </section>
    </Container>
  );
}
