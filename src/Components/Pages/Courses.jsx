import React from 'react';
import Layout from '../Layout';

export default function Courses() {
  const courseList = [
    {
      title: "Graphic Designing",
      duration: "3 Months",
      level: "Beginner to Advanced",
      description: "Master visual communication with industry-standard tools",
      features: ["Adobe Creative Suite", "Typography", "Brand Design", "Digital Illustration"],
      price: "₹15,999"
    },
    {
      title: "UI/UX Designing", 
      duration: "4 Months",
      level: "Intermediate",
      description: "Create beautiful and functional user interfaces",
      features: ["Figma", "User Research", "Prototyping", "Design Systems"],
      price: "₹19,999"
    },
    {
      title: "Video Editing",
      duration: "2 Months", 
      level: "Beginner",
      description: "Learn professional video editing techniques",
      features: ["Premiere Pro", "After Effects", "Color Grading", "Motion Graphics"],
      price: "₹12,999"
    },
    {
      title: "Advanced Program",
      duration: "6 Months",
      level: "Advanced", 
      description: "Comprehensive program covering all aspects",
      features: ["All Tools", "Portfolio Building", "Placement Support", "Industry Projects"],
      price: "₹29,999"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e0a8a] via-[#1e3a8a] to-[#3b82f6] text-white px-6 py-40">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Transform Your Career with <br /> Professional Courses
          </h1>
          <p className="text-md md:text-xl font-extralight text-gray-100 mb-8 max-w-3xl mx-auto animate-fade-in-up animate-stagger-1">
            Choose from our comprehensive range of digital design courses and start your journey to success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-stagger-2">
            <button className="bg-white text-[#1e3a8a] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition transform hover:scale-105 shadow-xl">
              Explore All Courses
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#1e3a8a] transition transform hover:scale-105">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Students Placed" },
            { number: "95%", label: "Success Rate" },
            { number: "50+", label: "Industry Partners" },
            { number: "4.9★", label: "Average Rating" }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fade-in-up animate-stagger-3">
              <div className="text-4xl font-bold text-[#1e3a8a] mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Grid */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Our Popular Courses</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Industry-relevant curriculum designed by experts with real-world projects
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseList.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group animate-fade-in-up animate-stagger-4">
                {/* Course Header */}
                <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] p-4 text-white">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <div className="flex gap-2 text-sm">
                    <span className="bg-white/20 px-2 py-1 rounded-full">{course.duration}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full">{course.level}</span>
                  </div>
                </div>
                
                {/* Course Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-[#1e3a8a]">{course.price}</div>
                      <div className="text-sm text-gray-500">One-time payment</div>
                    </div>
                    <button className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
