import { Link } from "wouter";
import { CodeIcon } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <span className="text-primary-400">
                  <CodeIcon className="h-6 w-6" />
                </span>
                <span className="font-bold text-xl">太郎 開発者</span>
              </div>
              <p className="mt-2 text-slate-300">フルスタックエンジニア</p>
            </div>
            
            <div className="flex space-x-8">
              <div>
                <h3 className="font-semibold mb-3 text-lg">リンク</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/#about">
                      <a className="text-slate-300 hover:text-primary-400 transition-colors">自己紹介</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#projects">
                      <a className="text-slate-300 hover:text-primary-400 transition-colors">プロジェクト</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#resume">
                      <a className="text-slate-300 hover:text-primary-400 transition-colors">経歴</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#blog">
                      <a className="text-slate-300 hover:text-primary-400 transition-colors">ブログ</a>
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-lg">SNS</h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="https://github.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-300 hover:text-primary-400 transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://linkedin.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-300 hover:text-primary-400 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://twitter.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-300 hover:text-primary-400 transition-colors"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} 太郎 開発者. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
