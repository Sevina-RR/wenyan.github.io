import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { projects } from "@/data/profile";

export default function ProjectsPage() {
  return (
    <>
      <Header active="Projects" />
      <main className="single-page">
        <h1>Projects</h1>
        <p className="lead">A place for research systems, datasets, demos, notebooks, and open-source work.</p>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
