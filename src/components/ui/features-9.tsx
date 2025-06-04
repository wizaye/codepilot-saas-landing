
'use client'
import { Activity, BarChart3, TrendingUp, Users } from 'lucide-react'
import { Area, AreaChart, CartesianGrid } from 'recharts'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import NumberFlow from "@number-flow/react"
import { motion } from "framer-motion"

export function Features() {
    return (
        <section className="px-4 py-16 md:py-32 font-funnel">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex justify-center mb-6">
                        <div className="border py-1 px-4 rounded-lg text-sm font-funnel">
                            Metrics
                        </div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto font-funnel">
                        Performance You Can Measure
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-funnel">
                        Track your migration success with real-time analytics and comprehensive reporting.
                    </p>
                </motion.div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-card border rounded-lg p-6"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <TrendingUp className="h-5 w-5 text-green-600" />
                            <span className="text-xs text-green-600 bg-green-50 dark:bg-green-950 px-2 py-1 rounded-full">
                                +24%
                            </span>
                        </div>
                        <div className="space-y-1">
                            <div className="text-2xl font-bold text-foreground">
                                <NumberFlow value={12500} />
                            </div>
                            <p className="text-sm text-muted-foreground font-funnel">Successful Migrations</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-card border rounded-lg p-6"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <Users className="h-5 w-5 text-blue-600" />
                            <span className="text-xs text-blue-600 bg-blue-50 dark:bg-blue-950 px-2 py-1 rounded-full">
                                +18%
                            </span>
                        </div>
                        <div className="space-y-1">
                            <div className="text-2xl font-bold text-foreground">
                                <NumberFlow value={2400} />+
                            </div>
                            <p className="text-sm text-muted-foreground font-funnel">Active Developers</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-card border rounded-lg p-6"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <Activity className="h-5 w-5 text-purple-600" />
                            <span className="text-xs text-purple-600 bg-purple-50 dark:bg-purple-950 px-2 py-1 rounded-full">
                                99.9%
                            </span>
                        </div>
                        <div className="space-y-1">
                            <div className="text-2xl font-bold text-foreground">
                                <NumberFlow value={99.9} />%
                            </div>
                            <p className="text-sm text-muted-foreground font-funnel">Success Rate</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-card border rounded-lg p-6"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <BarChart3 className="h-5 w-5 text-orange-600" />
                            <span className="text-xs text-orange-600 bg-orange-50 dark:bg-orange-950 px-2 py-1 rounded-full">
                                -67%
                            </span>
                        </div>
                        <div className="space-y-1">
                            <div className="text-2xl font-bold text-foreground">
                                <NumberFlow value={85} />%
                            </div>
                            <p className="text-sm text-muted-foreground font-funnel">Time Saved</p>
                        </div>
                    </motion.div>
                </div>

                {/* Chart Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-card border rounded-lg p-6"
                >
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                            <Activity className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground font-funnel">Migration Activity</span>
                        </div>
                        <h3 className="text-xl font-semibold font-funnel">Weekly Migration Trends</h3>
                        <p className="text-sm text-muted-foreground font-funnel">
                            Monitor migration performance and identify peak usage periods.
                        </p>
                    </div>
                    <MonitoringChart />
                </motion.div>
            </div>
        </section>
    )
}

const chartConfig = {
    migrations: {
        label: 'Migrations',
        color: '#2563eb',
    },
    success: {
        label: 'Success Rate',
        color: '#10b981',
    },
} satisfies ChartConfig

const chartData = [
    { week: 'Week 1', migrations: 156, success: 148 },
    { week: 'Week 2', migrations: 205, success: 198 },
    { week: 'Week 3', migrations: 287, success: 284 },
    { week: 'Week 4', migrations: 423, success: 421 },
    { week: 'Week 5', migrations: 389, success: 385 },
    { week: 'Week 6', migrations: 512, success: 510 },
]

const MonitoringChart = () => {
    return (
        <ChartContainer className="h-80 w-full" config={chartConfig}>
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 0,
                    right: 0,
                    top: 20,
                    bottom: 20,
                }}>
                <defs>
                    <linearGradient id="fillMigrations" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-migrations)" stopOpacity={0.8} />
                        <stop offset="55%" stopColor="var(--color-migrations)" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="fillSuccess" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-success)" stopOpacity={0.8} />
                        <stop offset="55%" stopColor="var(--color-success)" stopOpacity={0.1} />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <ChartTooltip 
                    cursor={false} 
                    content={<ChartTooltipContent className="dark:bg-muted" />} 
                />
                <Area 
                    strokeWidth={2} 
                    dataKey="success" 
                    type="natural" 
                    fill="url(#fillSuccess)" 
                    fillOpacity={0.4} 
                    stroke="var(--color-success)" 
                    stackId="a" 
                />
                <Area 
                    strokeWidth={2} 
                    dataKey="migrations" 
                    type="natural" 
                    fill="url(#fillMigrations)" 
                    fillOpacity={0.4} 
                    stroke="var(--color-migrations)" 
                    stackId="a" 
                />
            </AreaChart>
        </ChartContainer>
    )
}
