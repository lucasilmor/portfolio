import Image from "next/image";

const Cards = ({ title, description, image }) => (
  <div className="bg-white text-black p-4 rounded-lg shadow-lg flex items-center space-x-20">
    <Image src={image} alt={title} width={250} height={250} className="rounded" />
    <div className="flex flex-col">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  </div>
);

export default Cards;