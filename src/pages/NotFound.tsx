
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { HomeIcon, ArrowLeftIcon } from "@radix-ui/react-icons";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 font-funnel">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Animated 404 */}
          <motion.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className="relative"
          >
            <motion.h1
              variants={itemVariants}
              className="text-8xl md:text-9xl font-bold text-foreground/20 mb-4 select-none"
            >
              404
            </motion.h1>
            <motion.div
              className="absolute inset-0 text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              404
            </motion.div>
          </motion.div>

          {/* Error message */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Oops! Page not found
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved to a new location.
            </p>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-2 mb-8"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>

          {/* Action buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <HomeIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
              Return Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-muted transition-all duration-300 hover:scale-105 group"
            >
              <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Go Back
            </button>
          </motion.div>

          {/* Additional info */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-border/50"
          >
            <p className="text-sm text-muted-foreground">
              Lost? Try checking the URL or{" "}
              <Link
                to="/"
                className="text-primary hover:underline transition-colors"
              >
                browse our homepage
              </Link>
            </p>
          </motion.div>
        </motion.div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
