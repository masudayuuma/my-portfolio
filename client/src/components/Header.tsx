import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { SunIcon, MoonIcon, MenuIcon, CodeIcon } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className={`sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shadow-sm transition-all ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/#home" className="flex items-center space-x-2">
          <span className="text-primary dark:text-primary-400">
            <CodeIcon className="h-6 w-6" />
          </span>
          <span className="font-bold text-xl">太郎 開発者</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/#about" className="font-medium text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-400 transition-colors">
            自己紹介
          </Link>
          <Link href="/#skills" className="font-medium text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-400 transition-colors">
            スキル
          </Link>
          <Link href="/#projects" className="font-medium text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-400 transition-colors">
            プロジェクト
          </Link>
          <Link href="/#resume" className="font-medium text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-400 transition-colors">
            経歴
          </Link>
          <Link href="/#blog" className="font-medium text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-400 transition-colors">
            ブログ
          </Link>
          <Link href="/#contact" className="font-medium text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-400 transition-colors">
            連絡先
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-700"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5 text-yellow-300" />
            ) : (
              <MoonIcon className="h-5 w-5 text-yellow-500" />
            )}
          </Button>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="md:hidden hover:bg-slate-100 dark:hover:bg-slate-700"
            aria-label="Toggle menu"
          >
            <MenuIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
          <div className="container mx-auto px-4 py-3 space-y-2">
            <Link 
              href="/#about"
              className="block py-2 font-medium text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-400 transition-colors"
              onClick={closeMobileMenu}
            >
              自己紹介
            </Link>
            <Link 
              href="/#skills"
              className="block py-2 font-medium text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-400 transition-colors"
              onClick={closeMobileMenu}
            >
              スキル
            </Link>
            <Link 
              href="/#projects"
              className="block py-2 font-medium text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-400 transition-colors"
              onClick={closeMobileMenu}
            >
              プロジェクト
            </Link>
            <Link 
              href="/#resume"
              className="block py-2 font-medium text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-400 transition-colors"
              onClick={closeMobileMenu}
            >
              経歴
            </Link>
            <Link 
              href="/#blog"
              className="block py-2 font-medium text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-400 transition-colors"
              onClick={closeMobileMenu}
            >
              ブログ
            </Link>
            <Link 
              href="/#contact"
              className="block py-2 font-medium text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-400 transition-colors"
              onClick={closeMobileMenu}
            >
              連絡先
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
