
import { motion } from "motion/react";

const features = [
  {
    icon: "🤖",
    title: "AI-Powered Migrations",
    description: "Automate complex migrations with intelligent code analysis and transformation.",
  },
  {
    icon: "🔄",
    title: "SDK Upgrades",
    description: "Seamlessly upgrade SDKs and dependencies without breaking changes.",
  },
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Execute migrations and updates in minutes, not hours or days.",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description: "Built with security-first principles for enterprise-grade applications.",
  },
  {
    icon: "🎯",
    title: "Precision Targeting",
    description: "Target specific code patterns and architectures with surgical precision.",
  },
  {
    icon: "📊",
    title: "Analytics & Insights",
    description: "Track migration progress and get insights into your codebase health.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="border py-1 px-4 rounded-lg text-sm">Features</div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Everything you need to migrate smarter
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful tools and AI-driven automation to handle your most complex migration challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative bg-card border rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold tracking-tight mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
