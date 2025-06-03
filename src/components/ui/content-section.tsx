
import { motion } from "motion/react";

export default function ContentSection() {
  return (
    <section className="overflow-hidden py-32 bg-background">
      <div className="mx-auto max-w-5xl space-y-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center rounded-lg border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              Architecture
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Model Provider Agnostic Architecture
          </h2>
        </motion.div>
        
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative z-10 space-y-4">
            <p className="text-muted-foreground">
              CodePilot works with any AI model provider.{" "}
              <span className="text-foreground font-medium">Choose your preferred LLM</span> — OpenAI, Anthropic,
              Google, or your own custom models.
            </p>
            <p className="text-muted-foreground">
              Our flexible architecture ensures you're never locked into a single provider, giving you the freedom to
              optimize for cost, performance, or compliance requirements.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <h3 className="text-foreground text-sm font-medium">OpenAI GPT-4</h3>
                </div>
                <p className="text-muted-foreground text-sm">Industry-leading performance for complex migrations.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <h3 className="text-foreground text-sm font-medium">Claude & Gemini</h3>
                </div>
                <p className="text-muted-foreground text-sm">Alternative providers for specialized use cases.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white text-xs">⚡</span>
                  </div>
                  <h3 className="text-foreground text-sm font-medium">Custom Models</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Bring your own fine-tuned models for domain-specific tasks.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center">
                    <span className="text-white text-xs">🔒</span>
                  </div>
                  <h3 className="text-foreground text-sm font-medium">On-Premise</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Deploy models within your infrastructure for maximum security.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mt-6 sm:mt-0">
            <div className="relative overflow-hidden rounded-lg border bg-card shadow-sm">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Model Selection</h3>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border/50">
                    <span className="text-sm text-foreground">GPT-4 Turbo</span>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/30">
                    <span className="text-sm text-muted-foreground">Claude 3 Opus</span>
                    <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/30">
                    <span className="text-sm text-muted-foreground">Gemini Pro</span>
                    <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/30">
                    <span className="text-sm text-muted-foreground">Custom Model</span>
                    <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
