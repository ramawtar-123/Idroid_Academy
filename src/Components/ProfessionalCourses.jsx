import { useState, useEffect } from "react";

const ProfessionalCourses = ({ courseType = "default" }) => {
  const [courseTitle, setCourseTitle] = useState("Teaching Courses");
  const [jobRoles, setJobRoles] = useState([
    {
      title: "Digital Marketing",
      bgImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      img: "/idroid-academy-logo2.png",
      skills: ["SEO", "SEM", "Analytics"],
      description: "Lead digital marketing strategies and campaigns"
    },
    {
      title: "Graphic Designer",
      bgImg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      img: "/idroid-academy-logo2.png",
      skills: ["Photoshop", "Illustrator", "Figma"],
      description: "Create stunning visual designs and branding"
    },
    {
      title: "Social Media",
      bgImg: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      img: "/idroid-academy-logo2.png",
      skills: ["Content", "Strategy", "Analytics"],
      description: "Manage and grow social media presence"
    },
    {
      title: "UI/UX Designer",
      bgImg: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      img: "/idroid-academy-logo2.png",
      skills: ["Wireframing", "Prototyping", "Research"],
      description: "Design intuitive user interfaces and experiences"
    },
    {
      title: "Content Creator",
      bgImg: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      img: "/idroid-academy-logo2.png",
      skills: ["Video", "Writing", "Editing"],
      description: "Produce engaging digital content"
    },
    {
      title: "SEO Specialist",
      bgImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      img: "/idroid-academy-logo2.png",
      skills: ["On-Page", "Off-Page", "Technical"],
      description: "Optimize websites for search engines"
    }
  ]);

  useEffect(() => {
    switch(courseType) {
      case "hero":
        setCourseTitle("Career Opportunities");
        break;
      case "digital-marketing":
        setCourseTitle("Digital Marketing Careers");
        setJobRoles([
          {
            title: "Digital Marketing",
            bgImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            img: "/idroid-academy-logo2.png",
            skills: ["SEO", "SEM", "Analytics"],
            description: "Lead comprehensive digital marketing strategies"
          },
          {
            title: "Social Media",
            bgImg: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            img: "/idroid-academy-logo2.png",
            skills: ["Content", "Strategy", "Analytics"],
            description: "Build and manage social media communities"
          },
          {
            title: "Content Marketing Lead",
            bgImg: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            img: "/idroid-academy-logo2.png",
            skills: ["Strategy", "Writing", "Campaigns"],
            description: "Create compelling content strategies"
          },
          {
            title: "SEO Specialist",
            bgImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            img: "/idroid-academy-logo2.png",
            skills: ["On-Page", "Off-Page", "Technical"],
            description: "Drive organic traffic through SEO"
          },
          {
            title: "PPC Expert",
            bgImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            img: "/idroid-academy-logo2.png",
            skills: ["Google Ads", "Facebook Ads", "Campaigns"],
            description: "Manage paid advertising campaigns"
          },
          {
            title: "Email Marketing",
            bgImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            img: "/idroid-academy-logo2.png",
            skills: ["Campaigns", "Automation", "Analytics"],
            description: "Design effective email marketing strategies"
          }
        ]);
        break;
      case "graphic-design":
        setCourseTitle("Graphic Design Careers");
        setJobRoles([
          {
            title: "Senior Graphic Designer",
            package: "6-10 LPA",
            bgImg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            img: "/idroid-academy-logo2.png",
            skills: ["Adobe Suite", "Branding", "Typography"],
            description: "Lead creative design projects and teams"
          },
          {
            title: "UI/UX Designer",
            package: "7-12 LPA",
            bgImg: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            img: "/idroid-academy-logo2.png",
            skills: ["Figma", "Prototyping", "Research"],
            description: "Design user-centered digital experiences"
          },
          {
            title: "Brand Designer",
            package: "5-9 LPA",
            bgImg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            img: "/idroid-academy-logo2.png",
            skills: ["Logo Design", "Identity", "Guidelines"],
            description: "Create memorable brand identities"
          },
          {
            title: "Motion Graphics Designer",
            package: "6-11 LPA",
            bgImg: "https://images.unsplash.com/photo-1573164713988-8665fc243217?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            img: "/idroid-academy-logo2.png",
            skills: ["After Effects", "Animation", "Video"],
            description: "Bring designs to life with animation"
          },
          {
            title: "Creative Director",
            package: "12-20 LPA",
            bgImg: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            img: "/idroid-academy-logo2.png",
            skills: ["Strategy", "Leadership", "Vision"],
            description: "Guide creative vision and strategy"
          },
          {
            title: "Product Designer",
            package: "8-15 LPA",
            bgImg: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            img: "/idroid-academy-logo2.png",
            skills: ["Design Systems", "UX", "Research"],
            description: "Design complete product experiences"
          }
        ]);
        break;
      default:
        break;
    }
  }, [courseType]);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold text-blue-900 mb-4">
              {courseTitle}
            </h2>
            <p className="text-lg font-extralight text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities in Digital Marketing and Graphic Design with competitive salary packages
            </p>
          </div>

          {/* Auto-scrolling cards container */}
          <div className="relative">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-20 bg-gradient-to-r from-gray-50 to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 z-20 bg-gradient-to-l from-blue-50 to-transparent"></div>

            {/* Scrolling container */}
            <div className="overflow-hidden">
              <div className="flex gap-6 p-2 animate-scroll">
                {/* Duplicate cards for seamless loop */}
                {[...jobRoles, ...jobRoles].map((role, index) => (
                  <div
                    key={`${role.title}-${index}`}
                    className="flex-shrink-0 w-56 md:w-68 group"
                  >
                    <div className="relative h-88 rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 bg-white">
                      {/* Background image with overlay */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${role.bgImg})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      </div>

                      {/* Content */}
                      <div className="relative h-full flex flex-col justify-between p-6 text-white">
                        {/* Top section */}
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <img src={role.img} alt="Icon" className="w-10 h-10 object-contain" />
                          </div>
                          
                          <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                            {role.title}
                          </h3>
                        </div>

                        {/* Bottom section */}
                        <div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {role.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                          
                          <button className="w-full bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                            Learn More
                          </button>
                        </div>
                      </div>

                      {/* Hover overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-12">
            {jobRoles.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 10s linear infinite;
          }
        }
      `}</style>
    </>
  );
};

export default ProfessionalCourses;