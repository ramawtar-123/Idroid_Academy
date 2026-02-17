import React from 'react';
import Layout from '../Layout';
import FAQSection from '../FAQSection';

export default function AdvancedProgramCourse() {
  const modules = [
    "Advanced Design Principles",
    "Complete Adobe Suite Mastery",
    "Full Stack Digital Marketing",
    "Advanced Video Production",
    "UI/UX Design Systems",
    "Brand Strategy & Development",
    "Portfolio & Career Development",
    "Industry Capstone Project"
  ];

  const skills = [
    "Complete Design Suite",
    "Advanced Marketing",
    "Professional Video",
    "Brand Strategy",
    "Portfolio Development",
    "Career Guidance"
  ];

  const placements = [
    { company: "Top Design Agency", role: "Creative Director", package: "₹8.5 LPA" },
    { company: "MNC Company", role: "Brand Manager", package: "₹7.2 LPA" },
    { company: "Digital Agency", role: "Digital Marketing Head", package: "₹7.8 LPA" },
    { company: "Media Company", role: "Creative Lead", package: "₹8.0 LPA" }
  ];

  const benefits = [
    "All 4 Individual Courses Included",
    "1-on-1 Mentorship",
    "Industry Projects",
    "Placement Guarantee",
    "Portfolio Building",
    "Lifetime Access"
  ];

  const advancedProgramFAQ = [
    {
      question: "What is the duration of the Advanced Program?",
      answer: "The Advanced Program is 6 months comprehensive course covering all aspects of design, marketing, and video."
    },
    {
      question: "What courses are included in this program?",
      answer: "This program includes Graphic Design, Digital Marketing, Video Editing, and Motion Graphics courses."
    },
    {
      question: "Is there placement guarantee?",
      answer: "Yes, we provide 100% placement guarantee with top companies. Our placement rate is over 95%."
    },
    {
      question: "What is the average salary after this program?",
      answer: "The average starting salary ranges from ₹7.2 LPA to ₹8.5 LPA for senior roles."
    },
    {
      question: "Will I get individual mentorship?",
      answer: "Yes, you'll get 1-on-1 mentorship from industry experts throughout the program."
    },
    {
      question: "Do I get lifetime access to course materials?",
      answer: "Yes, you get lifetime access to all course materials, recordings, and future updates."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in-up">
                Advanced Program <br /> Master Course
              </h1>
              <p className="text-xl text-gray-600 mb-8 animate-fade-in-up animate-stagger-1">
                Comprehensive program covering all aspects of digital design and marketing with guaranteed placement
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up animate-stagger-2">
                <button className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition transform hover:scale-105">
                  Enroll Now
                </button>
                <button className="border-2 border-[#1e3a8a] text-[#1e3a8a] px-8 py-4 rounded-xl font-bold hover:bg-[#1e3a8a] hover:text-white transition">
                  Download Brochure
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 animate-fade-in-up animate-stagger-3">
                <div className="text-center p-4 bg-gray-100 rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold text-[#1e3a8a]">6 Months</div>
                  <div className="text-gray-600 text-sm sm:text-base">Duration</div>
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold text-[#1e3a8a]">Advanced</div>
                  <div className="text-gray-600 text-sm sm:text-base">Level</div>
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold text-[#1e3a8a]">₹29,999</div>
                  <div className="text-gray-600 text-sm sm:text-base">Fee</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop" 
                alt="Advanced Program"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Program Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center animate-fade-in-up animate-stagger-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-lg font-medium text-gray-800">{benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Comprehensive Curriculum</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up animate-stagger-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <span className="text-lg font-medium text-gray-800">{module}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Skills You'll Master</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center animate-fade-in-up animate-stagger-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{skill[0]}</span>
                </div>
                <div className="text-lg font-medium text-gray-800">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placements Section */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Premium Placements</h2>
          <p className="text-xl text-center mb-12 text-blue-100">
            Advanced program graduates placed in top companies with premium packages
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {placements.map((placement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 animate-fade-in-up animate-stagger-7">
                <div className="text-lg font-bold text-white mb-2">{placement.company}</div>
                <div className="text-2xl font-bold text-yellow-300 mb-2">{placement.role}</div>
                <div className="text-xl text-blue-200">{placement.package}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* CTA */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready for Your Dream Career?</h2>
          <p className="text-xl mb-8 text-gray-600">Join our advanced program and get guaranteed placement support</p>
          <button className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition transform hover:scale-105 shadow-xl">
            Enroll in Advanced Program
          </button>
        </div>
      </section>
      <FAQSection 
        faqData={advancedProgramFAQ} 
        title="Frequently Asked Questions"
      />
    </Layout>
  );
}
