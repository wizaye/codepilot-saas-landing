
"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CheckIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import NumberFlow from "@number-flow/react"
import { motion } from "motion/react"

export type PlanLevel = "basic" | "pro" | "enterprise" | string

export interface PricingFeature {
  name: string
  included: PlanLevel | null
}

export interface PricingPlan {
  name: string
  level: PlanLevel
  price: {
    monthly: number
    yearly: number
  }
  popular?: boolean
  description: string
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

export function PricingTable({
  features,
  plans,
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

  return (
    <section className="bg-background text-foreground py-32 px-4">
      <div className={cn("w-full max-w-6xl mx-auto px-4", containerClassName)} {...props}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="border py-1 px-4 rounded-lg text-sm">Pricing</div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Choose Your AI Model Plan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Flexible pricing for every need. Switch between providers and scale as you grow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 text-sm bg-muted p-1 rounded-lg">
            <button
              type="button"
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-4 py-2 rounded-md transition-colors font-medium",
                !isYearly ? "bg-background shadow-sm" : "text-muted-foreground hover:text-foreground",
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsYearly(true)}
              className={cn(
                "px-4 py-2 rounded-md transition-colors font-medium",
                isYearly ? "bg-background shadow-sm" : "text-muted-foreground hover:text-foreground",
              )}
            >
              Yearly <span className="text-green-600 text-xs ml-1">Save 20%</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative p-6 rounded-2xl border transition-all hover:shadow-lg",
                selectedPlan === plan.level && "ring-2 ring-primary shadow-lg",
                plan.popular && "border-primary"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                
                <div className="flex items-baseline justify-center gap-1 mb-6">
                  <NumberFlow
                    format={{
                      style: "currency",
                      currency: "USD",
                      trailingZeroDisplay: "stripIfInteger",
                    }}
                    value={isYearly ? plan.price.yearly : plan.price.monthly}
                    className="text-3xl font-bold"
                  />
                  <span className="text-muted-foreground">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>

                <Button
                  onClick={() => handlePlanSelect(plan.level)}
                  variant={selectedPlan === plan.level ? "default" : "outline"}
                  className="w-full"
                >
                  {selectedPlan === plan.level ? "Selected" : "Select Plan"}
                </Button>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="border rounded-2xl overflow-hidden bg-card"
        >
          <div className="overflow-x-auto">
            <div className="min-w-[640px]">
              <div className="flex items-center p-6 bg-muted/30 border-b">
                <div className="flex-1 text-lg font-semibold">Features Comparison</div>
                <div className="flex items-center gap-8">
                  {plans.map((plan) => (
                    <div key={plan.level} className="w-24 text-center font-semibold">
                      {plan.name}
                    </div>
                  ))}
                </div>
              </div>
              
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className={cn(
                    "flex items-center p-6 border-b last:border-b-0 transition-colors",
                    index % 2 === 0 && "bg-muted/10"
                  )}
                >
                  <div className="flex-1 font-medium">{feature.name}</div>
                  <div className="flex items-center gap-8">
                    {plans.map((plan) => (
                      <div key={plan.level} className="w-24 flex justify-center">
                        {shouldShowCheck(feature.included, plan.level) ? (
                          <CheckIcon className="w-5 h-5 text-green-600" />
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
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function shouldShowCheck(included: PricingFeature["included"], level: string): boolean {
  if (included === "enterprise") return level === "enterprise"
  if (included === "pro") return level === "pro" || level === "enterprise"
  if (included === "basic") return level === "basic" || level === "pro" || level === "enterprise"
  return false
}

// Default data for AI model pricing
const features = [
  { name: "API Access", included: "basic" },
  { name: "Community Support", included: "basic" },
  { name: "Basic Models (GPT-3.5)", included: "basic" },
  { name: "Advanced Models (GPT-4)", included: "pro" },
  { name: "Priority Support", included: "pro" },
  { name: "Custom Fine-tuning", included: "pro" },
  { name: "Enterprise Models", included: "enterprise" },
  { name: "Dedicated Support", included: "enterprise" },
  { name: "SLA Guarantee", included: "enterprise" },
  { name: "On-premise Deployment", included: "enterprise" },
];

const plans = [
  {
    name: "Basic",
    level: "basic",
    price: { monthly: 29, yearly: 290 },
    description: "Perfect for individuals and small projects",
  },
  {
    name: "Pro",
    level: "pro",
    price: { monthly: 99, yearly: 990 },
    popular: true,
    description: "Ideal for growing teams and businesses",
  },
  {
    name: "Enterprise",
    level: "enterprise",
    price: { monthly: 299, yearly: 2990 },
    description: "For large organizations with custom needs",
  },
];

export default function PricingSection() {
  return (
    <PricingTable
      features={features}
      plans={plans}
      defaultPlan="pro"
      defaultInterval="monthly"
      onPlanSelect={(plan) => console.log("Selected plan:", plan)}
    />
  );
}
