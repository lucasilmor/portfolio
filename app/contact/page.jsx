import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Entre em Contato</h1>

      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg text-black">
        <input className="w-full p-2 mb-4 bg-gray-100 border border-gray-300 rounded" type="text" placeholder="Nome" required />
        <input className="w-full p-2 mb-4 bg-gray-100 border border-gray-300 rounded" type="email" placeholder="Email" required />
        <textarea className="w-full p-2 mb-4 bg-gray-100 border border-gray-300 rounded" placeholder="Mensagem" required />
        <button className="w-full p-2 bg-black text-white rounded ">Enviar</button>
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
