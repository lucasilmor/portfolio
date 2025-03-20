import Link from "next/link";
import Image from "next/image";

const Navbar = () => (
    <nav className="bg-white text-black shadow-md p-4">
      <div className="container mx-auto flex justify-between">
        <Image
        src="/Nextjs-logo.svg" 
        alt="Minha foto"
        width={100}  
        height={100} 
        />
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">Sobre</Link></li>
          <li><Link href="/projects">Projetos</Link></li>
          <li><Link href="/skills">Habilidades</Link></li>
          <li><Link href="/contact">Contato</Link></li>
        </ul>
      </div>
    </nav>
  );
  
  export default Navbar;