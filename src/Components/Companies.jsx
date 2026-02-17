import { Link } from 'react-router-dom';

export default function Companies({ companies: customCompanies }) {
  const defaultCompanies = [
    { name: "Google", logo: "https://cdn-icons-png.flaticon.com/128/300/300221.png" },
    { name: "Microsoft", logo: "https://cdn-icons-png.flaticon.com/128/732/732221.png" },
    { name: "Amazon", logo: "https://cdn-icons-png.flaticon.com/128/10096/10096351.png" },
    { name: "Meta", logo: "https://cdn-icons-png.flaticon.com/128/5968/5968764.png" },
    { name: "Apple", logo: "https://cdn-icons-png.flaticon.com/128/0/747.png" },
    { name: "Netflix", logo: "https://cdn-icons-png.flaticon.com/128/732/732228.png" },
    { name: "Adobe", logo: "https://cdn-icons-png.flaticon.com/128/888/888835.png" },
    { name: "IBM", logo: "https://cdn-icons-png.flaticon.com/128/16183/16183597.png" },
    { name: "Oracle", logo: "https://cdn-icons-png.flaticon.com/128/5969/5969229.png" },
    { name: "SAP", logo: "https://cdn-icons-png.flaticon.com/128/882/882701.png" },
    { name: "TCS", logo: "https://cdn.brandfetch.io/idK2mWG2SJ/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1759053240417" },
    { name: "Infosys", logo: "https://cdn.brandfetch.io/id2jVuQy_9/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1676271043735" }
  ];

  const displayCompanies = customCompanies || defaultCompanies;

  return (
    <section className="py-16 p-4 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold mb-8 text-[#1e3a8a]">
        Our Students Working With Companies Like
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {displayCompanies.map((company, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-[#3b82f6] group"
          >
            <div className="flex flex-col items-center justify-center h-20">
              <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="text-sm font-medium text-gray-600 group-hover:text-[#1e3a8a] transition-colors duration-300">
                {company.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        <p className="text-gray-600 text-center text-lg">
          Join <span className="font-bold text-[#1e3a8a]">12,463+ students</span> who are already building their careers at top companies
        </p>
        <div className="mt-6 flex justify-center">
          <Link 
            to="/placement" 
            className="bg-[#3b82f6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e3a8a] transition transform hover:scale-105 inline-block"
          >
            View Placement Stories
          </Link>
        </div>
      </div>
    </section>
  );
}
