import { Container } from "components/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tilt } from "./Projects";
import TextReveal from "components/TextReveal";

export default function Hero() {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      stroke: "rgba(130, 97, 255, 0)",
    },
    visible: {
      pathLength: 1,
      stroke: "rgba(130, 97, 255, 1)",
    },
  };

  const options = {
    scale: 1.05,
    speed: 1000,
    max: 8,
    glare: true,
    "max-glare": 0.4,
  };

  return (
    <Container>
      <section className="flex flex-col md:flex-row justify-between items-center py-14 sm:py-24 mb-16 gap-6 md:gap-0">
        <div>
          <span className="uppercase text-sm opacity-80">
            <TextReveal text="designer / developer" />
          </span>
          <h1 className="mx-auto max-w-4xl text-5xl font-semibold text-slate-900 sm:text-7xl mb-6">
            Hi, Im{" "}
            <span className="relative whitespace-nowrap">
              <motion.svg
                viewBox="0 0 280 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2/3 left-0 h-[0.58] w-full stroke-[#8261FF]"
                preserveAspectRatio="none"
              >
                <motion.path
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                  d="M1.79004 37.0356C90.9647 2.06618 136.519 0.0760923 142.655 2.55589C148.791 5.03569 104.291 24.5357 103.291 27.5357C102.291 30.5357 173.427 8.51595 277.291 10.0357"
                  stroke="black"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  transition={{
                    delay: 1.5,
                    default: { duration: 2, ease: "easeInOut" },
                    stroke: { duration: 1, ease: [1, 0, 0.8, 1] },
                  }}
                />
              </motion.svg>

              <span className="relative">
                <TextReveal text={"Ayush"} />
              </span>
            </span>
          </h1>
          <p className="mx-auto mt-6 pr-4 max-w-2xl text-lg tracking-tight text-slate-700/70">
            I love making world a better place with my designs and coding
            skills. <br /> you&#39;r at the right place if you want to see how i
            give your designs life.
          </p>
        </div>
        <Tilt options={options}>
          <div className="rounded-2xl overflow-hidden">
            <Image src="/HeroImage.png" alt="" width={478} height={635} />
          </div>
        </Tilt>
      </section>
    </Container>
  );
}
