import Image from "next/image";

export default function ProjectBox({
  title,
  description,
  image,
  link,
  github,
}) {
  return (
    <div className="bg-white shadow-md border rounded-3xl p-6 mb-24">
      <div className="w-[490px] h-[338px] relative rounded-[22px] overflow-hidden -mt-24">
        <Image src={image} width={490} height={338} alt={title} />
      </div>
      <h2 className="text-3xl mt-4">{title}</h2>
      <p className="text-black/60 mt-1 line-clamp-2 text-left max-w-[490px]">
        {description}
      </p>
    </div>
  );
}
