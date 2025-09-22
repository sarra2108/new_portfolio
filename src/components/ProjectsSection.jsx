import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Face-detection application (front-end)",
    description: "",
    image: "images/image1.jpeg",
    tags: [""],
    githubUrl: "https://github.com/sarra2108/face-detection-front-end",
  },
  {
    id: 2,
    title: "Face-detection application (back-end)",
    description: "",
    image: "images/image1.jpeg",
    tags: [""],
    githubUrl: "https://github.com/sarra2108/face-detection-back-end",
  },
  {
    id: 3,
    title: "Blessings of Carthage",
    description: "",
    image: "images/image2.jpeg",
    tags: [""],
    demoUrl: "https://sarra2108.github.io/React-e-commerce-web-app/",
    githubUrl: "https://github.com/sarra2108/React-e-commerce-web-app",
  },
  {
    id: 4,
    title: "Blast&Burn",
    description: "",
    image: "images/image3.jpeg",
    tags: [""],
    demoUrl: "https://sarra2108.github.io/javascript-fitness-website/",
    githubUrl: "https://sarra2108.github.io/javascript-fitness-website/",
  },
  {
    id: 5,
    title: "MemoryGame",
    description: "",
    image: "images/image4.jpeg",
    tags: [""],
    githubUrl: "https://github.com/YassineSahli04/MemoryGame",
  },
   {
    id: 5,
    title: "e-hotels",
    description: "",
    image: "images/image5.jpeg",
    tags: [""],
    githubUrl: "https://github.com/glk-0/e-Hotels",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/sarra2108"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
