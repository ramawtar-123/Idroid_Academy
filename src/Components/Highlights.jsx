import { useEffect, useState } from "react";
import { Download, ChevronDown, ChevronUp } from "lucide-react";

const digitalMarketingImages = [
  "https://images.unsplash.com/photo-1460925855937-0ab04a72f8d?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
];

const graphicDesignImages = [
  "https://images.unsplash.com/photo-1561070771-5b2f5a1c3c8f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1559028012-cdad1e64f973?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1628772818978-71b1dbb6c8d8?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1581291518857-67081a4ba6c5?w=600&h=400&fit=crop",
];

const homeImages = [
  "/Highlight1.jpeg",
  "/Highlight2.jpeg",
  "/Highlight3.jpeg",
  "/Highlight4.jpeg",
];

const digitalMarketingHighlights = [
  "SEO & SEM Mastery",
  "Social Media Marketing",
  "Content Marketing Strategy",
  "Google Analytics Expert",
  "Facebook Ads Campaign",
  "Email Marketing",
  "PPC Advertising",
  "Brand Management",
  "Conversion Optimization",
  "Marketing Automation",
  "Industry Expert Trainers",
  "Live Campaign Projects",
  "Portfolio Building",
  "Freelancing Guidance",
  "Interview Preparation",
  "100% Placement Support"
];

const graphicDesignHighlights = [
  "Adobe Creative Suite Mastery",
  "Typography & Layout Design",
  "Brand Identity Design",
  "Digital Illustration",
  "Print & Web Design",
  "Color Theory & Composition",
  "Logo Design Principles",
  "UI/UX Fundamentals",
  "Portfolio Development",
  "Creative Visualization",
  "Industry Expert Trainers",
  "Live Design Projects",
  "Freelance Career Guidance",
  "Interview Preparation",
  "Design Process Management",
  "100% Placement Support"
];

const homeHighlights = [
  "Professional Training Programs",
  "Industry Expert Faculty",
  "100% Placement Support",
  "Live Project Experience",
  "Portfolio Development",
  "Interview Preparation",
  "Certification Programs",
  "Career Guidance",
  "Flexible Learning Options",
  "Industry Partnerships",
  "Practical Skills Training",
  "Real-world Projects",
  "Resume Building",
  "Soft Skills Development",
  "Job Placement Assistance",
  "Alumni Network Support"
];

const digitalMarketingJobRoles = [
  { title: "SEO Specialist", package: "₹4.5-6 LPA", bgImg: "https://images.unsplash.com/photo-1460925855937-0ab04a72f8d?w=400&h=300&fit=crop" },
  { title: "Social Media Manager", package: "₹5-7 LPA", bgImg: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop" },
  { title: "Content Marketer", package: "₹4-6 LPA", bgImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" },
  { title: "PPC Expert", package: "₹5-8 LPA", bgImg: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop" },
  { title: "Digital Marketing Manager", package: "₹6-10 LPA", bgImg: "https://images.unsplash.com/photo-1460925855937-0ab04a72f8d?w=400&h=300&fit=crop" },
  { title: "Growth Hacker", package: "₹7-12 LPA", bgImg: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop" }
];

const graphicDesignJobRoles = [
  { title: "UI Designer", package: "₹5-7 LPA", bgImg: "https://images.unsplash.com/photo-1561070771-5b2f5a1c3c8f?w=400&h=300&fit=crop" },
  { title: "Graphic Designer", package: "₹4-6 LPA", bgImg: "https://images.unsplash.com/photo-1559028012-cdad1e64f973?w=400&h=300&fit=crop" },
  { title: "Brand Designer", package: "₹5-8 LPA", bgImg: "https://images.unsplash.com/photo-1628772818978-71b1dbb6c8d8?w=400&h=300&fit=crop" },
  { title: "Motion Designer", package: "₹6-9 LPA", bgImg: "https://images.unsplash.com/photo-1581291518857-67081a4ba6c5?w=400&h=300&fit=crop" },
  { title: "Art Director", package: "₹8-12 LPA", bgImg: "https://images.unsplash.com/photo-1561070771-5b2f5a1c3c8f?w=400&h=300&fit=crop" },
  { title: "Creative Director", package: "₹10-15 LPA", bgImg: "https://images.unsplash.com/photo-1559028012-cdad1e64f973?w=400&h=300&fit=crop" }
];

const homeJobRoles = [
  { title: "Graphic Designer", bgImg: "https://images.unsplash.com/photo-1561070771-5b2f5a1c3c8f?w=400&h=300&fit=crop" },
  { title: "Digital Marketer", bgImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" },
  { title: "Video Editor", bgImg: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop" },
  { title: "Content Creator", bgImg: "https://images.unsplash.com/photo-1460925855937-0ab04a72f8d?w=400&h=300&fit=crop" },
  { title: "Creative Director", bgImg: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop" }
];

export default function Highlights({ highlights: customHighlights, courseType }) {
  const [current, setCurrent] = useState(0);

  const isGraphicDesign = courseType && courseType.includes('graphic');
  const isDigitalMarketing = courseType && courseType.includes('digital');
  const isHome = courseType === 'home' || !courseType;

  let images, highlights, jobRoles, courseTitle;

  if (isGraphicDesign) {
    images = graphicDesignImages;
    highlights = graphicDesignHighlights;
    jobRoles = graphicDesignJobRoles;
    courseTitle = "Graphic Design";
  } else if (isDigitalMarketing) {
    images = digitalMarketingImages;
    highlights = digitalMarketingHighlights;
    jobRoles = digitalMarketingJobRoles;
    courseTitle = "Digital Marketing";
  } else {
    images = homeImages;
    highlights = homeHighlights;
    jobRoles = homeJobRoles;
    courseTitle = "Teaching Courses";
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px- grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT - Image Slider */}
          <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-lg">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${courseTitle} Highlight`}
                className={`absolute w-full h-full text-[#1e3a8a] object-cover transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
                  }`}
              />
            ))}


            <div className="absolute bottom-4 left-0  right-0 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full  ${current === index ? "bg-black" : "bg-gray-400"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT - Content */}
          <div>
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-8">
              {courseTitle} Highlights
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              {highlights.map((point, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">✔</span>
                  <p className="text-sm">{point}</p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

    </>
  );
}
