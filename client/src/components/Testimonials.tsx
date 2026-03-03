import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-24 bg-accent text-white relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <div className="aspect-[4/5] overflow-hidden relative">
            <img 
              src="/src/assets/images/story_5.jpg" 
              alt="Happy Couple" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-[20px] border-accent/20 mix-blend-overlay" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2"
        >
          <div className="text-primary text-6xl font-serif mb-6 opacity-60">"</div>
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8">
            The pheras at the palace were handled with such grace. Aura & Vows understood the cultural nuances and turned our heritage wedding into a timeless masterpiece.
          </p>
          <div>
            <h5 className="uppercase tracking-widest text-sm text-secondary font-medium mb-1">Arjun & Diya</h5>
            <p className="text-white/60 text-sm italic font-serif">Royal Palace Wedding, Udaipur</p>
          </div>
        </motion.div>
      </div>

      {/* Brands / Featured in */}
      <div className="container mx-auto px-6 mt-24 border-t border-white/10 pt-12">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Mock Brand logos using text for elegant aesthetic */}
          <span className="font-serif italic text-xl">Vogue Weddings</span>
          <span className="font-serif text-xl tracking-widest uppercase">The Knot</span>
          <span className="font-serif italic text-xl">Brides</span>
          <span className="font-serif text-xl tracking-wider">HARPER'S BAZAAR</span>
        </div>
      </div>
    </section>
  );
}