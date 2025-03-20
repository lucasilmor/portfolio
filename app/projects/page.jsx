import ProjectCard from "../components/Cards";

export default function Projects() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Meus Projetos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard title="Projeto 1" description="Descrição do projeto 1" image="/project1.jpg" />
        <ProjectCard title="Projeto 2" description="Descrição do projeto 2" image="/project2.jpg" />
      </div>
    </main>
  );
}