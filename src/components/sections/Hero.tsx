interface HeroProps {
  heading?: string;
  subheading?: string;
  backgroundImage?: string;
}

export default function Hero({
  heading = "Solar built to last, by a team you can trust.",
  subheading = "We install the highest-quality solar panel systems and back them up with a 30-year warranty.",
  backgroundImage = "/assets/img/solar-panal4.jpg",
}: HeroProps) {
  return (
    <section className="mx-auto relative w-full overflow-hidden">
      <div
        className="relative mx-auto md:ps-16 px-4 md:py-[80px] lg:py-[80px] py-[68px] grid md:grid-cols-[55%_45%] gap-10 items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative max-w-xl md:ps-14">
          <h1 className="text-white font-medium text-4xl sm:text-4xl lg:text-[70px] mb-6 leading-tight">
            {heading}
          </h1>
          <p className="text-white/85 text-base sm:text-base max-w-md mb-10">
            {subheading}
          </p>
        </div>
      </div>
    </section>
  );
}
