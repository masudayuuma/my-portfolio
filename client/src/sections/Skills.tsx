import { useState } from "react";
import { Button } from "@/components/ui/button";
import { skills, SkillCategory } from "@/data/skills";
import { motion } from "framer-motion";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | "all">("all");

  const filterSkills = (category: SkillCategory | "all") => {
    setSelectedCategory(category);
  };

  const filteredSkills = selectedCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="inline-block pb-2 border-b-4 border-primary-500">スキル</span>
        </h2>
        
        <div className="max-w-5xl mx-auto">
          {/* Skill Categories */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            <Button 
              variant={selectedCategory === "all" ? "default" : "outline"}
              className="shadow-md"
              onClick={() => filterSkills("all")}
            >
              すべて
            </Button>
            <Button 
              variant={selectedCategory === "frontend" ? "default" : "outline"}
              className="shadow-md"
              onClick={() => filterSkills("frontend")}
            >
              フロントエンド
            </Button>
            <Button 
              variant={selectedCategory === "backend" ? "default" : "outline"}
              className="shadow-md"
              onClick={() => filterSkills("backend")}
            >
              バックエンド
            </Button>
            <Button 
              variant={selectedCategory === "tools" ? "default" : "outline"}
              className="shadow-md"
              onClick={() => filterSkills("tools")}
            >
              ツール
            </Button>
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredSkills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-700 rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-200 transform hover:-translate-y-1 transition-transform"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-3 text-3xl text-primary-500">
                    <skill.icon size={48} />
                  </div>
                  <h3 className="font-semibold text-center">{skill.name}</h3>
                  <div className="w-full mt-2">
                    <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary-500 rounded-full" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
