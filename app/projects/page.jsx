import ProjectCard from "../components/Cards";

const Projects = () => (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Meus Projetos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard title="Fox" description="Um website de uma loja de brinquedos desenvolvido em Laravel." image="/fox.png" />
        <ProjectCard title="Alpha" description="uma loja virtual de hardware em formato de aplicativo feito com Android Studio." image="/alpha.png" />
      </div>
    </main>
);

export default Projects;
