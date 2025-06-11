import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        to="#link"
                                        className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950 font-funnel">
                                        <span className="text-foreground text-sm">Introducing Support for AI Models</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                        
                                    <h1
                                        className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] font-funnel">
                                        Migrate Smarter<br />Build Faster
                                    </h1>
                                    <p
                                        className="mx-auto mt-8 max-w-2xl text-balance text-lg font-funnel">
                                        Automate migrations, SDK upgrades, and repetitive dev tasks so you can focus on building, not babysitting versions.
                                    </p>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[14px] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base font-funnel">
                                            <Link to="#link">
                                                <span className="text-nowrap">Download</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5 font-funnel">
                                        <Link to="#link">
                                            <span className="text-nowrap">Go to docs</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-background pb-8 pt-16 md:pb-16 md:pt-24">
                    <div className="group relative m-auto max-w-5xl px-6">
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                            <Link
                                to="/"
                                className="block text-sm duration-150 hover:opacity-75 font-funnel">
                                <span>Works with your favourite model providers.</span>

                                <ChevronRight className="ml-1 inline-block size-3" />
                            </Link>
                        </div>
                        <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                            <div className="flex">
                                <img
                                    className="mx-auto h-8 w-fit dark:invert opacity-70 hover:opacity-100 transition-opacity"
                                    src="https://img.logo.dev/openai.com?token=pk_J5OZ7CacQmekbGRbXKo2Lw"
                                    alt="OpenAI Logo"
                                    height="32"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-8 w-fit dark:invert opacity-70 hover:opacity-100 transition-opacity"
                                    src="https://img.logo.dev/claude.ai?token=pk_J5OZ7CacQmekbGRbXKo2Lw"
                                    alt="Claude Logo"
                                    height="32"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-8 w-fit dark:invert opacity-70 hover:opacity-100 transition-opacity"
                                    src="https://img.logo.dev/mistral.ai?token=pk_J5OZ7CacQmekbGRbXKo2Lw"
                                    alt="Mistral AI Logo"
                                    height="32"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-8 w-fit dark:invert opacity-70 hover:opacity-100 transition-opacity"
                                    src="https://img.logo.dev/grok.com?token=pk_J5OZ7CacQmekbGRbXKo2Lw"
                                    alt="Grok Logo"
                                    height="32"
                                    width="auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Features', href: '#link' },
    { name: 'Solution', href: '#link' },
    { name: 'Pricing', href: '#link' },
    { name: 'About', href: '#link' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12 font-funnel', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                to="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm font-funnel">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            to={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base font-funnel">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                to={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <ThemeToggle />
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden', 'font-funnel')}>
                                    <Link to="#">
                                        <span>Login</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden', 'font-funnel')}>
                                    <Link to="#">
                                        <span>Sign Up</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden', 'font-funnel')}>
                                    <Link to="#">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <svg data-logo="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 213 43" className={cn('h-8 w-auto', className)}>
            <g id="logogram" transform="translate(0, 1) rotate(0)">
                <path d="M39.8278 33.3026L39.8308 33.3061L33.3607 38.9831C32.0341 40.1758 30.3188 40.8515 28.5307 40.8849L28.5157 40.8852H6.3433C5.52252 40.9197 4.70461 40.766 3.9529 40.4361C3.18789 40.1004 2.51205 39.5912 1.97981 38.9489C1.44755 38.3069 1.07385 37.55 0.888129 36.7388C0.705857 35.9416 0.709812 35.1125 0.900558 34.3168L2.60764 25.6248C2.75949 24.8681 3.16084 24.1833 3.74828 23.6792L3.83198 23.6074C3.65027 23.3331 3.51734 23.0292 3.43941 22.709C3.33602 22.2843 3.3324 21.8424 3.42763 21.4174L5.13811 12.7091L5.14074 12.6968C5.47362 11.1342 6.31209 9.72339 7.52782 8.68041L13.4516 3.48275C13.7257 3.16967 14.0266 2.87803 14.3521 2.61141C15.6488 1.54924 17.2624 0.944386 18.9409 0.890845L18.9688 0.889954L41.1681 0.953502C41.988 0.919415 42.8049 1.07313 43.5558 1.40267C44.3209 1.73844 44.9967 2.24759 45.5289 2.88973C46.0611 3.53177 46.4349 4.28874 46.6206 5.10019C46.8031 5.89771 46.7988 6.72616 46.6084 7.52144L42.3681 29.1669L42.362 29.1933C41.9896 30.8017 41.0994 32.2445 39.8278 33.3026Z" fill="#03301D"/>
                <path d="M40.8216 2.95355C41.4048 2.92412 41.9868 3.03161 42.5211 3.26725C43.0554 3.50288 43.5272 3.86014 43.8988 4.31063C44.2703 4.76113 44.5313 5.29225 44.661 5.86162C44.7906 6.43099 44.7853 7.02284 44.6454 7.58977L40.4233 29.2491C40.1268 30.536 39.4127 31.6886 38.3925 32.5273C37.3723 33.3659 36.1032 33.8434 34.7832 33.8853H12.6929C12.1096 33.9143 11.5275 33.8068 10.993 33.5712C10.4585 33.3356 9.98642 32.9785 9.61431 32.5282C9.24221 32.078 8.98033 31.5471 8.84959 30.9778C8.71885 30.4086 8.72283 29.8165 8.86121 29.2491L10.566 20.4866C10.6659 20.0589 10.9045 19.6763 11.2445 19.3983C11.5845 19.1202 12.0069 18.9623 12.446 18.9492C16.4769 19.0926 20.3485 19.3952 23.9572 20.6937L24.7538 25.7043C24.7733 25.8253 24.8371 25.9346 24.9328 26.0112C25.0285 26.0877 25.1492 26.126 25.2716 26.1185C25.4122 26.1161 25.5496 26.0765 25.6699 26.0038C25.7902 25.931 25.8892 25.8277 25.9567 25.7043L28.6811 20.6937L34.13 18.9731C34.2618 18.9309 34.3804 18.8551 34.474 18.7532C34.5676 18.6512 34.633 18.5266 34.6637 18.3916C34.6949 18.2723 34.6802 18.1456 34.6228 18.0365C34.5653 17.9274 34.4691 17.8439 34.353 17.8021L29.5733 16.0894L28.7767 11.079C28.7573 10.9573 28.6938 10.847 28.5983 10.7691C28.5028 10.6913 28.382 10.6513 28.2589 10.6567C28.1175 10.66 27.9795 10.7008 27.8591 10.775C27.7387 10.8492 27.6402 10.9541 27.5738 11.079L24.8494 16.0894C20.8987 17.2226 16.8109 17.8071 12.7009 17.8261C12.5036 17.8429 12.3052 17.8124 12.1219 17.7376C11.9386 17.6627 11.7757 17.5456 11.6466 17.3955C11.5175 17.2454 11.4259 17.0667 11.3793 16.8743C11.3327 16.6819 11.3324 16.481 11.3785 16.2885L13.0833 7.52598C13.3782 6.23972 14.0907 5.0873 15.1096 4.2486C16.1285 3.40989 17.3964 2.93224 18.7154 2.88995L40.8216 2.95355Z" fill="#FFFFFF"/>
            </g>
            <g id="logotype" transform="translate(53, 2)">
                <path fill="currentColor" d="M19.33 32.44L19.33 32.44Q15.71 32.44 13.01 30.94Q10.32 29.43 8.83 26.68Q7.34 23.92 7.34 20.25L7.34 20.25Q7.34 16.51 8.83 13.77Q10.32 11.03 13.01 9.53Q15.71 8.02 19.33 8.02L19.33 8.02Q22.25 8.02 24.51 9.03Q26.77 10.04 28.21 11.90Q29.65 13.77 30.03 16.37L30.03 16.37L24.90 16.37Q24.58 14.47 23.09 13.44Q21.60 12.40 19.33 12.40L19.33 12.40Q16.06 12.40 14.17 14.47Q12.27 16.54 12.27 20.25L12.27 20.25Q12.27 23.92 14.17 26.01Q16.06 28.09 19.33 28.09L19.33 28.09Q21.60 28.09 23.09 27.04Q24.58 25.99 24.90 24.10L24.90 24.10L30.03 24.10Q29.65 26.69 28.21 28.57Q26.77 30.45 24.51 31.45Q22.25 32.44 19.33 32.44ZM39.77 32.35L39.77 32.35Q36.92 32.35 34.80 31.23Q32.69 30.10 31.52 28.06Q30.35 26.02 30.35 23.22L30.35 23.22Q30.35 20.45 31.51 18.41Q32.66 16.37 34.79 15.26Q36.92 14.15 39.80 14.15L39.80 14.15Q42.66 14.15 44.76 15.26Q46.86 16.37 48 18.41Q49.14 20.45 49.14 23.25L49.14 23.25Q49.14 26.02 48 28.08Q46.86 30.13 44.75 31.24Q42.63 32.35 39.77 32.35ZM39.77 28.15L39.77 28.15Q41.96 28.15 43.13 26.82Q44.30 25.50 44.30 23.22L44.30 23.22Q44.30 20.95 43.13 19.65Q41.96 18.35 39.77 18.35L39.77 18.35Q37.56 18.35 36.38 19.65Q35.20 20.95 35.20 23.22L35.20 23.22Q35.20 25.50 36.38 26.82Q37.56 28.15 39.77 28.15ZM58.38 32.35L58.38 32.35Q55.70 32.35 53.82 31.21Q51.94 30.07 50.97 28.02Q50.01 25.96 50.01 23.25L50.01 23.25Q50.01 20.51 50.95 18.45Q51.88 16.40 53.67 15.27Q55.47 14.15 57.97 14.15L57.97 14.15Q59.90 14.15 61.29 14.86Q62.67 15.58 63.43 16.89L63.43 16.89L63.55 16.89L63.55 7.50L68.39 7.50L68.39 27.22L70.78 27.22L70.78 32L65.88 32L65.88 29.14L64.65 29.14Q63.72 30.66 62.16 31.50Q60.60 32.35 58.38 32.35ZM59.29 28.15L59.29 28.15Q61.24 28.15 62.39 27.06Q63.55 25.96 63.55 24.04L63.55 24.04L63.55 22.46Q63.55 20.54 62.39 19.44Q61.24 18.35 59.29 18.35L59.29 18.35Q57.07 18.35 55.96 19.66Q54.85 20.98 54.85 23.25L54.85 23.25Q54.85 25.52 55.96 26.84Q57.07 28.15 59.29 28.15ZM80.78 32.35L80.78 32.35Q77.95 32.35 75.85 31.23Q73.75 30.10 72.62 28.05Q71.48 25.99 71.48 23.19L71.48 23.19Q71.48 20.39 72.59 18.36Q73.70 16.34 75.75 15.24Q77.81 14.15 80.61 14.15L80.61 14.15Q83.35 14.15 85.32 15.20Q87.29 16.25 88.34 18.20Q89.39 20.16 89.39 22.87L89.39 22.87L89.39 24.50L76.12 24.50Q76.41 26.46 77.60 27.48Q78.80 28.50 80.75 28.50L80.75 28.50Q82.30 28.50 83.20 27.98Q84.11 27.45 84.49 26.37L84.49 26.37L89.33 26.37Q88.75 29.17 86.50 30.76Q84.25 32.35 80.78 32.35ZM76.23 21.30L76.23 21.30L84.75 21.30Q84.52 19.63 83.47 18.80Q82.42 17.97 80.64 17.97L80.64 17.97Q78.86 17.97 77.74 18.82Q76.61 19.66 76.23 21.30ZM97.32 39L92.48 39L92.48 19.28L90.09 19.28L90.09 14.50L94.99 14.50L94.99 17.36L96.21 17.36Q97.15 15.84 98.71 15.00Q100.27 14.15 102.48 14.15L102.48 14.15Q105.20 14.15 107.06 15.29Q108.93 16.42 109.89 18.47Q110.85 20.51 110.85 23.25L110.85 23.25Q110.85 25.99 109.92 28.05Q108.99 30.10 107.21 31.23Q105.43 32.35 102.89 32.35L102.89 32.35Q100.97 32.35 99.60 31.64Q98.22 30.92 97.44 29.61L97.44 29.61L97.32 29.61L97.32 39ZM101.58 28.15L101.58 28.15Q103.80 28.15 104.90 26.84Q106.01 25.52 106.01 23.25L106.01 23.25Q106.01 20.98 104.90 19.66Q103.80 18.35 101.58 18.35L101.58 18.35Q99.63 18.35 98.47 19.44Q97.32 20.54 97.32 22.46L97.32 22.46L97.32 24.04Q97.32 25.96 98.47 27.06Q99.63 28.15 101.58 28.15ZM117.62 32L112.78 32L112.78 14.50L117.62 14.50L117.62 32ZM115.20 12.78L115.20 12.78Q114.09 12.78 113.32 12.01Q112.55 11.23 112.55 10.13L112.55 10.13Q112.55 9.02 113.32 8.24Q114.09 7.47 115.20 7.47L115.20 7.47Q116.31 7.47 117.08 8.24Q117.85 9.02 117.85 10.13L117.85 10.13Q117.85 11.23 117.08 12.01Q116.31 12.78 115.20 12.78ZM125.44 32L120.60 32L120.60 7.50L125.44 7.50L125.44 32ZM136.78 32.35L136.78 32.35Q133.92 32.35 131.81 31.23Q129.70 30.10 128.53 28.06Q127.36 26.02 127.36 23.22L127.36 23.22Q127.36 20.45 128.51 18.41Q129.67 16.37 131.80 15.26Q133.92 14.15 136.81 14.15L136.81 14.15Q139.67 14.15 141.77 15.26Q143.87 16.37 145.01 18.41Q146.15 20.45 146.15 23.25L146.15 23.25Q146.15 26.02 145.01 28.08Q143.87 30.13 141.76 31.24Q139.64 32.35 136.78 32.35ZM136.78 28.15L136.78 28.15Q138.97 28.15 140.14 26.82Q141.30 25.50 141.30 23.22L141.30 23.22Q141.30 20.95 140.14 19.65Q138.97 18.35 136.78 18.35L136.78 18.35Q134.57 18.35 133.39 19.65Q132.20 20.95 132.20 23.22L132.20 23.22Q132.20 25.50 133.39 26.82Q134.57 28.15 136.78 28.15ZM158.83 32L153.52 32Q151.66 32 150.62 31.05Q149.59 30.10 149.59 28.15L149.59 28.15L149.59 18.29L146.58 18.29L146.58 14.50L149.65 14.50L149.65 9.25L154.37 9.25L154.37 14.50L158.42 14.50L158.42 18.29L154.43 18.29L154.43 28.21L158.83 28.21L158.83 32Z"/>
            </g>
        </svg>
    )
}

