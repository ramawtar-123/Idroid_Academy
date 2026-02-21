export default function StatsBar({ stats }) {
  const defaultStats = [
    { number: "5+", label: "Years Experience"},
    { number: "1000+", label: "Students"},
    { number: "10+", label: "Professional Teachers"}
  ];

  const displayStats = stats || defaultStats;

  return (
    <>
    <div id="about" className="bg-gradient-to-r from-[#3b81f6] to-[#1e3a8a] p-2 py-6 relative overflow-hidden md:hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
      </div>

      <div className="max-w-6xl items-center justify-evenly flex mx-auto relative z-10">
        <div className="grid grid-cols-2 gap-4">
          {displayStats.map((stat, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm w-40 rounded-xl transform group-hover:scale-105 transition-all duration-300"></div>
              
              <div className="relative bg-white/10 backdrop-blur-md w-40 border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-xs font-medium">
                  {stat.label}
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white group-hover:w-1/2 transition-all duration-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  </>
  );
}
