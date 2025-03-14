import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Award } from "lucide-react";
import { resumeItems, certificates } from "@/data/resume";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="inline-block pb-2 border-b-4 border-primary-500">経歴</span>
        </h2>
        
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">職歴・学歴</h3>
              <Button className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>履歴書ダウンロード</span>
              </Button>
            </div>
            
            {/* Timeline */}
            <div className="relative border-l-2 border-primary-200 dark:border-primary-900 ml-3 pl-8 space-y-10">
              {resumeItems.map((item, index) => (
                <motion.div 
                  key={item.id}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="absolute -left-10 mt-1.5 w-5 h-5 rounded-full border-4 border-primary-500 bg-white dark:bg-slate-800"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{item.period}</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Certificates */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">資格・認定</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((cert, index) => (
                  <motion.div 
                    key={cert.id}
                    className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="text-primary-500 mr-4 text-xl mt-1">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">{cert.name}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{cert.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Resume;
