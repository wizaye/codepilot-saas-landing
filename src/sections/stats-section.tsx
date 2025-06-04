
import React from 'react';
import NumberFlow from "@number-flow/react";

export const Stats = () => {
  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-funnel">
            Trusted by developers worldwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-funnel">
            Join thousands of teams who have streamlined their migration process
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground font-funnel">
              <NumberFlow value={10000} />+
            </div>
            <div className="mt-2 text-sm text-muted-foreground font-funnel">Successful Migrations</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground font-funnel">
              <NumberFlow value={95} />%
            </div>
            <div className="mt-2 text-sm text-muted-foreground font-funnel">Time Saved</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground font-funnel">
              <NumberFlow value={500} />+
            </div>
            <div className="mt-2 text-sm text-muted-foreground font-funnel">Companies</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground font-funnel">
              <NumberFlow value={24} />/7
            </div>
            <div className="mt-2 text-sm text-muted-foreground font-funnel">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};
