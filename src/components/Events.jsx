import React from "react";

const events = [
  {
    title: "Hackathon",
    description:
      "Un événement marquant où nous avons combiné organisation minutieuse et projets innovants dans le domaine sportif. En 54h, nous avons mis à l’épreuve nos compétences techniques et renforcé notre esprit d’équipe. Ce Hackathon a été l'occasion de travailler sur des projets concrets, améliorer notre gestion de projet, et renforcer nos liens tout en partageant des moments conviviaux. Une expérience enrichissante, source de motivation pour de futurs défis !",
    image: "/images/Hackathon.JPG",
  },
  {
    title: "Foot Competition",
    description:
      "Organisé par Enactus FSBM, la Faculté des Sciences Ben M'Sick (FSBM) et soutenu par Orange, ce hackathon d’innovation se déroulera les 15, 16 et 17 décembre. En 54h, des participants de divers horizons transformeront leurs idées en projets concrets, sur le thème de l’esprit d’équipe, de la créativité et de l’excellence. Les projets mettront en avant l’innovation technologique et entrepreneuriale, visant à améliorer l’avenir du continent africain. Avec la devise 'De l’idée à la concrétisation en 54 heures, ensemble avec passion, vers l’infini !', cet événement sera un tournant pour des solutions durables et innovantes.",
    image: "/images/Hackcompitition.jpeg",
  },
  {
    title: "8 Mars",
    description:
      "Organisé par notre équipe le 8 mars, cet événement a réuni des entrepreneures inspirantes qui ont partagé leurs expériences et leurs conseils. Elles ont mis en lumière les défis et opportunités uniques pour les femmes entrepreneures, tout en encourageant les participants à croire en leurs ambitions et à lancer des projets innovants. Cet échange a renforcé notre engagement pour l'égalité des chances et l’émancipation par l'entrepreneuriat.",
    image: "/images/mars.jpg",
  },
];

const EventsSection = () => {
  return (
    <section className="bg-[#BE3D2A] py-12 px-4 sm:px-6 lg:px-10 text-[#FEF3E2] rounded-s-full">
  <h2 className="mb-12 text-4xl font-bold text-center text-[#BE3D2A] sm:text-5xl lg:text-7xl ">
   <span className=" shadow-[#FEF3E2] shadow-xl bg-[#FEF3E2] rounded-xl mb-40"> Nos Événements</span>
  </h2>

  <div className="grid gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3 max-w-7xl p-11">
    {events.map((event, index) => (
      <div
        key={index}
        className="group relative h-72 sm:h-80 lg:h-96 w-full [perspective:1000px]"
      >
        <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          
          {/* Front Side */}
          <div className="absolute inset-0 bg-white text-[#102E50] rounded-2xl shadow-xl overflow-hidden [backface-visibility:hidden]">
            <img
              src={event.image}
              alt={event.title}
              className="object-cover w-full h-full opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-10">
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 bg-[#FEF3E2] rounded-2xl p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <h1 className="text-[#102E50] text-lg sm:text-xl lg:text-2xl font-bold mb-2">{event.title}</h1>
            <p className="text-[#102E50] text-xs sm:text-sm lg:text-base font-semibold overflow-auto max-h-60 px-1">
              {event.description}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default EventsSection;
