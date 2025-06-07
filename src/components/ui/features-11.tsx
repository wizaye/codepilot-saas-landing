
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Globe, Activity, BarChart3, TrendingUp, Users } from 'lucide-react'
import NumberFlow from "@number-flow/react"
import { motion } from "framer-motion"

export function Features() {
    return (
        <section className="py-16 md:py-32 font-funnel">
            <div className="mx-auto max-w-5xl px-6">
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

                <div className="mx-auto grid gap-2 sm:grid-cols-5">
                    <Card className="group overflow-hidden shadow-black/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl">
                        <CardHeader>
                            <div className="md:p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <TrendingUp className="h-5 w-5 text-green-600" />
                                    <span className="text-xs text-green-600 bg-green-50 dark:bg-green-950 px-2 py-1 rounded-full">
                                        +24%
                                    </span>
                                </div>
                                <p className="font-medium font-funnel">Migration Success Rate</p>
                                <p className="text-muted-foreground mt-3 max-w-sm text-sm font-funnel">Track your automated code migrations with real-time success analytics and comprehensive reporting.</p>
                            </div>
                        </CardHeader>

                        <div className="relative h-fit pl-6 md:pl-12">
                            <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,hsl(var(--background))_100%)]"></div>

                            <div className="bg-background overflow-hidden rounded-tl-lg border-l border-t pl-2 pt-2 dark:bg-zinc-950">
                                <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg border">
                                            <div className="text-2xl font-bold text-foreground">
                                                <NumberFlow value={12500} />
                                            </div>
                                            <p className="text-sm text-muted-foreground font-funnel">Successful Migrations</p>
                                        </div>
                                        <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg border">
                                            <div className="text-2xl font-bold text-foreground">
                                                <NumberFlow value={99.9} />%
                                            </div>
                                            <p className="text-sm text-muted-foreground font-funnel">Success Rate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl">
                        <div className="flex items-center gap-2 m-6 mb-0">
                            <Users className="h-5 w-5 text-blue-600" />
                            <span className="text-xs text-blue-600 bg-blue-50 dark:bg-blue-950 px-2 py-1 rounded-full">
                                +18%
                            </span>
                        </div>
                        <p className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl md:p-6 font-funnel">
                            <NumberFlow value={2400} />+ Active Developers
                        </p>

                        <CardContent className="mt-auto h-fit">
                            <div className="relative mb-6 sm:mb-0">
                                <div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,hsl(var(--background))_100%)]"></div>
                                <div className="aspect-76/59 overflow-hidden rounded-r-lg border">
                                    <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 h-full flex items-center justify-center">
                                        <div className="text-center">
                                            <Activity className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                                            <div className="text-sm text-muted-foreground font-funnel">Developer Activity</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="group p-6 shadow-black/5 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12">
                        <div className="flex items-center gap-2 mb-4">
                            <BarChart3 className="h-5 w-5 text-orange-600" />
                            <span className="text-xs text-orange-600 bg-orange-50 dark:bg-orange-950 px-2 py-1 rounded-full">
                                -67%
                            </span>
                        </div>
                        <p className="mx-auto mb-12 max-w-md text-balance text-center text-lg font-semibold sm:text-2xl font-funnel">
                            <NumberFlow value={85} />% Time Saved
                        </p>

                        <div className="flex justify-center gap-6">
                            <div className="inset-shadow-sm dark:inset-shadow-white/5 bg-muted/35 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-lg ring dark:shadow-white/5 dark:ring-black">
                                <span className="absolute right-2 top-1 block text-sm">⚡</span>
                                <BarChart3 className="mt-auto size-4" />
                            </div>
                            <div className="inset-shadow-sm dark:inset-shadow-white/5 bg-muted/35 flex aspect-square size-16 items-center justify-center rounded-[7px] border p-3 shadow-lg ring dark:shadow-white/5 dark:ring-black">
                                <span>📊</span>
                            </div>
                        </div>
                    </Card>

                    <Card className="group relative shadow-black/5 sm:col-span-3 sm:rounded-none sm:rounded-br-xl">
                        <CardHeader className="p-6 md:p-12">
                            <div className="flex items-center gap-2 mb-4">
                                <Activity className="h-5 w-5 text-purple-600" />
                                <span className="text-xs text-purple-600 bg-purple-50 dark:bg-purple-950 px-2 py-1 rounded-full">
                                    Live
                                </span>
                            </div>
                            <p className="font-medium font-funnel">Integration Ecosystem</p>
                            <p className="text-muted-foreground mt-2 max-w-sm text-sm font-funnel">Connect with your favorite development tools and platforms seamlessly.</p>
                        </CardHeader>
                        <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
                            <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
                                <div className="rounded-lg aspect-square border border-dashed"></div>
                                <div className="rounded-lg bg-muted/50 flex aspect-square items-center justify-center border p-4">
                                    <img
                                        className="m-auto size-8 invert dark:invert-0"
                                        src="https://oxymor-ns.tailus.io/logos/linear.svg"
                                        alt="Linear logo"
                                        width="32"
                                        height="32"
                                    />
                                </div>
                                <div className="rounded-lg aspect-square border border-dashed"></div>
                                <div className="rounded-lg bg-muted/50 flex aspect-square items-center justify-center border p-4">
                                    <img
                                        className="m-auto size-8 invert dark:invert-0"
                                        src="https://oxymor-ns.tailus.io/logos/netlify.svg"
                                        alt="Netlify logo"
                                        width="32"
                                        height="32"
                                    />
                                </div>
                                <div className="rounded-lg aspect-square border border-dashed"></div>
                                <div className="rounded-lg bg-muted/50 flex aspect-square items-center justify-center border p-4">
                                    <img
                                        className="m-auto size-8 invert dark:invert-0"
                                        src="https://oxymor-ns.tailus.io/logos/github.svg"
                                        alt="github logo"
                                        width="32"
                                        height="32"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
