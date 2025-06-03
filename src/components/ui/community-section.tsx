import { Button } from "@/components/ui/button";
import { Github, Star, Heart } from "lucide-react";
import { motion } from "motion/react";

export function CommunitySection(){
    return (
        <section className="py-32">
            <div className="pb-36">
                <div className="mx-auto px-6 max-w-5xl">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="flex justify-center mb-6"
                        >
                            <div className="border py-1 px-4 rounded-lg text-sm">Community</div>
                        </motion.div>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
                        >
                            Built with ❤️ by the Open Source Community
                        </motion.h2>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto"
                        >
                            Join thousands of developers contributing to our mission of creating beautiful, accessible, and performant web experiences for everyone.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8"
                        >
                            <div className="flex items-center gap-2 text-sm bg-muted px-3 sm:px-4 py-2 rounded-full">
                                <Star className="h-4 w-4 text-yellow-500" />
                                <span className="font-medium">2.1k stars</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm bg-muted px-3 sm:px-4 py-2 rounded-full">
                                <Github className="h-4 w-4" />
                                <span className="font-medium">450+ contributors</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm bg-muted px-3 sm:px-4 py-2 rounded-full">
                                <Heart className="h-4 w-4 text-red-500" />
                                <span className="font-medium">Open Source</span>
                            </div>
                        </motion.div>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="mt-12 max-w-lg mx-auto flex justify-center flex-wrap gap-3"
                    >
                        <a href="https://github.com" target="_blank" title="Community Member" className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-background shadow-lg hover:scale-105 transition-transform">
                            <img alt="Community Member" src="https://randomuser.me/api/portraits/men/1.jpg" loading="lazy" className="h-full w-full object-cover" />
                        </a>
                        <a href="https://github.com" target="_blank" title="Community Member" className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-background shadow-lg hover:scale-105 transition-transform">
                            <img alt="Community Member" src="https://randomuser.me/api/portraits/men/2.jpg" loading="lazy" className="h-full w-full object-cover" />
                        </a>
                        <a href="https://github.com" target="_blank" title="Community Member" className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-background shadow-lg hover:scale-105 transition-transform">
                            <img alt="Community Member" src="https://randomuser.me/api/portraits/men/3.jpg" loading="lazy" className="h-full w-full object-cover" />
                        </a>
                        <a href="https://github.com" target="_blank" title="Community Member" className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-background shadow-lg hover:scale-105 transition-transform">
                            <img alt="Community Member" src="https://randomuser.me/api/portraits/men/4.jpg" loading="lazy" className="h-full w-full object-cover" />
                        </a>
                        <a href="https://github.com" target="_blank" title="Community Member" className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-background shadow-lg hover:scale-105 transition-transform">
                            <img alt="Community Member" src="https://randomuser.me/api/portraits/men/5.jpg" loading="lazy" className="h-full w-full object-cover" />
                        </a>
                        <a href="https://github.com" target="_blank" title="Community Member" className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-background shadow-lg hover:scale-105 transition-transform">
                            <img alt="Community Member" src="https://randomuser.me/api/portraits/men/6.jpg" loading="lazy" className="h-full w-full object-cover" />
                        </a>
                        <a href="https://github.com" target="_blank" title="Community Member" className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-background shadow-lg hover:scale-105 transition-transform">
                            <img alt="Community Member" src="https://randomuser.me/api/portraits/men/7.jpg" loading="lazy" className="h-full w-full object-cover" />
                        </a>
                        <a href="https://github.com" target="_blank" title="Community Member" className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-background shadow-lg hover:scale-105 transition-transform">
                            <img alt="Community Member" src="https://randomuser.me/api/portraits/men/8.jpg" loading="lazy" className="h-full w-full object-cover" />
                        </a>
                        <a href="https://github.com" target="_blank" title="Community Member" className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-background shadow-lg hover:scale-105 transition-transform">
                            <img alt="Community Member" src="https://randomuser.me/api/portraits/men/9.jpg" loading="lazy" className="h-full w-full object-cover" />
                        </a>
                        <a href="https://github.com" target="_blank" title="Community Member" className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-background shadow-lg hover:scale-105 transition-transform">
                            <img alt="Community Member" src="https://randomuser.me/api/portraits/men/10.jpg" loading="lazy" className="h-full w-full object-cover" />
                        </a>
                        <a href="https://github.com" target="_blank" title="Community Member" className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-background shadow-lg hover:scale-105 transition-transform">
                            <img alt="Community Member" src="https://randomuser.me/api/portraits/women/1.jpg" loading="lazy" className="h-full w-full object-cover" />
                        </a>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="mt-12 flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
                    >
                        <Button asChild className="flex-1">
                            <a href="#" target="_blank">Contribute</a>
                        </Button>
                        <Button variant="outline" asChild className="flex-1">
                            <a href="#" target="_blank">Documentation</a>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
