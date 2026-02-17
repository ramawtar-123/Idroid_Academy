import { useState } from "react";
import EnquiryModal from "./EnquiryModal";

export default function Careers() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const careers = [
    {
      title: "Graphic Designer",
      bg: "bg-blue-950",
      textColor: "text-blue-200",
      image: "https://freepngimg.com/save/webp/12019-graphic-design-download-png",
    },
    {
      title: "Digital Marketing",
      bg: "bg-blue-900",
      textColor: "text-blue-200",
      image: "https://img.pikbest.com/png-images/20241128/digital-marketing-3d-illustration-isolated-on-transparent-background-_11142247.png!bw700",
    },
    {
      title: "Video Editor",
      bg: "bg-blue-800",
      textColor: "text-blue-200",
      image: "https://www.pngkey.com/png/full/907-9074932_montage-video-png-film-editing.png",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-[#1e3a8a]">
          Career & Jobs Opportunity
        </h2>

        {/* Cards Row */}
        <div className="grid md:grid-cols-3 gap-8">
          {careers.map((career, index) => (
            <div
              key={index}
              className={`${career.bg} rounded-2xl p-8 flex items-center justify-between relative overflow-hidden shadow-lg`}
            >
              {/* Left Content */}
              <div>
                <h3 className={`text-2xl font-bold ${career.textColor}`}>
                  {career.title}
                </h3>
                <p 
                  onClick={() => setIsEnquiryOpen(true)}
                  className="mt-4 text-sm underline cursor-pointer text-white hover:text-blue-200 transition"
                >
                  Enquire Now
                </p>
              </div>

              {/* Right Image */}
              <img
                src={career.image}
                alt={career.title}
                className="w-32 h-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </section>
  );
}
