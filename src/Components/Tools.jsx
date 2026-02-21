export default function Tools({ tools: customTools }) {
  const defaultTools = [
    { name: "Photoshop", src: "https://cdn-icons-png.flaticon.com/128/5968/5968520.png" },
    { name: "Illustrator", src: "https://cdn-icons-png.flaticon.com/128/5611/5611037.png" },
    { name: "Premiere Pro", src: "https://cdn-icons-png.flaticon.com/128/5611/5611084.png" },
    { name: "After Effects", src: "https://cdn-icons-png.flaticon.com/128/5611/5611014.png" },
    { name: "InDesign", src: "https://cdn-icons-png.flaticon.com/128/5611/5611049.png" },
    { name: "Figma", src: "https://cdn-icons-png.flaticon.com/128/18032/18032116.png" }
  ];

  const displayTools = customTools || defaultTools;

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8 text-[#1e3a8a]">
        Tools You Will Master
      </h2>

      <div className="flex justify-center gap-6 flex-wrap">
        {displayTools.map((tool, i) => (
          <div key={i} className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center font-bold text-white hover:bg-white/50 duration-700 transition">
            <img 
              src={tool.src} 
              alt={tool.name}
              className="w-8 h-8 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
