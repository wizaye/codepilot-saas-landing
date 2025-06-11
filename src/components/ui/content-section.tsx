
import { motion } from "motion/react";

export default function ContentSection() {
  return (
    <section className="overflow-hidden py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-6xl space-y-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center mb-8">
            <div className="border border-border/40 bg-muted/30 py-2 px-6 rounded-full text-sm font-medium font-funnel backdrop-blur-sm">
              Architecture
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto font-funnel leading-tight">
            Model Provider Agnostic Architecture
          </h2>
          <p className="text-muted-foreground text-xl mt-6 max-w-3xl mx-auto font-funnel">
            Built for flexibility and choice. Switch between providers seamlessly.
          </p>
        </motion.div>
        
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative z-10 space-y-8"
          >
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg font-funnel leading-relaxed">
                CodePilot works with any AI model provider.{" "}
                <span className="text-foreground font-semibold">Choose your preferred LLM</span> — OpenAI, Anthropic,
                Google, or your own custom models.
              </p>
              <p className="text-muted-foreground text-lg font-funnel leading-relaxed">
                Our flexible architecture ensures you're never locked into a single provider, giving you the freedom to
                optimize for cost, performance, or compliance requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4 p-6 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <h3 className="text-foreground text-lg font-semibold font-funnel">OpenAI GPT-4</h3>
                </div>
                <p className="text-muted-foreground font-funnel leading-relaxed">Industry-leading performance for complex migrations.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4 p-6 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <h3 className="text-foreground text-lg font-semibold font-funnel">Claude & Gemini</h3>
                </div>
                <p className="text-muted-foreground font-funnel leading-relaxed">Alternative providers for specialized use cases.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4 p-6 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">⚡</span>
                  </div>
                  <h3 className="text-foreground text-lg font-semibold font-funnel">Custom Models</h3>
                </div>
                <p className="text-muted-foreground font-funnel leading-relaxed">
                  Bring your own fine-tuned models for domain-specific tasks.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4 p-6 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">🔒</span>
                  </div>
                  <h3 className="text-foreground text-lg font-semibold font-funnel">On-Premise</h3>
                </div>
                <p className="text-muted-foreground font-funnel leading-relaxed">
                  Deploy models within your infrastructure for maximum security.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-card/80 shadow-2xl shadow-black/5 backdrop-blur-sm">
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-foreground font-funnel text-xl">Model Selection</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-all duration-300"
                  >
                    <span className="font-medium text-foreground font-funnel">GPT-4 Turbo</span>
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border/30 hover:bg-muted/80 transition-all duration-300"
                  >
                    <span className="text-muted-foreground font-funnel">Claude 3 Opus</span>
                    <div className="w-3 h-3 rounded-full bg-muted-foreground/50"></div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border/30 hover:bg-muted/80 transition-all duration-300"
                  >
                    <span className="text-muted-foreground font-funnel">Gemini Pro</span>
                    <div className="w-3 h-3 rounded-full bg-muted-foreground/50"></div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border/30 hover:bg-muted/80 transition-all duration-300"
                  >
                    <span className="text-muted-foreground font-funnel">Custom Model</span>
                    <div className="w-3 h-3 rounded-full bg-muted-foreground/50"></div>
                  </motion.div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-tr from-green-500/10 to-blue-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
