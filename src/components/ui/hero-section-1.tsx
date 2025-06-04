
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full px-6 lg:px-8 h-14 flex items-center justify-between border-b bg-background/80 backdrop-blur-md z-50">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <span className="font-semibold font-funnel">MigrateLite</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button size="sm" className="font-funnel">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex-1 relative overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50 dark:from-background dark:via-background dark:to-muted/30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop&crop=center')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: '0.1'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 container max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium font-funnel">
                ✨ Introducing v2.0 - Now with AI-powered migrations
                <ChevronRight className="ml-1 h-3 w-3" />
              </Badge>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6 font-funnel">
              Database migrations
              <br />
              <span className="text-primary">made simple</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 font-funnel">
              Streamline your database schema changes with intelligent migrations, 
              automated rollbacks, and comprehensive testing - all in one powerful platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8 py-3 font-funnel">
                Start Free Trial
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 font-funnel">
                View Documentation
              </Button>
            </div>

            {/* Logo Cloud */}
            <div className="mt-16">
              <div className="max-w-5xl m-auto px-6">
                <h2 className="text-lg text-center text-muted-foreground font-medium font-funnel mb-12">
                  Works with your favourite model providers.
                </h2>
                <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12 opacity-60">
                  <div className="h-8 w-20 bg-muted rounded flex items-center justify-center">
                    <span className="text-xs font-medium">OpenAI</span>
                  </div>
                  <div className="h-8 w-20 bg-muted rounded flex items-center justify-center">
                    <span className="text-xs font-medium">Claude</span>
                  </div>
                  <div className="h-8 w-20 bg-muted rounded flex items-center justify-center">
                    <span className="text-xs font-medium">Gemini</span>
                  </div>
                  <div className="h-8 w-20 bg-muted rounded flex items-center justify-center">
                    <span className="text-xs font-medium">Llama</span>
                  </div>
                  <div className="h-8 w-20 bg-muted rounded flex items-center justify-center">
                    <span className="text-xs font-medium">Mistral</span>
                  </div>
                  <div className="h-8 w-20 bg-muted rounded flex items-center justify-center">
                    <span className="text-xs font-medium">Cohere</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
