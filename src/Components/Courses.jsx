import React from "react";

import {

  Calendar,

  Clock,

  Download,

  Star,

  Users,

  Award,

  BookOpen,

  Palette,

  Brush,

  Camera,

  Monitor,

  Target,

} from "lucide-react";



export default function Courses({ courseType }) {

  const courses = [

    {

      id: 1,

      title: "Graphic Designing",

      subtitle: "Visual Communication Program",

      duration: "3 Months",

      hours: "2 Hours/day",

      level: "Beginner to Advanced",

      students: "2,450+",

      rating: 4.8,

      price: "₹24,999",

      originalPrice: "₹49,999",

      badge: "POPULAR",

      color: "blue",

      features: ["Adobe Photoshop", "Illustrator", "Branding", "Logo Design"],

      tools: ["Ai", "Ps", "Lr"]

    },

    {

      id: 2,

      title: "Digital Marketing",

      subtitle: "Digital Design Program",

      duration: "4 Months",

      hours: "2 Hours/day",

      level: "Intermediate",

      students: "1,890+",

      rating: 4.9,

      price: "₹34,999",

      originalPrice: "₹69,999",

      badge: "ADVANCED",

      color: "indigo",

      features: ["UI/UX Design", "Figma", "Prototyping", "User Research"],

      tools: ["Figma", "Sketch", "Adobe Xd", "InVision"]

    }

  ];



  const handleEnrollNow = (course) => {
    if (window.openEnquiryModal) {
      window.openEnquiryModal('courses-enrollment');
    }
  };

  const filteredCourses = courseType

    ? courses.filter(course => course.title.toLowerCase().includes(courseType.split('-').join(' ')))

    : courses;



  return (

    <div className="w-full bg-gray-50 py-16">

      <div className="max-w-7xl mx-auto px-6">



        {/* HEADER */}

        <div className="text-center mb-12">

          <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">

            Our Courses

          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">

            Master professional design skills and build amazing digital experiences with industry-standard tools

          </p>

        </div>



        {/* COURSES GRID */}

        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {filteredCourses.map((course) => (

            <div key={course.id} className="group">



              {/* MAIN CARD */}

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">



                {/* TOP SECTION WITH CLIP PATH */}

                <div className={`relative ${course.color === 'blue' ? 'bg-[#1e3a8a]' : 'bg-[#4338ca]'

                  } p-8`}>



                  {/* DECORATIVE WAVE */}

                  <div className="absolute bottom-0 left-0 right-0">

                    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-8">

                      <path d="M0,32C30,28.7,60,21.5,90,20.7C120,20.5,150,25.5,180,29.3C210,33.5,240,35.5,270,33.3C300,31,330,24,360,20.7C390,18.5,420,22.5,450,26.3C480,30.5,510,32.5,540,30.3C570,28,600,21,630,18.7C660,16.5,690,20.5,720,24.3C750,28.5,780,30.5,810,28.3C840,26,870,19,900,16.7C930,14.5,960,18.5,990,22.3C1020,26.5,1050,28.5,1080,26.3C1110,24,1140,17,1170,14.7C1200,12.5,1230,16.5,1260,20.3C1290,24.5,1320,26.5,1350,24.3C1380,22,1410,15,1440,12.7L1440,60L0,60Z"

                        className="fill-white"></path>

                    </svg>

                  </div>



                  {/* BADGE */}

                  <div className="absolute top-4 right-4">

                    <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">

                      {course.badge}

                    </div>

                  </div>



                  {/* COURSE INFO */}

                  <div className="text-white relative z-10">

                    <div className="flex items-start justify-between mb-6">

                      <div>

                        <h2 className="text-2xl font-bold mb-1">{course.title}</h2>

                        <p className="text-white/80 text-sm">{course.subtitle}</p>

                      </div>



                      {/* RATING */}

                      <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg">

                        <Star className="w-4 h-4 text-yellow-400 fill-current" />

                        <span className="text-white text-sm font-bold">{course.rating}</span>

                      </div>

                    </div>



                    {/* STATS */}

                    <div className="grid grid-cols-3 gap-4">

                      <div className="text-center">

                        <Calendar className="w-5 h-5 text-white/80 mx-auto mb-1" />

                        <p className="text-white text-xs font-semibold">{course.duration}</p>

                      </div>

                      <div className="text-center">

                        <Clock className="w-5 h-5 text-white/80 mx-auto mb-1" />

                        <p className="text-white text-xs font-semibold">{course.hours}</p>

                      </div>

                      <div className="text-center">

                        <Users className="w-5 h-5 text-white/80 mx-auto mb-1" />

                        <p className="text-white text-xs font-semibold">{course.students}</p>

                      </div>

                    </div>

                  </div>

                </div>



                {/* CONTENT SECTION */}

                <div className="p-6">



                  {/* FEATURES */}

                  <div className="mb-6">

                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">

                      <Target className="w-4 h-4 text-[#1e3a8a]" />

                      What You'll Learn:

                    </h3>

                    <div className="space-y-2">

                      {course.features.map((feature, index) => (

                        <div key={index} className="flex items-center gap-2">

                          <div className="w-2 h-2 bg-[#3b82f6] rounded-full"></div>

                          <span className="text-sm text-gray-600">{feature}</span>

                        </div>

                      ))}

                    </div>

                  </div>



                  {/* TOOLS */}

                  <div className="mb-6">

                    <p className="text-xs text-gray-500 mb-2">Design Tools You'll Master:</p>

                    <div className="flex gap-2 flex-wrap">

                      {course.tools.map((tool, index) => (

                        <div key={index} className={`${course.color === 'blue'

                            ? tool === 'Ai' ? 'bg-red-100 text-red-600'

                              : tool === 'Ps' ? 'bg-blue-100 text-blue-600'

                                : 'bg-indigo-100 text-indigo-600'

                            : tool === 'Figma' ? 'bg-purple-100 text-purple-600'

                              : tool === 'Sketch' ? 'bg-orange-100 text-orange-600'

                                : tool === 'Adobe Xd' ? 'bg-pink-100 text-pink-600'

                                  : 'bg-blue-100 text-blue-600'

                          } px-3 py-1 rounded-lg text-xs font-bold`}>

                          {tool}

                        </div>

                      ))}

                    </div>

                  </div>



                  {/* PRICE AND CTA */}

                  <div className="flex items-center justify-between">

                    <div>

                      <div className="flex items-baseline gap-2">

                        <span className="text-2xl font-bold text-gray-900">{course.price}</span>

                        <span className="text-sm text-gray-400 line-through">{course.originalPrice}</span>

                      </div>

                      <p className="text-xs text-green-600 font-semibold">Save 50% - Limited Time!</p>

                    </div>



                    <button 
                      onClick={() => handleEnrollNow(course)}
                      className="bg-[#3b82f6] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#1e3a8a] transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
                    >

                      <Download className="w-4 h-4" />

                      Enroll Now

                    </button>

                  </div>

                </div>

              </div>



              {/* HOVER CARD */}

              <div className="mt-4 bg-gray-100 rounded-xl p-4 border border-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-2">

                    <Award className="w-5 h-5 text-yellow-500" />

                    <span className="text-sm font-semibold text-gray-700">Certificate Included</span>

                  </div>

                  <div className="flex items-center gap-2">

                    <div className="w-2 h-2 bg-[#3b82f6] rounded-full"></div>

                    <span className="text-sm text-gray-600">Portfolio Building</span>

                  </div>

                </div>

              </div>



            </div>

          ))}

        </div>



        {/* BOTTOM CTA */}

        {/* <div className="bg-[#1e3a8a] rounded-2xl p-8 text-white text-center">

          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Creative Journey?</h2>

          <p className="text-blue-100 mb-6 max-w-3xl mx-auto">

            Join thousands of students who are now working as professional designers with our expert-led courses

          </p>

          <div className="flex gap-4 justify-center">

            <button className="bg-white text-[#1e3a8a] font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition flex items-center gap-2">

              <Monitor className="w-4 h-4" />

              Browse All Courses

            </button>

            <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 transition flex items-center gap-2">

              <Brush className="w-4 h-4" />

              Get Free Demo

            </button>

          </div>

        </div>

         */}

      </div>

    </div>

  );

}

