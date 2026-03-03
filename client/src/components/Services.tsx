import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Royal Bridal Couture",
    image: "/src/assets/images/service-dress.jpg",
  },
  {
    id: 2,
    title: "Mehendi & Artistry",
    image: "/src/assets/images/service-makeup.jpg",
  },
  {
    id: 3,
    title: "Baraat & Procession",
    image: "/src/assets/images/service-photo.jpg",
  },
  {
    id: 4,
    title: "Royal Wazwan & Catering",
    image: "/src/assets/images/service-catering.jpg",
  },
  {
    id: 5,
    title: "Mandap & Floral Decor",
    image: "/src/assets/images/service-decor.jpg",
  },
  {
    id: 6,
    title: "Haldi & Ritual Planning",
    image: "/src/assets/images/service-plan.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-accent mb-4">Our Best Services</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive and luxurious wedding planning services tailored to your unique love story.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                <h4 className="font-serif text-white text-xl md:text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {service.title}
                </h4>
                <div className="w-12 h-[1px] bg-primary mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}