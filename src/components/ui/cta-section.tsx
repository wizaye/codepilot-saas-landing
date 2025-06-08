
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function CTASection() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <div className="border py-1 px-4 rounded-lg text-sm">Get Started</div>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
        >
          Ready to transform your workflow?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto"
        >
          Join thousands of developers who are already building the future with our AI-powered platform.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="px-8">
            Start Building
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            View Documentation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
