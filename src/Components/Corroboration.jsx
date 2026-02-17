import { useState } from "react";
import EnquiryModal from "./EnquiryModal";

export default function Corroboration() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const videos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/ysz5S6PUM-U",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/l482T0yNkeo",
  ];

  const scrollLeft = () => {
    const container = document.getElementById('video-container');
    container.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.getElementById('video-container');
    container.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <section className="w-full py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center px-6 relative z-10">
        
        <h2 className="text-4xl md:text-5xl text-[#1e3a8a] font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text">
          Students Corroboration
        </h2>
        <p className="text-gray-600 mb-12 text-md font-extralight max-w-2xl mx-auto">
          Hear success stories directly from our talented students
        </p>

        {/* Navigation - Positioned Above Videos */}
        <div className="flex justify-center gap-4 mb-4">
          <button 
            onClick={scrollLeft}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 z-30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={scrollRight}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 z-30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Horizontal Scroll Container */}
        <div id="video-container" className="flex gap-4 md:gap-6 p-4 overflow-x-auto scroll-smooth scrollbar-hide pb- snap-x snap-mandatory">
          {videos.map((video, index) => (
            <div
              key={index}
              className="min-w-[85vw] md:min-w-[90px] h-[200px] md:h-[460px] bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex-shrink-0 overflow-hidden group snap-center"
            >
              <div className="relative w-full h-full">
                <iframe
                  src={video}
                  title={`video-${index}`}
                  className="w-full h-full rounded-2xl"
                  allowFullScreen
                ></iframe>
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="mt-6 md:hidden">
          <div className="flex justify-center gap-2">
            {videos.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-gray-300 rounded-full"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
