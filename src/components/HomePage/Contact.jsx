import { Container } from "components/Container";
import Image from "next/image";
import emailjs from "@emailjs/browser";

import comet from "assets/spaceIllustrations/Comet.png";
import arrow from "assets/arrow.svg";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_APP_SERVICE_ID,
        process.env.NEXT_PUBLIC_APP_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container id="contact">
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

        <div className="flex">
          <span className="hidden lg:block">
            <Image src={arrow} alt="" layout="fixed" />
          </span>
          <div className="bg-white shadow-md p-6 rounded-2xl md:mt-24 mt-10 border w-fit mx-auto">
            <div className="flex flex-col gap-6 max-w-md h-fit">
              <p className="text-slate-700/70">
                I&#39;m also interested in freelance opportunities-especially
                ambitious on large projects. However, if you have other request
                or question, dont hesitate.
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
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("ayushverma1194@gmail.com");
                  }}
                  className="hover:border-b-2 hover:border-black hover:border-dotted hover:cursor-pointer hover:my-[-1px] transition duration-200"
                >
                  ayushverma1194@gmail.com
                </button>
              </div>

              <form ref={form} onSubmit={sendEmail} autoComplete="off">
                <div className="flex gap-4">
                  <input
                    type="text"
                    id="default-input"
                    placeholder="enter your email"
                    name="email"
                    className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                  <button
                    type="submit"
                    className="border-2 bg-black border-white text-white px-3.5 py-2 rounded-md"
                  >
                    send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
