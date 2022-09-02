import { Container } from "components/Container";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(130, 97, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(130, 97, 255, 1)",
    },
  };

  return (
    <Container>
      <section className="flex flex-col md:flex-row justify-between items-center py-14 sm:py-24 mb-16 gap-6 md:gap-0">
        <div>
          <span className="uppercase text-sm opacity-80">
            designer / developer
          </span>
          <h1 className="mx-auto max-w-4xl text-5xl font-semibold text-slate-900 sm:text-7xl mb-6">
            Hi, Im{" "}
            <span className="relative whitespace-nowrap">
              <motion.svg
                aria-hidden="true"
                viewBox="0 0 280 41"
                className="absolute top-2/3 left-0 h-[0.58] w-full stroke-[#8261FF]"
                preserveAspectRatio="none"
              >
                <motion.path
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                  d="M142 3.58141L143.4 4.6314C143.698 4.23369 143.813 3.72789 143.716 3.2403C143.62 2.7527 143.32 2.32933 142.892 2.07589L142 3.58141ZM103 28.0815L101.324 27.5786C101.15 28.1584 101.288 28.787 101.689 29.2405C102.09 29.694 102.697 29.9082 103.293 29.8067L103 28.0815ZM277.497 11.7577C278.423 12.0354 279.398 11.5101 279.676 10.5844C279.954 9.65862 279.429 8.68302 278.503 8.4053L277.497 11.7577ZM1.72129 40.1759C22.606 30.7281 54.3815 20.008 82.6286 12.65C96.75 8.9716 109.94 6.14652 120.413 4.73775C125.653 4.0329 130.167 3.68903 133.754 3.75886C137.422 3.83026 139.837 4.3339 141.108 5.08693L142.892 2.07589C140.788 0.828953 137.578 0.33263 133.822 0.259524C129.986 0.184851 125.277 0.551946 119.946 1.26899C109.279 2.704 95.9375 5.56644 81.7464 9.26303C53.3685 16.655 21.394 27.4349 0.27871 36.987L1.72129 40.1759ZM140.6 2.53142C138.541 5.27627 135.286 7.85861 131.395 10.2838C127.523 12.6972 123.144 14.881 118.938 16.8752C114.777 18.8479 110.712 20.6668 107.645 22.2834C106.107 23.0944 104.738 23.8955 103.686 24.6866C102.709 25.4208 101.685 26.3748 101.324 27.5786L104.676 28.5844C104.672 28.5969 104.704 28.4931 104.899 28.2719C105.088 28.0575 105.376 27.7943 105.789 27.4842C106.617 26.8613 107.792 26.1624 109.277 25.3796C112.257 23.8087 116.161 22.0651 120.437 20.0378C124.668 18.032 129.196 15.7783 133.246 13.2541C137.277 10.7418 140.959 7.88662 143.4 4.6314L140.6 2.53142ZM103.293 29.8067C128.274 25.56 166.995 19.5647 201.958 15.3816C219.442 13.2898 235.963 11.654 249.347 10.9148C256.04 10.5451 261.925 10.401 266.741 10.533C271.597 10.666 275.231 11.0778 277.497 11.7577L278.503 8.4053C275.769 7.58522 271.747 7.16883 266.837 7.0343C261.888 6.8987 255.898 7.04758 249.153 7.4201C235.662 8.16525 219.058 9.81073 201.542 11.9064C166.505 16.0983 127.726 22.103 102.707 26.3563L103.293 29.8067Z"
                  fill="black"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 1, ease: [1, 0, 0.8, 1] },
                  }}
                />
              </motion.svg>

              <span className="relative">Ayush</span>
            </span>
          </h1>
          <p className="mx-auto mt-6 pr-4 max-w-2xl text-lg tracking-tight text-slate-700/70">
            I love making world a better place with my designs and coding
            skills. <br /> you&#39;r at the right place if you want to see how i
            give your designs life.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <Image src="/HeroImage.png" alt="" width={478} height={635} />
        </div>
      </section>
    </Container>
  );
}
