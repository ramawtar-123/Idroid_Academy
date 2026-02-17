export default function StatsBar({ stats }) {
  const defaultStats = [
    { number: "0+", label: "Students", icon: "👥" },
    { number: "0+", label: "Batches", icon: "📚" },
    { number: "0", label: "Avg Salary", icon: "💰" },
    { number: "0", label: "Years Experience", icon: "🏆" }
  ];

  const displayStats = stats || defaultStats;

  return (
    <div id="about" className="bg-gradient-to-r from-[#3b81f6] to-[#1e3a8a] p-2 py-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
      </div>

      <div className="max-w-6xl items-center justify-evenly flex mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-20">
          {displayStats.map((stat, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm md:h-42 w-40 rounded-xl md:rounded-full transform group-hover:scale-105 transition-all duration-300"></div>
              
              {/* Card Content */}
              <div className="relative bg-white/10 backdrop-blur-md md:h-40 md:w-40 w-40 border border-white/20 rounded-xl md:rounded-full p-4 md:p-8 text-center hover:bg-white/20 transition-all duration-300">
                {/* Icon */}
                {/* <div className="text-2xl md:text-4xl mb-2 md:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div> */}
                
                {/* Number */}
                <div className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">
                  {stat.number}
                </div>
                
                {/* Label */}
                <div className="text-blue-100 text-xs md:text-sm lg:text-base font-medium">
                  {stat.label}
                </div>
                
                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white group-hover:w-1/2 transition-all duration-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
