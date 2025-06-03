
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, MessageCircle, Globe, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const communityLinks = [
    { href: "#", label: "GitHub Discussions" },
    { href: "#", label: "Discord Server" },
    { href: "#", label: "Stack Overflow" },
    { href: "#", label: "Reddit" }
];

const resourcesLinks = [
    { href: "#", label: "Getting Started" },
    { href: "#", label: "API Reference" },
    { href: "#", label: "Examples" },
    { href: "#", label: "Templates" },
    { href: "#", label: "Plugins" },
    { href: "#", label: "Best Practices" }
];

const companyLinks = [
    { href: "#", label: "About" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Contact" }
];

const footerLinks = [
    {
        name: "Community",
        links: communityLinks
    },
    {
        name: "Resources",
        links: resourcesLinks
    },
    {
        name: "Company",
        links: companyLinks
    }
];

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center space-x-2', className)}>
            <svg
                viewBox="0 0 78 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-auto">
                <path
                    d="M3 0H5V18H3V0ZM13 0H15V18H13V0ZM18 3V5H0V3H18ZM0 15V13H18V15H0Z"
                    fill="url(#logo-gradient)"
                />
                <defs>
                    <linearGradient
                        id="logo-gradient"
                        x1="10"
                        y1="0"
                        x2="10"
                        y2="20"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9B99FE" />
                        <stop
                            offset="1"
                            stopColor="#2BC8B7"
                        />
                    </linearGradient>
                </defs>
            </svg>
            <span className="text-xl font-bold text-foreground">CodePilot</span>
        </div>
    )
}

export default function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Logo and Description */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link to="/" aria-label="home" className="inline-block mb-6">
                            <Logo />
                        </Link>
                        <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                            An open-source project dedicated to providing high-quality, accessible components for modern web development. Licensed under MIT.
                        </p>
                        <div className="flex gap-4">
                            <Link to="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link to="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link to="https://discord.com" className="text-muted-foreground hover:text-foreground transition-colors">
                                <MessageCircle className="h-5 w-5" />
                                <span className="sr-only">Discord</span>
                            </Link>
                            <Link to="https://example.com" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Globe className="h-5 w-5" />
                                <span className="sr-only">Website</span>
                            </Link>
                        </div>
                    </div>

                    {/* Footer Links */}
                    {footerLinks.map((linksGroup, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-foreground mb-4">{linksGroup.name}</h3>
                            <ul className="space-y-3">
                                {linksGroup.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            to={link.href}
                                            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="border-t pt-6 lg:pt-8 mt-12 lg:mt-16 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-muted-foreground text-center sm:text-left">
                        <span>&copy; 2024 CodePilot. All rights reserved.</span>
                        <div className="flex items-center gap-4">
                            <Link to="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                            <Link to="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
                            <Link to="#" className="hover:text-foreground transition-colors">MIT License</Link>
                        </div>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                        Made with <Heart className="h-4 w-4 text-red-500" /> for the community
                    </div>
                </div>
            </div>
        </footer>
    );
}
