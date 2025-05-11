import './App.css';
import Navbar from './components/Navbar';
import NotreImpact from './components/NotreImpact';
import Footer from './components/Footer';
import MembersSection from './components/Members';
import EventsSection from './components/Events';
import JoinUsForm from './components/Form';
import React, { useEffect } from 'react';
import Partners from './components/Partenaires';
function App() {
  useEffect(() => {
    // Disable smooth scroll temporarily on page load
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Re-enable smooth scroll after the page has loaded
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 100); // You can adjust the delay if needed

  }, [])
   
  return (
    <div  style={{ backgroundColor: '#FEF3E2' }} className="">
      <header>
        <Navbar />
      </header>
      <main style={{ backgroundColor: '#FEF3E2' }} className="mt-6">
        <section className="grid grid-cols-1 gap-4 px-4 md:grid-cols-5">
          <div style={{ backgroundColor: '#102E50' }} className="md:col-span-3 rounded-xl">
            <h1 className="text-5xl font-thin text-center text-[#FEF3E2] pt-4 mb-4 mt-4">ENACTUS FSBM</h1>
            <p className="font-thin text-left p-5 m-4 rounded-xl text-[#FEF3E2] text-2xl border-2 border-white">
              Enactus FSBM, fondée en mars 2014 par Abderazak Bouhram, est l'héritière d'initiatives lancées en 2009 sous l'appellation SIFE. Depuis sa création, l'équipe développe des projets à impact social et économique, mobilisant chaque année 50 à 100 membres. Enactus FSBM a récemment été classée parmi le top 12 du Maroc et a été demi-finaliste lors des compétitions 2023-2024.
            </p>
            <div className="flex justify-start mt-5 ml-5">
              <a href="#impact" className="bg-[#FEF3E2] text-black font-semibold py-4 px-6 rounded shadow hover:bg-[#E78B48] transition">
                Voir plus
              </a>
            </div>
          </div>

          <div style={{ backgroundColor: '#F5C45E' }} className="shadow-lg md:col-span-2 shadow-slate-600 rounded-xl">
            <img src="/images/accc.JPG" alt="acc" className="object-cover w-full h-full shadow rounded-xl" />
          </div>
        </section>

        <section id="about" className="px-4">
          <div className="grid grid-cols-1 gap-2 mt-1 md:grid-cols-4">
            <div className="md:col-span-2">
              <img alt="cita" src="/images/cita3-removebg-preview.png" className="object-cover mt-12 md:mt-36 p-9 rounded-xl" />
            </div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-5">
                <div className="md:col-span-3 shadow-xl p-4 rounded-xl hover:translate-y-2 transition-all hover:bg-[#E78B48]">
                  <h1 className="pb-3 text-xl font-bold text-left">Marketing de Contenu</h1>
                  <p>Apprenez à élaborer des campagnes de communication percutantes pour promouvoir vos projets Enactus. Découvrez des outils et techniques modernes pour atteindre votre public cible de manière efficace.</p>
                  <a  href="https://www.google.com/search?q=Enactus+Resources&oq=Enactus+Resources&gs_lcrp=EgZjaHJvbWUqEAgAEEUYExgnGDsYgAQYigUyEAgAEEUYExgnGDsYgAQYigUyCggBEAAYExgWGB4yCggCEAAYgAQYogQyCggDEAAYgAQYogQyCggEEAAYgAQYogQyCggFEAAYgAQYogQyCggGEAAYgAQYogTSAQc2NTNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" className="text-black no-underline hover:underline">Enactus Resources →</a>
                </div>
                <div className="md:col-span-2 shadow-xl p-4 rounded-xl hover:translate-y-2 transition-all hover:bg-[#E78B48]">
                  <h1 className="pb-3 text-xl font-bold text-left">Engagement Social</h1>
                  <p>Notre mission est de transformer des idées innovantes en solutions concrètes pour répondre aux besoins des communautés. Impliquez-vous dans des projets qui changent des vies.</p>
                  <a href="https://www.google.com/search?q=enactus+morocco&oq=enac&gs_lcrp=EgZjaHJvbWUqDggDEEUYJxg7GIAEGIoFMgYIABBFGDwyEAgBEEUYExgnGDsYgAQYigUyBwgCEC4YgAQyDggDEEUYJxg7GIAEGIoFMgYIBBBFGDsyBggFEEUYOzIGCAYQRRg8MgYIBxBFGDzSAQgyOTAwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8" className="text-black no-underline hover:underline">Enactus Maroc →</a>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 mt-2 md:grid-cols-5">
                <div className="md:col-span-2 shadow-2xl p-4 rounded-xl hover:translate-x-2 transition-all hover:bg-[#E78B48]">
                  <h1 className="pb-3 text-xl font-bold text-left">Identité et Image de Marque</h1>
                  <p>Donnez une image professionnelle et cohérente à votre équipe Enactus. Développez une identité de marque qui reflète vos valeurs et votre vision.</p>
                  <a href="https://www.google.com/search?q=Training+Center+-+Branding&oq=Training+Center+-+Branding&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMgoIAxAAGAoYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCggJEAAYgAQYogTSAQc1MDVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" className="text-black no-underline hover:underline">Training Center - Branding →</a>
                </div>
                <div className="md:col-span-3 shadow-2xl p-4 rounded-xl hover:translate-x-2 transition-all hover:bg-[#E78B48]">
                  <h1 className="pb-3 text-xl font-bold text-left">Conception de Produits</h1>
                  <p>Transformez vos idées en prototypes viables et développez des solutions innovantes adaptées aux besoins des communautés. Laissez libre cours à votre créativité tout en restant pratique.</p>
                  <a href="https://www.google.com/search?q=Enactus+World+Cup&oq=Enactus+World+Cup&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBBzU2M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8" className="text-black no-underline hover:underline">Enactus World Cup →</a>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-16">
            <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-3">
              {/* Témoignage 1 */}
              <div className="bg-[#F5C45E] hover:bg-[#E78B48] rounded-2xl p-6 shadow-md hover:translate-y-2 transition-all">
                <p className="mb-6 text-base italic text-gray-800">"Agréable, bonne ambiance. Travailler en équipe avec plusieurs personnalités et ensemble pour changer le monde."</p>
                <div className="flex items-center space-x-4">
                  <img src="/images/marwa.png" alt="Marwa" className="object-cover w-12 h-12 rounded-full" />
                  <div className="mt-10">
                    <h3 className="text-sm font-semibold text-gray-900">Marwa El hachimi</h3>
                    <p className="text-sm text-gray-600">Etudiante en master</p>
                  </div>
                </div>
              </div>

              {/* Témoignage 2 */}
              <div className="bg-[#F5C45E] hover:bg-[#E78B48] rounded-2xl p-6 shadow-md hover:translate-y-2 transition-all">
                <p className="mb-6 text-base italic text-gray-800">"Enactus fsbm c'est un club très professionnalisant, qui nous permet de mener de superbes projets, avec une dimension sociale ou environnementale qui me tiennent à cœur"</p>
                <div className="flex items-center space-x-4">
                  <img src="/images/jassem.png" alt="Jassem" className="object-cover w-12 h-12 rounded-full" />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Jassem Mamoune</h3>
                    <p className="text-sm text-gray-600">Étudiant biologie</p>
                  </div>
                </div>
              </div>

              {/* Témoignage 3 */}
              <div className="bg-[#F5C45E] hover:bg-[#E78B48] rounded-2xl p-6 shadow-md hover:translate-y-2 transition-all">
                <p className="mb-6 text-base italic text-gray-800">"Rejoindre ce club a été l’une des meilleures décisions de ma vie. L’ambiance est chaleureuse, les activités sont bien organisées, et j’ai rencontré des personnes incroyables qui partagent mes passions"</p>
                <div className="flex items-center space-x-4">
                  <img src="/images/Yoga.png" alt="Zahra" className="object-cover w-12 h-12 rounded-full" />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Zahra Bananni</h3>
                    <p className="text-sm text-gray-600">Étudiante en doctorat informatique</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="impact" className="mt-10 bg-[#BE3D2A] drop-shadow-md mx-7 rounded-t-full shadow-slate-500 shadow-2xl">
          <h1 className="pt-7 font-bold text-center text-7xl text-[#FEF3E2]">
            <b className="text-[#102E50]">N</b>otr
            <b className="text-[#102E50]">e</b> Imp
            <b className="text-[#102E50]">act</b>
          </h1>
          <NotreImpact />
        </section>

        <section id="team" className="mx-7">
          <MembersSection />
        </section>

        <section id="events">
          <EventsSection />
        </section>

        <section id="join" className='mt-48'>
          <JoinUsForm />
        </section>

        <section className='my-28 '>
          <Partners/>
        </section>

        <div id="contact">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
