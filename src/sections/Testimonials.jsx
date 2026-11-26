import { Gallery } from "@/components/Gallery";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Snapshot of My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            A glimpse into my <span className="font-serif italic font-normal text-white">creative journey.</span>
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Gallery group="a" delay={2200} />
          <Gallery group="b" delay={2500} />
          <Gallery group="c" delay={2300} />
          <Gallery group="d" delay={2700} />
        </div>
      </div>
    </section>
  );
};
