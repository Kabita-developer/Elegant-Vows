import { motion } from "framer-motion";

export default function StoryGallery() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-2 font-medium">Amazing World</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Featured Wedding Story</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
          {/* Main large image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 md:row-span-2 relative group overflow-hidden"
          >
            <img 
              src="/src/assets/images/story_1.jpg" 
              alt="Royal Wedding Ceremony" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Top right */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 relative group overflow-hidden"
          >
            <img 
              src="/src/assets/images/story_2.jpg" 
              alt="Wedding Details" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Bottom middle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group overflow-hidden"
          >
            <img 
              src="/src/assets/images/story_3.jpg" 
              alt="Wedding Moments" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Bottom right */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group overflow-hidden"
          >
            <img 
              src="/src/assets/images/story_4.jpg" 
              alt="Wedding Ceremony" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}