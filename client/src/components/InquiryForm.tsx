import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function InquiryForm() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative floral accent (abstract shape representing florals) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-96 bg-primary/10 blur-[100px] rounded-full z-0 pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-secondary/30 blur-[100px] rounded-full z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-t-full pt-20 pb-16 px-8 md:px-16 border border-border/50">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl text-primary mb-4 italic">Planning a Grand Celebration?</h2>
            <p className="text-muted-foreground font-light">From Mehendi rituals to the Grand Reception, let's make it royal.</p>
          </motion.div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <Input 
                  placeholder="Your Name" 
                  className="rounded-none border-b border-0 border-border focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent h-12 placeholder:font-light"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <Input 
                  placeholder="Your Email" 
                  type="email"
                  className="rounded-none border-b border-0 border-border focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent h-12 placeholder:font-light"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <Input 
                  placeholder="Date of the Event" 
                  className="rounded-none border-b border-0 border-border focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent h-12 placeholder:font-light"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                <Input 
                  placeholder="Venue Location" 
                  className="rounded-none border-b border-0 border-border focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent h-12 placeholder:font-light"
                />
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                <Input 
                  placeholder="Number Of Guests" 
                  className="rounded-none border-b border-0 border-border focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent h-12 placeholder:font-light"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
                <Input 
                  placeholder="What Will You Be Needing?" 
                  className="rounded-none border-b border-0 border-border focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent h-12 placeholder:font-light"
                />
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }} className="pt-8 text-center">
              <Button className="rounded-none bg-primary hover:bg-primary/90 text-white px-12 py-6 uppercase tracking-widest text-sm transition-all hover:shadow-[0_0_15px_rgba(223,166,154,0.4)]">
                Send
              </Button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
}