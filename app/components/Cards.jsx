import Image from "next/image";

export default function Cards({ title, description, image }) {
    return (
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
        <Image src={image} alt={title} width={300} height={200} className="rounded" />
        <h3 className="text-xl font-bold mt-2">{title}</h3>
        <p className="text-sm mt-1">{description}</p>
      </div>
    );
  }