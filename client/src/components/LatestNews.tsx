import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const news = [
  {
    id: 1,
    title: "The Significance of Varmala in Indian Weddings",
    date: "14 May 2024",
    image: "/src/assets/images/blog-1.jpg",
  },
  {
    id: 2,
    title: "Choosing Your Heirloom Bridal Jewelry",
    date: "10 May 2024",
    image: "/src/assets/images/blog-2.jpg",
  },
  {
    id: 3,
    title: "Luxury Mithai: Reimagining Wedding Favors",
    date: "05 May 2024",
    image: "/src/assets/images/blog-3.jpg",
  },
];

export default function LatestNews() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-2 font-medium">Latest News</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Read Our Wedding News</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Feature Post */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group cursor-pointer"
          >
            <div className="overflow-hidden mb-6 aspect-video">
              <img 
                src="/src/assets/images/about.jpg" 
                alt="Photography importance" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="text-muted-foreground text-sm mb-3">22 May 2024</p>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors mb-4">
              Photography is the most important part of the wedding.
            </h3>
            <p className="text-muted-foreground font-light mb-6">
              Capturing the raw emotions, the candid laughs, and the elegant details that make your wedding day uniquely yours. Read our guide on selecting the perfect photographer.
            </p>
            <div className="inline-flex items-center text-accent uppercase tracking-widest text-xs font-medium group-hover:text-primary transition-colors">
              Read More <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </motion.div>

          {/* List of Posts */}
          <div className="flex flex-col justify-between space-y-8 lg:space-y-0">
            {news.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-1/3 aspect-[4/3] overflow-hidden shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg md:text-xl text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{item.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}