import React, { useState } from "react";

const JoinUsForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <section
  className="relative flex items-center justify-center min-h-screen px-4 py-20 text-white bg-center bg-cover"
  style={{
    backgroundImage: "url('/images/Imm-removebg-preview.png')",
  }}
>
  <div className="z-10 space-y-6 text-center">
    <h2 className="mb-40 sm:mb-60 shadow-xl rounded-xl text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-black p-4 sm:p-6 uppercase drop-shadow-lg bg-[#FEF3E2]">
      FROM <span className="text-[#BE3D2A]">FRACTURES</span> TO{" "}
      <span className="text-[#BE3D2A]">MASTERPIECES</span>
    </h2>
    <button
      onClick={() => setIsOpen(true)}
      className="bg-[#BE3D2A] hover:bg-[#a83225] text-white font-bold text-lg sm:text-2xl px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg transition-all"
    >
      Rejoignez-nous
    </button>
  </div>

  {/* Modal */}
  {isOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60">
      <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-[#102E50] relative shadow-xl">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute text-xl font-bold text-gray-500 top-4 right-4 hover:text-red-600"
        >
          &times;
        </button>

        <h2 className="mb-6 text-2xl font-bold text-center sm:text-3xl">
          Formulaire d'adhésion
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Nom complet :</label>
            <input
              type="text"
              placeholder="Votre nom complet"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BE3D2A]"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email :</label>
            <input
              type="email"
              placeholder="exemple@mail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BE3D2A]"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Année universitaire :
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BE3D2A]">
              <option value="">Choisissez votre année</option>
              <option>1ère année</option>
              <option>2ème année</option>
              <option>3ème année</option>
              <option>Master</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Pourquoi voulez-vous rejoindre Enactus ?
            </label>
            <textarea
              placeholder="Votre message de motivation..."
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BE3D2A]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-[#BE3D2A] hover:bg-[#a83225] text-white font-semibold py-2 rounded-lg transition-all"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  )}
</section>

  );
};

export default JoinUsForm;
