import Link from "next/link";

const Navbar = () => (
    <nav className="bg-gray-900 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold">Meu Portfólio</h1>
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