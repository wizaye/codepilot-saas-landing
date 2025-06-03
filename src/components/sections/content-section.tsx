
import { motion } from "motion/react";

export function ContentSection() {
  return (
    <section className="overflow-hidden py-32 bg-background">
      <div className="mx-auto max-w-7xl space-y-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="border py-1 px-4 rounded-lg text-sm">Architecture</div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Model Provider Agnostic Architecture
          </h2>
        </motion.div>
        
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg">
              CodePilot works with any AI model provider.{" "}
              <span className="text-foreground font-medium">Choose your preferred LLM</span> — OpenAI, Anthropic,
              Google, or your own custom models.
            </p>
            <p className="text-muted-foreground text-lg">
              Our flexible architecture ensures you're never locked into a single provider, giving you the freedom to
              optimize for cost, performance, or compliance requirements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <h3 className="text-foreground font-semibold">OpenAI GPT-4</h3>
                </div>
                <p className="text-muted-foreground text-sm">Industry-leading performance for complex migrations.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <h3 className="text-foreground font-semibold">Claude & Gemini</h3>
                </div>
                <p className="text-muted-foreground text-sm">Alternative providers for specialized use cases.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white text-xs">⚡</span>
                  </div>
                  <h3 className="text-foreground font-semibold">Custom Models</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Bring your own fine-tuned models for domain-specific tasks.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                    <span className="text-white text-xs">🔒</span>
                  </div>
                  <h3 className="text-foreground font-semibold">On-Premise</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Deploy models within your infrastructure for maximum security.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl shadow-2xl border border-border bg-card">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-foreground text-lg">Model Selection</h3>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <span className="font-medium text-foreground">GPT-4 Turbo</span>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border/50">
                    <span className="text-muted-foreground">Claude 3 Opus</span>
                    <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border/50">
                    <span className="text-muted-foreground">Gemini Pro</span>
                    <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border/50">
                    <span className="text-muted-foreground">Custom Model</span>
                    <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
