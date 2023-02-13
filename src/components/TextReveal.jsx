import { useEffect, useState } from "react";
import { RandomReveal } from "react-random-reveal";

function TextReveal({ text }) {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return <>{text}</>;
  }

  return (
    <>
      <RandomReveal
        isPlaying={hydrated}
        duration={1.5}
        revealDuration={1.6}
        revealEasing="easeOutQuad"
        characters={text}
      />
    </>
  );
}

export default TextReveal;
