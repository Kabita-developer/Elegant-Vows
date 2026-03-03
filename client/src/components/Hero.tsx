import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like effect (handled by fixed or absolute positioning) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" /> {/* Elegant overlay */}
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/src/assets/images/hero.jpg"
          alt="Elegant wedding couple"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container relative z-20 mx-auto px-6 flex flex-col items-center text-center text-white mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm md:text-base uppercase tracking-[0.3em] font-medium mb-6 text-secondary"
        >
          Royal Heritage Weddings
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 max-w-4xl text-glow"
        >
          Your Royal Indian <br /> Wedding Awaits
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg md:text-xl font-light max-w-2xl mb-12 text-white/90"
        >
          Exquisite planning for grand celebrations, from traditional rituals to modern luxury.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <Button 
            className="rounded-none bg-primary hover:bg-primary/90 text-white px-10 py-7 text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(223,166,154,0.5)]"
          >
            Discover More
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-white/60 uppercase text-xs tracking-widest">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-white/40"
        />
      </motion.div>
    </section>
  );
}