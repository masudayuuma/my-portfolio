import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Code, ShoppingCart, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code className="h-10 w-10 text-slate-400 dark:text-slate-500" />;
      case "shopping-cart":
        return <ShoppingCart className="h-10 w-10 text-slate-400 dark:text-slate-500" />;
      case "comments":
        return <MessageSquare className="h-10 w-10 text-slate-400 dark:text-slate-500" />;
      default:
        return <Code className="h-10 w-10 text-slate-400 dark:text-slate-500" />;
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="inline-block pb-2 border-b-4 border-primary-500">プロジェクト</span>
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-200 h-full flex flex-col">
                  <div className="relative h-48 bg-slate-200 dark:bg-slate-700">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-4xl">
                        {getIconComponent(project.imageIcon)}
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                      <div className="flex space-x-2">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 transition-colors"
                          aria-label="GitHub repository"
                        >
                          <FaGithub size={18} />
                        </a>
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 transition-colors"
                          aria-label="Live demo"
                        >
                          <FaExternalLinkAlt size={16} />
                        </a>
                      </div>
                    </div>
                    
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-auto">
                      <Button 
                        variant="secondary" 
                        className="w-full"
                        onClick={() => openProjectModal(project)}
                      >
                        詳細を見る
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white"
              onClick={() => window.open("https://github.com/", "_blank")}
            >
              <FaGithub className="mr-2" />
              <span>GitHubでもっと見る</span>
            </Button>
          </div>
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </section>
  );
};

export default Projects;
