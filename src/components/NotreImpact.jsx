import { FaBuilding, FaUsers, FaProjectDiagram, FaHeart, FaClock, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const stats = [
  { icon: <FaBuilding />, value: "2014", label: "Fondation" },
  { icon: <FaUsers />, value: "1000+", label: "Jeunes mobilisés" },
  { icon: <FaProjectDiagram />, value: "40+", label: "Projets développés" },
  { icon: <FaHeart />, value: "500+", label: "Bénéficiaires impactés" },
  { icon: <FaClock />, value: "3000+", label: "Heures de formations" },
  { icon: <FaGlobe />, value: "13", label: "ODD touchés" },
];

export default function ImpactTimeline() {
  return (
    <div className="flex items-center justify-center px-4 py-20 rounded-s-full">
      <div className="flex flex-wrap items-center justify-center gap-8 max-w-6xl mx-auto relative before:absolute before:h-1 before:bg-[#FEF3E2] before:top-1/2 before:left-0 before:right-0 before:-z-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="z-10 flex flex-col items-center text-center"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#FEF3E2] text-black rounded-full p-6 sm:p-8 text-3xl sm:text-4xl lg:text-5xl shadow-lg mb-3">
              {stat.icon}
            </div>
            <div className="font-extrabold text-[#FEF3E2] text-xl sm:text-2xl lg:text-3xl">{stat.value}</div>
            <div className="text-xs sm:text-sm text-[#FEF3E2] mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
