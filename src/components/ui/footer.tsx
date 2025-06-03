
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, MessageCircle, Globe, Mail, Phone, MapPin } from 'lucide-react';

const productLinks = [
    { href: "#", label: "Features" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "API Reference" },
    { href: "#", label: "Documentation" },
    { href: "#", label: "Integrations" },
    { href: "#", label: "Security" }
];

const solutionsLinks = [
    { href: "#", label: "Enterprise" },
    { href: "#", label: "Startups" },
    { href: "#", label: "Developers" },
    { href: "#", label: "Code Migration" },
    { href: "#", label: "Custom Models" },
    { href: "#", label: "Consulting" }
];

const resourcesLinks = [
    { href: "#", label: "Documentation" },
    { href: "#", label: "Help Center" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Case Studies" },
    { href: "#", label: "Webinars" },
    { href: "#", label: "Status Page" }
];

const companyLinks = [
    { href: "#", label: "About Us" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Press Kit" },
    { href: "#", label: "Partners" },
    { href: "#", label: "Contact" },
    { href: "#", label: "Investors" }
];

const footerLinks = [
    {
        name: "Product",
        links: productLinks
    },
    {
        name: "Solutions",
        links: solutionsLinks
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

export default function Footer() {
    return (
        <footer className="bg-background border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-16 lg:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Company Info */}
                        <div className="lg:col-span-4">
                            <Link to="/" aria-label="home" className="flex items-center space-x-2 mb-6">
                                <svg
                                    viewBox="0 0 78 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-auto">
                                    <path
                                        d="M3 0H5V18H3V0ZM13 0H15V18H13V0ZM18 3V5H0V3H18ZM0 15V13H18V15H0Z"
                                        fill="url(#logo-gradient)"
                                    />
                                    <path
                                        d="M27.06 7.054V12.239C27.06 12.5903 27.1393 12.8453 27.298 13.004C27.468 13.1513 27.7513 13.225 28.148 13.225H29.338V14.84H27.808C26.9353 14.84 26.2667 14.636 25.802 14.228C25.3373 13.82 25.105 13.157 25.105 12.239V7.054H24V5.473H25.105V3.144H27.06V5.473H29.338V7.054H27.06ZM30.4782 10.114C30.4782 9.17333 30.6709 8.34033 31.0562 7.615C31.4529 6.88967 31.9855 6.32867 32.6542 5.932C33.3342 5.524 34.0822 5.32 34.8982 5.32C35.6349 5.32 36.2752 5.46733 36.8192 5.762C37.3745 6.04533 37.8165 6.40233 38.1452 6.833V5.473H40.1002V14.84H38.1452V13.446C37.8165 13.888 37.3689 14.2563 36.8022 14.551C36.2355 14.8457 35.5895 14.993 34.8642 14.993C34.0595 14.993 33.3229 14.789 32.6542 14.381C31.9855 13.9617 31.4529 13.3837 31.0562 12.647C30.6709 11.899 30.4782 11.0547 30.4782 10.114ZM38.1452 10.148C38.1452 9.502 38.0092 8.941 37.7372 8.465C37.4765 7.989 37.1309 7.62633 36.7002 7.377C36.2695 7.12767 35.8049 7.003 35.3062 7.003C34.8075 7.003 34.3429 7.12767 33.9122 7.377C33.4815 7.615 33.1302 7.972 32.8582 8.448C32.5975 8.91267 32.4672 9.468 32.4672 10.114C32.4672 10.76 32.5975 11.3267 32.8582 11.814C33.1302 12.3013 33.4815 12.6753 33.9122 12.936C34.3542 13.1853 34.8189 13.31 35.3062 13.31C35.8049 13.31 36.2695 13.1853 36.7002 12.936C37.1309 12.6867 37.4765 12.324 37.7372 11.848C38.0092 11.3607 38.1452 10.794 38.1452 10.148ZM43.6317 4.232C43.2803 4.232 42.9857 4.113 42.7477 3.875C42.5097 3.637 42.3907 3.34233 42.3907 2.991C42.3907 2.63967 42.5097 2.345 42.7477 2.107C42.9857 1.869 43.2803 1.75 43.6317 1.75C43.9717 1.75 44.2607 1.869 44.4987 2.107C44.7367 2.345 44.8557 2.63967 44.8557 2.991C44.8557 3.34233 44.7367 3.637 44.4987 3.875C44.2607 4.113 43.9717 4.232 43.6317 4.232ZM44.5837 5.473V14.84H42.6457V5.473H44.5837ZM49.0661 2.26V14.84H47.1281V2.26H49.0661ZM50.9645 10.114C50.9645 9.17333 51.1572 8.34033 51.5425 7.615C51.9392 6.88967 52.4719 6.32867 53.1405 5.932C53.8205 5.524 54.5685 5.32 55.3845 5.32C56.1212 5.32 56.7615 5.46733 57.3055 5.762C57.8609 6.04533 58.3029 6.40233 58.6315 6.833V5.473H60.5865V14.84H58.6315V13.446C58.3029 13.888 57.8552 14.2563 57.2885 14.551C56.7219 14.8457 56.0759 14.993 55.3505 14.993C54.5459 14.993 53.8092 14.789 53.1405 14.381C52.4719 13.9617 51.9392 13.3837 51.5425 12.647C51.1572 11.899 50.9645 11.0547 50.9645 10.114ZM58.6315 10.148C58.6315 9.502 58.4955 8.941 58.2235 8.465C57.9629 7.989 57.6172 7.62633 57.1865 7.377C56.7559 7.12767 56.2912 7.003 55.7925 7.003C55.2939 7.003 54.8292 7.12767 54.3985 7.377C53.9679 7.615 53.6165 7.972 53.3445 8.448C53.0839 8.91267 52.9535 9.468 52.9535 10.114C52.9535 10.76 53.0839 11.3267 53.3445 11.814C53.6165 12.3013 53.9679 12.6753 54.3985 12.936C54.8405 13.1853 55.3052 13.31 55.7925 13.31C56.2912 13.31 56.7559 13.1853 57.1865 12.936C57.6172 12.6867 57.9629 12.324 58.2235 11.848C58.4955 11.3607 58.6315 10.794 58.6315 10.148ZM65.07 6.833C65.3533 6.357 65.7273 5.98867 66.192 5.728C66.668 5.456 67.229 5.32 67.875 5.32V7.326H67.382C66.6227 7.326 66.0447 7.51867 65.648 7.904C65.2627 8.28933 65.07 8.958 65.07 9.91V14.84H63.132V5.473H65.07V6.833ZM73.3624 10.165L77.6804 14.84H75.0624L71.5944 10.811V14.84H69.6564V2.26H71.5944V9.57L74.9944 5.473H77.6804L73.3624 10.165Z"
                                        fill="currentColor"
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
                            </Link>
                            <p className="text-muted-foreground mb-8 text-base leading-relaxed max-w-sm">
                                Accelerate your development workflow with AI-powered code transformation. 
                                Trusted by 10,000+ developers worldwide.
                            </p>
                            
                            {/* Contact Info */}
                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <Mail className="h-4 w-4" />
                                    <span>hello@tailark.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <Phone className="h-4 w-4" />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <MapPin className="h-4 w-4" />
                                    <span>San Francisco, CA</span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4">
                                <Link to="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted">
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                                <Link to="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted">
                                    <Twitter className="h-5 w-5" />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                                <Link to="https://discord.com" className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted">
                                    <MessageCircle className="h-5 w-5" />
                                    <span className="sr-only">Discord</span>
                                </Link>
                                <Link to="https://example.com" className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted">
                                    <Globe className="h-5 w-5" />
                                    <span className="sr-only">Website</span>
                                </Link>
                            </div>
                        </div>

                        {/* Footer Links */}
                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {footerLinks.map((linksGroup, index) => (
                                    <div key={index}>
                                        <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">{linksGroup.name}</h3>
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
                        </div>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="border-t py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Stay updated</h3>
                            <p className="text-muted-foreground text-sm">Get the latest updates on new features and AI developments.</p>
                        </div>
                        <div className="flex gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 text-sm bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                            />
                            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
                            <span>&copy; 2024 Tailark Inc. All rights reserved.</span>
                            <div className="flex items-center gap-4">
                                <Link to="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                                <Link to="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
                                <Link to="#" className="hover:text-foreground transition-colors">Cookie Policy</Link>
                            </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                            SOC 2 Compliant • GDPR Ready • Enterprise Grade
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
