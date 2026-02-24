export default function AcademicLife() {
  const videos = [
    "/AcademicLife1.mp4",
    "/AcademicLife2.mp4",
    "/AcademicLife3.mp4",
    "/AcademicLife4.mp4",
    "/AcademicLife5.mp4",
  ];

  const scrollLeft = () => {
    const container = document.getElementById('academic-video-container');
    container.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.getElementById('academic-video-container');
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
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-[#1e3a8a]">
          Academic Life
        </h2>
        <p className="text-gray-600 mb-12 text-lg font-extralight max-w-2xl mx-auto">
          Experience the vibrant academic environment at Idroid Academy
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
        <div id="academic-video-container" className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth scrollbar-hide p-2 snap-x snap-mandatory">
          {videos.map((video, index) => (
            <div
              key={index}
              className="min-w-[85vw] md:min-w-[390px] h-[50vw] md:h-[250px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadowxl hover:shadow2xl transform hover:scale-105 transition-all duration-300 flex-shrink-0 overflow-hidden group snap-center border-2 border-blue-200"
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <iframe
                  src={video}
                  title={`academic-video-${index}`}
                  className="w-full h-full object-cover rounded-3xl"
                  allowFullScreen
                ></iframe>
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                {/* Video Number Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-blue-600 font-bold text-sm shadow-lg">
                  {index + 1}
                </div>
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
