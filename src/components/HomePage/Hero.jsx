import { Container } from "components/Container";
import Image from "next/image";

export default function Hero() {
  return (
    <Container>
      <section className="flex flex-col md:flex-row justify-between items-center py-14 sm:py-24 mb-16 gap-6 md:gap-0">
        <div>
          <h3 className="uppercase text-sm opacity-80">designer / developer</h3>
          <h1 className="mx-auto max-w-4xl text-5xl font-semibold text-slate-900 sm:text-7xl mb-6">
            Hi, Im{" "}
            <span className="relative whitespace-nowrap">
              <svg
                aria-hidden="true"
                viewBox="0 0 279 38"
                className="absolute top-2/3 left-0 h-[0.58] w-full fill-purple-300/70"
                preserveAspectRatio="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M131.895 0.0963305C114.617 0.89121 81.4423 8.19826 50.2363 18.0822C47.7198 18.8794 44.4046 19.9301 42.8692 20.4173C22.1642 26.9869 11.0288 31.1299 3.23441 35.164C0.192493 36.7385 -0.0688452 36.9293 0.0116502 37.5176C0.129214 38.3761 0.624129 38.2435 6.26858 35.8413C12.1094 33.3557 17.3445 31.5509 31.7022 27.0731C79.6885 12.1073 102.102 6.62086 127.242 3.68629C132.169 3.11116 140.038 3.21132 140.038 3.84905C140.038 4.70091 135.102 7.60611 123.675 13.4807C109.617 20.708 101.059 25.5021 100.301 26.5749C99.0055 28.4078 100.43 29.7305 103.512 29.5571C105.273 29.4581 105.673 29.3831 113.749 27.6389C136.933 22.6311 151.751 20.0895 171.832 17.6758C202.414 14 221.899 12.6439 258.532 11.6417C271.695 11.2816 272.376 11.2314 274.805 10.4431C275.742 10.1392 276.86 9.84227 277.291 9.78304C278.3 9.64451 278.288 9.4673 277.26 9.33664C276.812 9.27966 275.782 9.00775 274.972 8.7323C272.974 8.05316 271.649 8.01768 260.238 8.33743C221.983 9.4092 201.853 10.7799 172.686 14.299C157.345 16.1498 150.51 17.1554 139.34 19.2049C131.703 20.6059 111.547 24.6846 108.724 25.4C107.183 25.7904 113.87 22.1078 125.616 16.0976C140.474 8.49489 143.432 6.43001 143.446 3.65226C143.462 0.519937 140.761 -0.311382 131.895 0.0963305Z"
                  fill="#8261FF"
                />
              </svg>

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
