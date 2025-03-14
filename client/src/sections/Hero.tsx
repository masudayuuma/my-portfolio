import { Button } from "@/components/ui/button";
import { ArrowRight, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "wouter";

const Hero = () => {
  return (
    <section id="home" className="py-20 bg-gradient-to-br from-primary-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
              <span className="block">太郎 開発者</span>
              <span className="text-primary-600 dark:text-primary-400">
                フルスタック<br />エンジニア
              </span>
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8">
              エキサイティングなWebアプリケーションを作り、テクノロジーの可能性を追求することを愛しています。
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="shadow-md hover:shadow-lg"
                asChild
              >
                <Link href="#projects">
                  <span>プロジェクトを見る</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-600 dark:border-primary-400 shadow-md hover:shadow-lg"
                asChild
              >
                <Link href="#contact">
                  <span>連絡する</span>
                  <Send className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-700 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-700 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-700 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-white dark:bg-slate-800 shadow-lg overflow-hidden border-4 border-primary-400 dark:border-primary-600">
              <div className="absolute inset-0 flex items-center justify-center text-6xl text-slate-300 dark:text-slate-600">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-24 h-24"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