const menuItems = [
    { name: 'Features', href: '#link' },
    { name: 'Solution', href: '#link' },
    { name: 'Pricing', href: '#link' },
    { name: 'About', href: '#link' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12 font-funnel', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                to="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm font-funnel">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            to={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base font-funnel">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                to={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <ThemeToggle />
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden', 'font-funnel')}>
                                    <Link to="#">
                                        <span>Login</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden', 'font-funnel')}>
                                    <Link to="#">
                                        <span>Sign Up</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden', 'font-funnel')}>
                                    <Link to="#">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <svg data-logo="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 213 43" className={cn('h-8 w-auto', className)}>
            <g id="logogram" transform="translate(0, 1) rotate(0)">
                <path d="M39.8278 33.3026L39.8308 33.3061L33.3607 38.9831C32.0341 40.1758 30.3188 40.8515 28.5307 40.8849L28.5157 40.8852H6.3433C5.52252 40.9197 4.70461 40.766 3.9529 40.4361C3.18789 40.1004 2.51205 39.5912 1.97981 38.9489C1.44755 38.3069 1.07385 37.55 0.888129 36.7388C0.705857 35.9416 0.709812 35.1125 0.900558 34.3168L2.60764 25.6248C2.75949 24.8681 3.16084 24.1833 3.74828 23.6792L3.83198 23.6074C3.65027 23.3331 3.51734 23.0292 3.43941 22.709C3.33602 22.2843 3.3324 21.8424 3.42763 21.4174L5.13811 12.7091L5.14074 12.6968C5.47362 11.1342 6.31209 9.72339 7.52782 8.68041L13.4516 3.48275C13.7257 3.16967 14.0266 2.87803 14.3521 2.61141C15.6488 1.54924 17.2624 0.944386 18.9409 0.890845L18.9688 0.889954L41.1681 0.953502C41.988 0.919415 42.8049 1.07313 43.5558 1.40267C44.3209 1.73844 44.9967 2.24759 45.5289 2.88973C46.0611 3.53177 46.4349 4.28874 46.6206 5.10019C46.8031 5.89771 46.7988 6.72616 46.6084 7.52144L42.3681 29.1669L42.362 29.1933C41.9896 30.8017 41.0994 32.2445 39.8278 33.3026Z" fill="#03301D"/>
                <path d="M40.8216 2.95355C41.4048 2.92412 41.9868 3.03161 42.5211 3.26725C43.0554 3.50288 43.5272 3.86014 43.8988 4.31063C44.2703 4.76113 44.5313 5.29225 44.661 5.86162C44.7906 6.43099 44.7853 7.02284 44.6454 7.58977L40.4233 29.2491C40.1268 30.536 39.4127 31.6886 38.3925 32.5273C37.3723 33.3659 36.1032 33.8434 34.7832 33.8853H12.6929C12.1096 33.9143 11.5275 33.8068 10.993 33.5712C10.4585 33.3356 9.98642 32.9785 9.61431 32.5282C9.24221 32.078 8.98033 31.5471 8.84959 30.9778C8.71885 30.4086 8.72283 29.8165 8.86121 29.2491L10.566 20.4866C10.6659 20.0589 10.9045 19.6763 11.2445 19.3983C11.5845 19.1202 12.0069 18.9623 12.446 18.9492C16.4769 19.0926 20.3485 19.3952 23.9572 20.6937L24.7538 25.7043C24.7733 25.8253 24.8371 25.9346 24.9328 26.0112C25.0285 26.0877 25.1492 26.126 25.2716 26.1185C25.4122 26.1161 25.5496 26.0765 25.6699 26.0038C25.7902 25.931 25.8892 25.8277 25.9567 25.7043L28.6811 20.6937L34.13 18.9731C34.2618 18.9309 34.3804 18.8551 34.474 18.7532C34.5676 18.6512 34.633 18.5266 34.6637 18.3916C34.6949 18.2723 34.6802 18.1456 34.6228 18.0365C34.5653 17.9274 34.4691 17.8439 34.353 17.8021L29.5733 16.0894L28.7767 11.079C28.7573 10.9573 28.6938 10.847 28.5983 10.7691C28.5028 10.6913 28.382 10.6513 28.2589 10.6567C28.1175 10.66 27.9795 10.7008 27.8591 10.775C27.7387 10.8492 27.6402 10.9541 27.5738 11.079L24.8494 16.0894C20.8987 17.2226 16.8109 17.8071 12.7009 17.8261C12.5036 17.8429 12.3052 17.8124 12.1219 17.7376C11.9386 17.6627 11.7757 17.5456 11.6466 17.3955C11.5175 17.2454 11.4259 17.0667 11.3793 16.8743C11.3327 16.6819 11.3324 16.481 11.3785 16.2885L13.0833 7.52598C13.3782 6.23972 14.0907 5.0873 15.1096 4.2486C16.1285 3.40989 17.3964 2.93224 18.7154 2.88995L40.8216 2.95355Z" fill="#FFFFFF"/>
            </g>
            <g id="logotype" transform="translate(53, 2)">
                <path fill="currentColor" d="M19.33 32.44L19.33 32.44Q15.71 32.44 13.01 30.94Q10.32 29.43 8.83 26.68Q7.34 23.92 7.34 20.25L7.34 20.25Q7.34 16.51 8.83 13.77Q10.32 11.03 13.01 9.53Q15.71 8.02 19.33 8.02L19.33 8.02Q22.25 8.02 24.51 9.03Q26.77 10.04 28.21 11.90Q29.65 13.77 30.03 16.37L30.03 16.37L24.90 16.37Q24.58 14.47 23.09 13.44Q21.60 12.40 19.33 12.40L19.33 12.40Q16.06 12.40 14.17 14.47Q12.27 16.54 12.27 20.25L12.27 20.25Q12.27 23.92 14.17 26.01Q16.06 28.09 19.33 28.09L19.33 28.09Q21.60 28.09 23.09 27.04Q24.58 25.99 24.90 24.10L24.90 24.10L30.03 24.10Q29.65 26.69 28.21 28.57Q26.77 30.45 24.51 31.45Q22.25 32.44 19.33 32.44ZM39.77 32.35L39.77 32.35Q36.92 32.35 34.80 31.23Q32.69 30.10 31.52 28.06Q30.35 26.02 30.35 23.22L30.35 23.22Q30.35 20.45 31.51 18.41Q32.66 16.37 34.79 15.26Q36.92 14.15 39.80 14.15L39.80 14.15Q42.66 14.15 44.76 15.26Q46.86 16.37 48 18.41Q49.14 20.45 49.14 23.25L49.14 23.25Q49.14 26.02 48 28.08Q46.86 30.13 44.75 31.24Q42.63 32.35 39.77 32.35ZM39.77 28.15L39.77 28.15Q41.96 28.15 43.13 26.82Q44.30 25.50 44.30 23.22L44.30 23.22Q44.30 20.95 43.13 19.65Q41.96 18.35 39.77 18.35L39.77 18.35Q37.56 18.35 36.38 19.65Q35.20 20.95 35.20 23.22L35.20 23.22Q35.20 25.50 36.38 26.82Q37.56 28.15 39.77 28.15ZM58.38 32.35L58.38 32.35Q55.70 32.35 53.82 31.21Q51.94 30.07 50.97 28.02Q50.01 25.96 50.01 23.25L50.01 23.25Q50.01 20.51 50.95 18.45Q51.88 16.40 53.67 15.27Q55.47 14.15 57.97 14.15L57.97 14.15Q59.90 14.15 61.29 14.86Q62.67 15.58 63.43 16.89L63.43 16.89L63.55 16.89L63.55 7.50L68.39 7.50L68.39 27.22L70.78 27.22L70.78 32L65.88 32L65.88 29.14L64.65 29.14Q63.72 30.66 62.16 31.50Q60.60 32.35 58.38 32.35ZM59.29 28.15L59.29 28.15Q61.24 28.15 62.39 27.06Q63.55 25.96 63.55 24.04L63.55 24.04L63.55 22.46Q63.55 20.54 62.39 19.44Q61.24 18.35 59.29 18.35L59.29 18.35Q57.07 18.35 55.96 19.66Q54.85 20.98 54.85 23.25L54.85 23.25Q54.85 25.52 55.96 26.84Q57.07 28.15 59.29 28.15ZM80.78 32.35L80.78 32.35Q77.95 32.35 75.85 31.23Q73.75 30.10 72.62 28.05Q71.48 25.99 71.48 23.19L71.48 23.19Q71.48 20.39 72.59 18.36Q73.70 16.34 75.75 15.24Q77.81 14.15 80.61 14.15L80.61 14.15Q83.35 14.15 85.32 15.20Q87.29 16.25 88.34 18.20Q89.39 20.16 89.39 22.87L89.39 22.87L89.39 24.50L76.12 24.50Q76.41 26.46 77.60 27.48Q78.80 28.50 80.75 28.50L80.75 28.50Q82.30 28.50 83.20 27.98Q84.11 27.45 84.49 26.37L84.49 26.37L89.33 26.37Q88.75 29.17 86.50 30.76Q84.25 32.35 80.78 32.35ZM76.23 21.30L76.23 21.30L84.75 21.30Q84.52 19.63 83.47 18.80Q82.42 17.97 80.64 17.97L80.64 17.97Q78.86 17.97 77.74 18.82Q76.61 19.66 76.23 21.30ZM97.32 39L92.48 39L92.48 19.28L90.09 19.28L90.09 14.50L94.99 14.50L94.99 17.36L96.21 17.36Q97.15 15.84 98.71 15.00Q100.27 14.15 102.48 14.15L102.48 14.15Q105.20 14.15 107.06 15.29Q108.93 16.42 109.89 18.47Q110.85 20.51 110.85 23.25L110.85 23.25Q110.85 25.99 109.92 28.05Q108.99 30.10 107.21 31.23Q105.43 32.35 102.89 32.35L102.89 32.35Q100.97 32.35 99.60 31.64Q98.22 30.92 97.44 29.61L97.44 29.61L97.32 29.61L97.32 39ZM101.58 28.15L101.58 28.15Q103.80 28.15 104.90 26.84Q106.01 25.52 106.01 23.25L106.01 23.25Q106.01 20.98 104.90 19.66Q103.80 18.35 101.58 18.35L101.58 18.35Q99.63 18.35 98.47 19.44Q97.32 20.54 97.32 22.46L97.32 22.46L97.32 24.04Q97.32 25.96 98.47 27.06Q99.63 28.15 101.58 28.15ZM117.62 32L112.78 32L112.78 14.50L117.62 14.50L117.62 32ZM115.20 12.78L115.20 12.78Q114.09 12.78 113.32 12.01Q112.55 11.23 112.55 10.13L112.55 10.13Q112.55 9.02 113.32 8.24Q114.09 7.47 115.20 7.47L115.20 7.47Q116.31 7.47 117.08 8.24Q117.85 9.02 117.85 10.13L117.85 10.13Q117.85 11.23 117.08 12.01Q116.31 12.78 115.20 12.78ZM125.44 32L120.60 32L120.60 7.50L125.44 7.50L125.44 32ZM136.78 32.35L136.78 32.35Q133.92 32.35 131.81 31.23Q129.70 30.10 128.53 28.06Q127.36 26.02 127.36 23.22L127.36 23.22Q127.36 20.45 128.51 18.41Q129.67 16.37 131.80 15.26Q133.92 14.15 136.81 14.15L136.81 14.15Q139.67 14.15 141.77 15.26Q143.87 16.37 145.01 18.41Q146.15 20.45 146.15 23.25L146.15 23.25Q146.15 26.02 145.01 28.08Q143.87 30.13 141.76 31.24Q139.64 32.35 136.78 32.35ZM136.78 28.15L136.78 28.15Q138.97 28.15 140.14 26.82Q141.30 25.50 141.30 23.22L141.30 23.22Q141.30 20.95 140.14 19.65Q138.97 18.35 136.78 18.35L136.78 18.35Q134.57 18.35 133.39 19.65Q132.20 20.95 132.20 23.22L132.20 23.22Q132.20 25.50 133.39 26.82Q134.57 28.15 136.78 28.15ZM158.83 32L153.52 32Q151.66 32 150.62 31.05Q149.59 30.10 149.59 28.15L149.59 28.15L149.59 18.29L146.58 18.29L146.58 14.50L149.65 14.50L149.65 9.25L154.37 9.25L154.37 14.50L158.42 14.50L158.42 18.29L154.43 18.29L154.43 28.21L158.83 28.21L158.83 32Z"/>
            </g>
        </svg>
    )
}
