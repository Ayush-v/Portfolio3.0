import { Container } from "components/Container";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const pathVariants = {
    hidden: {
      // opacity: 0,
      pathLength: 0,
      fill: "rgba(130, 97, 255, 0)",
    },
    visible: {
      // opacity: 1,
      pathLength: 1,
      fill: "rgba(130, 97, 255, 1)",
      // transition: {
      //   duration: 2,
      //   ease: "easeInOut",
      // },
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
              {/* <motion.svg
                aria-hidden="true"
                viewBox="0 0 279 38"
                className="absolute top-2/3 left-0 h-[0.58] w-full fill-green-300/70 stroke-purple-300"
                preserveAspectRatio="none"
              >
                <motion.path
                  variants={pathVariants}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M131.895 0.0963305C114.617 0.89121 81.4423 8.19826 50.2363 18.0822C47.7198 18.8794 44.4046 19.9301 42.8692 20.4173C22.1642 26.9869 11.0288 31.1299 3.23441 35.164C0.192493 36.7385 -0.0688452 36.9293 0.0116502 37.5176C0.129214 38.3761 0.624129 38.2435 6.26858 35.8413C12.1094 33.3557 17.3445 31.5509 31.7022 27.0731C79.6885 12.1073 102.102 6.62086 127.242 3.68629C132.169 3.11116 140.038 3.21132 140.038 3.84905C140.038 4.70091 135.102 7.60611 123.675 13.4807C109.617 20.708 101.059 25.5021 100.301 26.5749C99.0055 28.4078 100.43 29.7305 103.512 29.5571C105.273 29.4581 105.673 29.3831 113.749 27.6389C136.933 22.6311 151.751 20.0895 171.832 17.6758C202.414 14 221.899 12.6439 258.532 11.6417C271.695 11.2816 272.376 11.2314 274.805 10.4431C275.742 10.1392 276.86 9.84227 277.291 9.78304C278.3 9.64451 278.288 9.4673 277.26 9.33664C276.812 9.27966 275.782 9.00775 274.972 8.7323C272.974 8.05316 271.649 8.01768 260.238 8.33743C221.983 9.4092 201.853 10.7799 172.686 14.299C157.345 16.1498 150.51 17.1554 139.34 19.2049C131.703 20.6059 111.547 24.6846 108.724 25.4C107.183 25.7904 113.87 22.1078 125.616 16.0976C140.474 8.49489 143.432 6.43001 143.446 3.65226C143.462 0.519937 140.761 -0.311382 131.895 0.0963305Z"
                  // fill="#8261FF"
                  initial="hidden"
                  animate="visible"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                />
              </motion.svg> */}
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
                  // fill="black"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 1, ease: [1, 0, 0.8, 1] },
                  }}
                />
              </motion.svg>

              <span className="relative">Ayush</span>
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700/70">
            I love design systems and I think you should too.
            <br />
            As well as coding and designing, you can find me taking photos,
            making videos and occasionally rambling on Twitter.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <Image src="/HeroImage.png" alt="" width={478} height={635} />
        </div>
      </section>
    </Container>
  );
}
