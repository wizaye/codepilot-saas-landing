
import { Activity, DraftingCompass, Mail, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-xl md:max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Ready to Get Started?</h2>
                            <p className="mt-6">Join thousands of businesses that trust our platform to scale their operations and drive growth.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Mail className="size-5" />
                                24/7 Customer Support
                            </li>
                            <li>
                                <Zap className="size-5" />
                                Lightning Fast Setup
                            </li>
                            <li>
                                <Activity className="size-5" />
                                Real-time Analytics
                            </li>
                            <li>
                                <DraftingCompass className="size-5" />
                                Expert Consultation
                            </li>
                        </ul>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Button size="lg" className="px-8">
                                Start Free Trial
                            </Button>
                            <Button variant="outline" size="lg" className="px-8">
                                Schedule Demo
                            </Button>
                        </div>
                    </div>
                    <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
                        <div className="bg-gradient-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <img src="https://tailark.com/_next/image?url=%2Fpayments.png&w=3840&q=75" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                            <img src="https://tailark.com/_next/image?url=%2Fpayments-light.png&w=3840&q=75" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
