
import { MoveDownLeft, MoveUpRight } from "lucide-react";
import NumberFlow from "@number-flow/react";

function Stats() {
  return (
    <div className="w-full py-20 lg:py-40 bg-background">
      <div className="container mx-auto">
        <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 lg:gap-8">
          <div className="flex gap-0 flex-col justify-between p-6 border rounded-md bg-card hover:shadow-md transition-shadow">
            <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
            <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end font-funnel">
              <NumberFlow value={500000} />
              <span className="text-muted-foreground text-sm tracking-normal">
                +20.1%
              </span>
            </h2>
            <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left font-funnel">
              Monthly active users
            </p>
          </div>
          <div className="flex gap-0 flex-col justify-between p-6 border rounded-md bg-card hover:shadow-md transition-shadow">
            <MoveDownLeft className="w-4 h-4 mb-10 text-destructive" />
            <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end font-funnel">
              <NumberFlow value={20105} />
              <span className="text-muted-foreground text-sm tracking-normal">
                -2%
              </span>
            </h2>
            <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left font-funnel">
              Daily active users
            </p>
          </div>
          <div className="flex gap-0 flex-col justify-between p-6 border rounded-md bg-card hover:shadow-md transition-shadow">
            <MoveUpRight className="w-4 h-4 mb-10 text-green-500" />
            <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end font-funnel">
              $<NumberFlow value={523520} />
              <span className="text-muted-foreground text-sm tracking-normal">
                +8%
              </span>
            </h2>
            <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left font-funnel">
              Monthly recurring revenue
            </p>
          </div>
          <div className="flex gap-0 flex-col justify-between p-6 border rounded-md bg-card hover:shadow-md transition-shadow">
            <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
            <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end font-funnel">
              $<NumberFlow value={1052} />
              <span className="text-muted-foreground text-sm tracking-normal">
                +2%
              </span>
            </h2>
            <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left font-funnel">
              Cost per acquisition
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Stats };
