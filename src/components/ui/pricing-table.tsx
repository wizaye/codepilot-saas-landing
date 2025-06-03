
"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Check, ArrowRight } from "lucide-react"
import { motion } from "motion/react"

export type PlanLevel = "basic" | "pro" | "enterprise" | string

export interface PricingFeature {
  name: string
  included: PlanLevel | "all" | null
}

export interface PricingPlan {
  name: string
  level: PlanLevel
  description: string
  price: {
    monthly: number
    yearly: number
  }
  popular?: boolean
}

export interface PricingTableProps
  extends React.HTMLAttributes<HTMLDivElement> {
  features: PricingFeature[]
  plans: PricingPlan[]
  onPlanSelect?: (plan: PlanLevel) => void
  defaultPlan?: PlanLevel
  defaultInterval?: "monthly" | "yearly"
  containerClassName?: string
  buttonClassName?: string
}

const defaultFeatures: PricingFeature[] = [
  { name: "OpenAI GPT-4 Access", included: "basic" },
  { name: "Basic Migration Tools", included: "basic" },
  { name: "Community Support", included: "basic" },
  { name: "Claude & Gemini Models", included: "pro" },
  { name: "Advanced Migration Analytics", included: "pro" },
  { name: "Priority Support", included: "pro" },
  { name: "Custom Model Integration", included: "enterprise" },
  { name: "On-Premise Deployment", included: "enterprise" },
  { name: "24/7 Dedicated Support", included: "enterprise" },
  { name: "Enterprise SLA", included: "enterprise" },
];

const defaultPlans: PricingPlan[] = [
  {
    name: "Basic",
    level: "basic",
    description: "Perfect for individual developers",
    price: { monthly: 29, yearly: 290 },
  },
  {
    name: "Pro",
    level: "pro", 
    description: "Best for growing teams",
    price: { monthly: 99, yearly: 990 },
    popular: true,
  },
  {
    name: "Enterprise",
    level: "enterprise",
    description: "For large organizations",
    price: { monthly: 299, yearly: 2990 },
  },
];

export function PricingTable({
  features = defaultFeatures,
  plans = defaultPlans,
  onPlanSelect,
  defaultPlan = "pro",
  defaultInterval = "monthly",
  className,
  containerClassName,
  buttonClassName,
  ...props
}: PricingTableProps) {
  const [isYearly, setIsYearly] = React.useState(defaultInterval === "yearly")
  const [selectedPlan, setSelectedPlan] = React.useState<PlanLevel>(defaultPlan)

  const handlePlanSelect = (plan: PlanLevel) => {
    setSelectedPlan(plan)
    onPlanSelect?.(plan)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section className="bg-background text-foreground py-32 px-4">
      <div className={cn("w-full max-w-6xl mx-auto px-4", containerClassName)} {...props}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="border py-1 px-4 rounded-lg text-sm">Pricing</div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Choose Your Migration Plan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start free, scale as you grow. All plans include our core migration tools.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-sm p-1 bg-muted rounded-lg">
            <button
              type="button"
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-4 py-2 rounded-md transition-all",
                !isYearly ? "bg-background shadow-sm" : "text-muted-foreground"
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsYearly(true)}
              className={cn(
                "px-4 py-2 rounded-md transition-all",
                isYearly ? "bg-background shadow-sm" : "text-muted-foreground"
              )}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={cn(
                "relative p-8 rounded-2xl border bg-card transition-all duration-300 hover:shadow-lg",
                plan.popular && "ring-2 ring-primary border-primary",
                selectedPlan === plan.level && "ring-2 ring-blue-500"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                
                <div className="flex items-baseline justify-center gap-1 mb-6">
                  <span className="text-3xl font-bold">
                    {formatPrice(isYearly ? plan.price.yearly : plan.price.monthly)}
                  </span>
                  <span className="text-muted-foreground">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>

                <Button
                  onClick={() => handlePlanSelect(plan.level)}
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full mb-6"
                >
                  Choose {plan.name}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="border border-border rounded-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <div className="min-w-[640px] divide-y divide-border">
              <div className="flex items-center p-6 bg-muted/50">
                <div className="flex-1 text-lg font-semibold">Features</div>
                <div className="flex items-center gap-8 text-sm">
                  {plans.map((plan) => (
                    <div key={plan.level} className="w-24 text-center font-semibold">
                      {plan.name}
                    </div>
                  ))}
                </div>
              </div>
              {features.map((feature) => (
                <div key={feature.name} className="flex items-center p-6">
                  <div className="flex-1 text-sm font-medium">{feature.name}</div>
                  <div className="flex items-center gap-8 text-sm">
                    {plans.map((plan) => (
                      <div key={plan.level} className="w-24 flex justify-center">
                        {shouldShowCheck(feature.included, plan.level) ? (
                          <Check className="w-5 h-5 text-green-600" />
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button size="lg" className="px-8">
            Get Started with {plans.find((p) => p.level === selectedPlan)?.name}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function shouldShowCheck(
  included: PricingFeature["included"],
  level: string,
): boolean {
  if (included === "all") return true
  if (included === "enterprise" && level === "enterprise") return true
  if (included === "pro" && (level === "pro" || level === "enterprise")) return true
  if (included === "basic" && (level === "basic" || level === "pro" || level === "enterprise")) return true
  return false
}

export default PricingTable;
