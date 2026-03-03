import { Instagram, Facebook, Twitter, BookmarkPlus } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-accent mb-8">Aura & Vows</h2>
        
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
          <a href="#" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#services" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Wedding</a>
          <a href="#portfolio" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Portfolio</a>
          <a href="#blog" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Blog</a>
          <a href="#contact" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <div className="flex gap-6 mb-12">
          <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </a>
        </div>
        
        <div className="w-full border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>© Copyright 2024 Aura & Vows. All right reserved.</p>
          <p className="mt-2 md:mt-0">Designed with Elegance.</p>
        </div>
      </div>
    </footer>
  );
}