import React from "react";

const partners = [
  "/images/eerchad.png",
  "/images/fsbm.png",
  "/images/imitech.png",
  "/images/injaz.png",
  "/images/pe2i.png",
  "/images/pie.png",
];

export default function Partners() {
  return (
    <section className="py-10 md:py-14 lg:py-20 overflow-hidden bg-[#BE3D2A] rounded-full mx-2 sm:mx-4 lg:mx-8">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-center text-[#FEF3E2] mb-10 sm:mb-12 lg:mb-16">
        Nos Partenaires
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="group">
          <div className="flex w-[200%] animate-scroll group-hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((src, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-48 px-2 py-4 sm:w-64 md:w-72 lg:w-80 sm:px-4 sm:py-6"
              >
                <img
                  src={src}
                  alt={`Partner ${i + 1}`}
                  className="bg-[#FEF3E2] object-contain h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 transition-transform duration-300 shadow-2xl rounded-xl hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
