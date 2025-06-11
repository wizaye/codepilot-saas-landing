
import { motion } from "motion/react";

export default function ContentSection() {
  return (
    <section className="overflow-hidden section-padding bg-background">
      <div className="mx-auto max-w-7xl container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-8">
            <div className="border border-border/50 py-2 px-6 rounded-full text-sm font-medium font-funnel bg-muted/30">
              Architecture
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto font-funnel text-balance">
            Model Provider Agnostic Architecture
          </h2>
        </motion.div>
        
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground font-funnel leading-relaxed">
                CodePilot works with any AI model provider.{" "}
                <span className="text-foreground font-semibold">Choose your preferred LLM</span> — OpenAI, Anthropic,
                Google, or your own custom models.
              </p>
              <p className="text-lg text-muted-foreground font-funnel leading-relaxed">
                Our flexible architecture ensures you're never locked into a single provider, giving you the freedom to
                optimize for cost, performance, or compliance requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              {[
                {
                  icon: "✓",
                  color: "bg-green-500",
                  title: "OpenAI GPT-4",
                  description: "Industry-leading performance for complex migrations."
                },
                {
                  icon: "✓",
                  color: "bg-green-500",
                  title: "Claude & Gemini",
                  description: "Alternative providers for specialized use cases."
                },
                {
                  icon: "⚡",
                  color: "bg-blue-500",
                  title: "Custom Models",
                  description: "Bring your own fine-tuned models for domain-specific tasks."
                },
                {
                  icon: "🔒",
                  color: "bg-purple-500",
                  title: "On-Premise",
                  description: "Deploy models within your infrastructure for maximum security."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="space-y-3 group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full ${item.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <span className="text-white text-xs font-bold">{item.icon}</span>
                    </div>
                    <h3 className="text-foreground font-semibold font-funnel">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm font-funnel leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-semibold text-foreground font-funnel">Model Selection</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "GPT-4 Turbo", active: true },
                    { name: "Claude 3 Opus", active: false },
                    { name: "Gemini Pro", active: false },
                    { name: "Custom Model", active: false }
                  ].map((model, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                        model.active 
                          ? 'bg-primary/10 border-primary/30 shadow-lg' 
                          : 'bg-muted/30 border-border/30 hover:bg-muted/50'
                      }`}
                    >
                      <span className={`font-medium font-funnel transition-colors ${
                        model.active ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {model.name}
                      </span>
                      <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        model.active ? 'bg-green-500 shadow-lg' : 'bg-muted-foreground'
                      }`}></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur-2xl -z-10 opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
