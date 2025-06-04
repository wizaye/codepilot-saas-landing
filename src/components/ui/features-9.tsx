
'use client'
import { Activity, BarChart3, TrendingUp, Users } from 'lucide-react'
import DottedMap from 'dotted-map'
import { Area, AreaChart, CartesianGrid } from 'recharts'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import NumberFlow from "@number-flow/react"
import { motion } from "framer-motion"

export function Features() {
    return (
        <section className="px-4 py-16 md:py-32 font-funnel">
            <div className="mx-auto grid max-w-5xl border md:grid-cols-2">
                <div>
                    <div className="p-6 sm:p-12">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <TrendingUp className="size-4" />
                            Migration Analytics
                        </span>

                        <p className="mt-8 text-2xl font-semibold">Real-time migration tracking across all your projects.</p>
                    </div>

                    <div aria-hidden className="relative">
                        <div className="absolute inset-0 z-10 m-auto size-fit">
                            <div className="rounded-[--radius] bg-background z-[1] dark:bg-muted relative flex size-fit w-fit items-center gap-2 border px-3 py-1 text-xs font-medium shadow-md shadow-black/5">
                                <span className="text-lg">🚀</span> Last migration completed successfully
                            </div>
                            <div className="rounded-[--radius] bg-background absolute inset-2 -bottom-2 mx-auto border px-3 py-4 text-xs font-medium shadow-md shadow-black/5 dark:bg-zinc-900"></div>
                        </div>

                        <div className="relative overflow-hidden">
                            <div className="[background-image:radial-gradient(var(--tw-gradient-stops))] z-1 to-background absolute inset-0 from-transparent to-75%"></div>
                            <Map />
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden border-t bg-zinc-50 p-6 sm:p-12 md:border-0 md:border-l dark:bg-transparent">
                    <div className="relative z-10">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <Users className="size-4" />
                            Developer Support
                        </span>

                        <p className="my-8 text-2xl font-semibold">24/7 support for developers, by developers.</p>
                    </div>
                    <div aria-hidden className="flex flex-col gap-8">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="flex justify-center items-center size-5 rounded-full border">
                                    <span className="size-3 rounded-full bg-primary"/>
                                </span>
                                <span className="text-muted-foreground text-xs">Today 2:14 PM</span>
                            </div>
                            <div className="rounded-[--radius] bg-background mt-1.5 w-3/5 border p-3 text-xs">Migration failed on step 3, need help debugging</div>
                        </div>

                        <div>
                            <div className="rounded-[--radius] mb-1 ml-auto w-3/5 bg-blue-600 p-3 text-xs text-white">I see the issue! The foreign key constraint is causing the failure. Let me walk you through the fix...</div>
                            <span className="text-muted-foreground block text-right text-xs">Now</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-full border-y p-12">
                    <motion.p 
                        className="text-center text-4xl font-semibold lg:text-7xl font-funnel"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <NumberFlow value={99.9} />% Uptime
                    </motion.p>
                </div>
                <div className="relative col-span-full">
                    <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-12">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <Activity className="size-4" />
                            Migration Activity
                        </span>

                        <p className="my-8 text-2xl font-semibold">
                            Monitor your migration performance in real-time. <span className="text-muted-foreground">Track success rates and identify bottlenecks.</span>
                        </p>
                    </div>
                    <MonitoringChart />
                </div>
            </div>
        </section>
    )
}

const map = new DottedMap({ height: 55, grid: 'diagonal' })

const points = map.getPoints()

const svgOptions = {
    backgroundColor: 'var(--color-background)',
    color: 'currentColor',
    radius: 0.15,
}

const Map = () => {
    const viewBox = `0 0 120 60`
    return (
        <svg viewBox={viewBox} style={{ background: svgOptions.backgroundColor }}>
            {points.map((point, index) => (
                <circle key={index} cx={point.x} cy={point.y} r={svgOptions.radius} fill={svgOptions.color} />
            ))}
        </svg>
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
    { month: 'Jan', migrations: 156, success: 148 },
    { month: 'Feb', migrations: 205, success: 198 },
    { month: 'Mar', migrations: 287, success: 284 },
    { month: 'Apr', migrations: 423, success: 421 },
    { month: 'May', migrations: 389, success: 385 },
    { month: 'Jun', migrations: 512, success: 510 },
]

const MonitoringChart = () => {
    return (
        <ChartContainer className="h-120 aspect-auto md:h-96" config={chartConfig}>
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 0,
                    right: 0,
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
                <ChartTooltip active cursor={false} content={<ChartTooltipContent className="dark:bg-muted" />} />
                <Area strokeWidth={2} dataKey="success" type="stepBefore" fill="url(#fillSuccess)" fillOpacity={0.1} stroke="var(--color-success)" stackId="a" />
                <Area strokeWidth={2} dataKey="migrations" type="stepBefore" fill="url(#fillMigrations)" fillOpacity={0.1} stroke="var(--color-migrations)" stackId="a" />
            </AreaChart>
        </ChartContainer>
    )
}
