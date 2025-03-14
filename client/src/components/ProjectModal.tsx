import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Code, ShoppingCart, MessageSquare } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (!project) return null;

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code className="h-12 w-12 text-slate-400 dark:text-slate-500" />;
      case "shopping-cart":
        return <ShoppingCart className="h-12 w-12 text-slate-400 dark:text-slate-500" />;
      case "comments":
        return <MessageSquare className="h-12 w-12 text-slate-400 dark:text-slate-500" />;
      default:
        return <Code className="h-12 w-12 text-slate-400 dark:text-slate-500" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
        </DialogHeader>
        
        <div className="mb-6 relative h-64 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.imageAlt}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-6xl">
              {getIconComponent(project.imageIcon)}
            </div>
          )}
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">プロジェクト概要</h4>
          <p className="text-slate-700 dark:text-slate-300">{project.longDescription}</p>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">使用技術</h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">プロジェクトの課題と解決策</h4>
          <p className="text-slate-700 dark:text-slate-300">{project.challenges}</p>
        </div>
        
        <DialogFooter className="flex justify-end space-x-4">
          <Button 
            variant="outline" 
            onClick={() => window.open(project.githubUrl, "_blank")}
            className="flex items-center gap-2"
          >
            <FaGithub />
            <span>GitHub</span>
          </Button>
          <Button 
            onClick={() => window.open(project.demoUrl, "_blank")}
            className="flex items-center gap-2"
          >
            <FaExternalLinkAlt />
            <span>デモを見る</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
