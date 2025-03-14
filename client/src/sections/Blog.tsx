import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";
import { Calendar, ArrowRight, FileCode, Server, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

const Blog = () => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "file-code":
        return <FileCode className="h-10 w-10 text-slate-400 dark:text-slate-500" />;
      case "server":
        return <Server className="h-10 w-10 text-slate-400 dark:text-slate-500" />;
      case "code-branch":
        return <GitBranch className="h-10 w-10 text-slate-400 dark:text-slate-500" />;
      default:
        return <FileCode className="h-10 w-10 text-slate-400 dark:text-slate-500" />;
    }
  };

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="inline-block pb-2 border-b-4 border-primary-500">ブログ</span>
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
                  <div className="relative h-48 bg-slate-200 dark:bg-slate-700">
                    <div className="absolute inset-0 flex items-center justify-center text-4xl">
                      {getIconComponent(post.imageIcon)}
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-2">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto">
                      <a 
                        href={post.url} 
                        className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-800 dark:hover:text-primary-300 transition-colors"
                      >
                        <span>続きを読む</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-600 dark:border-primary-400"
            >
              <span>全ての記事を見る</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
