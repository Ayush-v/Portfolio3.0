import { Container } from "components/Container";
import Image from "next/image";

import star from "assets/Star.png";

export default function Projects() {
  return (
    <Container>
      <section className="py-14 sm:py-24">
        <div className="relative w-fit">
          <h1 className="text-6xl sm:text-7xl font-semibold">Projects</h1>
          <div className="absolute -top-14 -right-20">
            <Image src={star} alt="" layout="fixed" />
          </div>
        </div>
      </section>
    </Container>
  );
}
