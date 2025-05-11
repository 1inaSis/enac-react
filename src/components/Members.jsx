import React from "react";

const members = [
  {
    name: "Massaoudi Ammar",
    position: "Communication Manager",
    image: "/images/Ammar.jpg", // Replace with actual paths
  },
  {
    name: "Taoumi Younes",
    position: "Team Leader",
    image: "/images/younes.jpg",
  },
  {
    name: "Badri Maryam",
    position: "Vice Team Leader",
    image: "/images/maryam.jpg",
  },
  {
    name: "Aboutara Belrhiti Wiam",
    position: "VP Projet",
    image: "/images/wiam.jpg",
  },
  {
    name: "El Barouji Abdelwadoud",
    position: "Treasurer",
    image: "/images/abdelwadoud.jpg",
  },
  {
    name: "Zaky Hind",
    position: "Human Resources Manager",
    image: "/images/HIND.jpg",
  },
];

const MembersSection = () => {
  return (
    <section className="px-6 py-16 bg-[#FEF3E2]  text-[#FEF3E2] ">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="font-bold text-7xl text-[#BE3D2A] mb-10">
          <b className="text-[#102E50]">N</b>otre <b className="text-[#102E50]">E</b>quipe
        </h1>

        <div className="flex flex-wrap justify-center gap-12 ">
          {members.map((member, index) => (
            <div
              key={index}
              className="relative w-64 transition-transform duration-300 transform h-80 hover:scale-110"
            >
              {/* Card Container */}
              <div className="absolute inset-0 w-full h-full bg-[#102E50] rounded-xl shadow-lg p-4 flex flex-col justify-between items-center text-center transition-transform duration-500 hover:shadow-2xl hover:bg-[#F0E9E0] hover:scale-110">
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover mb-4 border-4 border-[#FEF3E2] w-44 h-44 rounded-xl"
                />
                {/* Name */}
                <h3 className="text-xl font-semibold text-[#FEF3E2]">{member.name}</h3>
                {/* Position */}
                <p className="text-sm text-[#FEF3E2]">{member.position}</p>
              </div>
              {/* Floating effect */}
              <div className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-t from-[#102E50] via-transparent to-transparent opacity-40"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
