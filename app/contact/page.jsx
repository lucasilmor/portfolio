import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Contact = () => (
    <main className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Entre em Contato</h1>
      <form className="w-full max-w-md bg-gray-800 p-4 rounded-lg text-white">
        <input className="w-full p-2 mb-2 bg-gray-700 rounded" type="text" placeholder="Nome" required />
        <input className="w-full p-2 mb-2 bg-gray-700 rounded" type="email" placeholder="Email" required />
        <textarea className="w-full p-2 mb-2 bg-gray-700 rounded" placeholder="Mensagem" required />
        <button className="w-full p-2 bg-blue-500 rounded">Enviar</button>
      </form>

      <div className="flex space-x-4 mt-4">
      <a href="https://github.com/lucasilmor" target="_blank" rel="noopener noreferrer">
      <FaGithub className="w-6 h-6 text-gray-300 hover:text-white" />
      </a>

      <a href="https://www.linkedin.com/in/lucas-silva-283545221/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="w-6 h-6 text-gray-300 hover:text-white" />
      </a>
      </div>
      
    </main>
  );

export default Contact;
